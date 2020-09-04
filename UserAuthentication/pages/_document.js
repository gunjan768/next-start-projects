import Document, { Head, Main, NextScript } from "next/document";
import { getServerSideToken, getUserScript } from "../lib/auth";

export default class MyDocument extends Document 
{
	static async getInitialProps(context) 
	{
		const props = await Document.getInitialProps(context);
		const userData = await getServerSideToken(context.req);

		return { ...props, ...userData };
	}

	render() 
	{
		const { user = {} } = this.props;
		
		// dangerouslySetInnerHTML is an attribute under DOM elements in React. According to the official documentation, dangerouslySetInnerHTML
		// is React’s replacement for using innerHTML in the browser DOM. In simple words, using dangerouslySetInnerHTML, you can set HTML 
		// directly from React. In general, setting HTML from code is risky because it’s easy to inadvertently ( without intention or 
		// accidentally ) expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to 
		// type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it’s dangerous.
		return (
			<html>
				<Head />
				<body>
					<Main />
					<script dangerouslySetInnerHTML = {{ __html: getUserScript(user) }} />
					<NextScript />
				</body>
			</html>
		);
	}
}