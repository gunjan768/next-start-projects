import Layout from "../components/Layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";

const Index = props => 
{
	return (
		<Layout title="Home" { ...props }>
			<Link href="/profile"><a>Go to profile</a></Link>
		</Layout>
	);
}

// getInitialProps enables server-side rendering in a page and allows you to do initial data population, it means sending the page with the 
// data already populated from the server. This is especially useful for SEO. getInitialProps is an async function that can be added to any 
// page as a static method. getInitialProps is used to asynchronously fetch some data, which then populates props. Data returned from 
// getInitialProps is serialized when server rendering, similar to what JSON.stringify does. Make sure the returned object from getInitialProps 
// is a plain Object and not using Date, Map or Set. For the initial page load, getInitialProps will run on the server only. getInitialProps 
// will then run on the client when navigating to a different route via the next/link component or by using next/router.

// getInitialProps receives a single argument called context, it's an object with the following properties:

// pathname - Current route. That is the path of the page in /pages
// query - Query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shown in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering

Index.getInitialProps = authInitialProps();

export default Index;