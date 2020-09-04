import axios from "axios";
import Router from "next/router";

// This will let the cookie data to be automatically passed along with the request ( i.e request using axios ).
axios.defaults.withCredentials = true;

export const getServerSideToken = req => 
{
	const { signedCookies = {} } = req;

	if(!signedCookies || !signedCookies.token) 
	return {};

	return { user: signedCookies.token };
};

export const getClientSideToken = () => 
{
	if(typeof window !== "undefined") 
	{
		const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};

		return { user };
	}

	return { user: {} };
};

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";

export const getUserScript = user => 
{
 	return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
}

export const authInitialProps = (isProtectedRoute = false) => ({ req, res }) => 
{
	//  For the initial page load, getInitialProps will run on the server only. getInitialProps will then run on the client when navigating 
	// to a different route via the next/link component or by using next/router. So for the first when runs on server side, we will get 
	// back req object and for the subsequent loading req will be undefined as loads on client side.
	const auth = req ? getServerSideToken(req) : getClientSideToken();
	const currentPath = req ? req.url : window.location.pathname;
	const user = auth.user;
	const isAnonymous = !user || user.type !== "authenticated";
	
	// console.log({req});

	if(isProtectedRoute && isAnonymous && currentPath !== "/login") 
	{
		return redirectUser(res, "/login");
	}

	// console.log({auth});

	return { auth };
}

const redirectUser = (res, path) => 
{
	// console.log({res});

	if(res) 
	{
		res.redirect(302, path);
		res.finished = true;
		
		// console.log({path});

		return {};
	}

	Router.replace(path);

	return {};
}

export const loginUser = async (email, password) => 
{
	const { data } = await axios.post("/api/login", { email, password });

	if(typeof window !== "undefined") 
	{
		window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
	}
}

export const logoutUser = async () => 
{
	if(typeof window !== "undefined") 
	{
		window[WINDOW_USER_SCRIPT_VARIABLE] = {};
	}

	await axios.post("/api/logout");
	Router.push("/login");
}

export const getUserProfile = async () => 
{
	const { data } = await axios.get("/api/profile");
	
	// console.log({data});

	return data;
}