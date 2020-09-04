const next = require("next");
const express = require("express");
const axios = require("axios");
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRET = "emilialovesgunjan";

const COOKIE_OPTIONS = 
{
	httpOnly: true,

	// secure means cookie will be set only for https and not for http.
	secure: !dev,
	
	// signed means we can verify the source of the cookie. If any user tries to alter the data stored in the cookie then cookie will be no 
	// longer in use and all the data will get erased which was stored in cookie. 
	signed: true	
};

const authenticate = async (email, password) => 
{
	const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
	
	// find() :  Returns the array element value if any of the elements in the array pass the test, otherwise it returns undefined.
	return data.find(user => user.email === email && user.website === password);
};

app.prepare().then(() => 
{
	const server = express();

	server.use(express.json());
	server.use(cookieParser(COOKIE_SECRET));

	server.post("/api/login", async (req, res) => 
	{
		const { email, password } = req.body;
		const user = await authenticate(email, password);

		if(!user) 
		return res.status(403).send("Invalid email or password");
		
		const userData = 
		{
			name: user.name,
			email: user.email,
			type: AUTH_USER_TYPE
		};

		// 'token' is the name of the cookie ( free to give any name you want ).
		res.cookie("token", userData, COOKIE_OPTIONS);
		
		return res.status(200).json(userData);
	});

	server.post("/api/logout", (req, res) => 
	{
		res.clearCookie("token", COOKIE_OPTIONS);
		res.sendStatus(204);
	});

	server.get("/api/profile", async (req, res) => 
	{
		// We will get back the signedCookies if the user is authenticated or else we assign the signedCookies as an empty obeject i.e
		// when the user is not authenticated. 
		const { signedCookies = {} } = req;
		const { token } = signedCookies;
		
		if(token && token.email) 
		{
			const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
			
			try
			{
				const userProfile = data.find(user => user.email === token.email);
				
				if(!data)
				throw new Error("Error while fetching data");

				return res.status(200).json({ user: userProfile });
				
			}
			catch(error)
			{
				throw error;
			}
		}

		return res.sendStatus(404);
	});

	server.get("*", (req, res) => 
	{
		return handle(req, res);
	});

	server.listen(port, error => 
	{
		if(error) 
		throw error;

		console.log(`Listening on PORT ${port}`);
	});
});