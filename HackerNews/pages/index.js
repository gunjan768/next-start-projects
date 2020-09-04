// import fetch from "isomorphic-fetch";
import Error from "next/error";
import Link from "next/link";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

class Index extends React.Component 
{
	static async getInitialProps({ req, res, query }) 
	{
		let stories, page;

		try 
		{
			// On an initial render query.page will be undefined. query is the query parameters ( /..../../?page=.... ).
			page = Number(query.page) || 1;

			const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`); 
			stories = await response.json();
		} 
		catch(error) 
		{
			// console.log(error);

			stories = [];
		}

		return { page, stories };
	}

	componentDidMount() 
	{ 
		// if("serviceWorker" in navigator) 
		// {
		// 	navigator.serviceWorker.register("/service-worker.js")
		// 	.then(registration => console.log("service worker registration successful", registration))
		// 	.catch(err => console.warn("service worker registration failed", err.message));
		// }
	}

	render() 
	{
		const { stories, page } = this.props;
		
		if(stories.length === 0) 
		{
			// Error is the inbuilt component extracted from Next. Instead we can make our own custom error page ( in pages directory ).
			return <Error statusCode = { 503 } />;
		}

		return (
			<Layout
				title="Hacker Next"
				description="A Hacker News clone made with Next.js"
			>
				<StoryList stories = { stories } />

				<footer>
					<Link href = {`/?page=${page + 1}`}>
						<a>Next Page ({page + 1})</a>
					</Link>
				</footer>

				<style jsx>{`
					footer {
						padding: 1em;
					}
					footer a {
						font-weight: bold;
						color: black;
						text-decoration: none;
					}
				`}</style>
			</Layout>
		);
	}
}

export default Index;