import Document, { Head, Main, NextScript } from "next/document";
import App from "./_app";

// Here we can access all the html documents directly like Head tag. To add the Head tag ( Head tag is used to add the links, meta part etc )
// Next provide us a separate page called '_document.js'. From here we can use it everywhere across our project. You can add Head tag to the  
// page where you need it instead of adding it here. We can add title tag inside the Head tag in _document.js page as title is specific to 
// the page and not belongs to the whole project.
export default class MyDocument extends Document 
{
	render() 
	{
		return (
			<html lang="en">
				<Head>
					<meta
						name="description"
						content="A site for my programming portfolio"
					/>
					<meta charSet="utf-8" />
					<meta name="robots" content="noindex, nofollow" />

					{
						// Adding <meta name="viewport" ...> in pages/_document.js will lead to unexpected results since it cannot be deduped. 
						// The viewport tag should be handled by next/head in pages/_app.js. De-dupe stands for de-duplication and is defined 
						// as optimizing data storage by eliminating duplicate copies of data. An example of de-dupe is to remove multiple copies
						// of the same file that are stored in a database in multiple locations.
						
						// <meta name="viewport" content="width=device-width" />
					}

					<App />

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style global jsx>{`
					body {
						font-family: "Roboto", sans-serif;
					}
				`}</style>
			</html>
		);
	}
}