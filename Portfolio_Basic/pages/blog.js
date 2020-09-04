import Layout from "../components/Layout";
import Link from "next/link";
import { withRouter } from "next/router";

// 'as' prop of Link tag will replace the url name with the string value passed to 'as' so that we can pass something as query parameter and 
// it will not be visible in the url.
const PostLink = ({ slug, title, pathname }) => (
	<li>
		{
			// Remember that pathname extracted from the withRouter is already companied by the slah ( or forward slash '/' ). So don't
			// put the slash before pathaname else it will create the error.
		}

		<Link as = {`${pathname}/${slug}`} href = {`/post?title=${title}`}>
			<a> { title }</a>
		</Link>
	</li>
);

const Blog = ({ router : { pathname }}) => 
{ 
	return (
		<Layout title="My Blog">
			<ul>
				<PostLink pathname = { pathname } slug="react-post" title="React Post" />
				<PostLink pathname = { pathname } slug="angular-post" title="Angular Post" />
				<PostLink pathname = { pathname } slug="vue-post" title="Vue Post" />
			</ul>
		</Layout>
	);
}

export default withRouter(Blog);