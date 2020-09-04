import Layout from "../components/Layout";
// import fetch from "isomorphic-unfetch";
import Error from "./_error";
import { Component } from "react";

export default class About extends Component 
{
	// getInitialProps() is a method we use in Next.js to fetch data fromn the server ( i.e to have a side effects ) instead of componentDidMount
	// as we can use componentDidMount in class based only but getInitialProps() method can be used with functional component also. 
	// getInitialProps() belongs to the About class ( i.e static ) hence we can use outside the class also. getInitialProps() will addd our
	// fetched data in props instead of state.
	static async getInitialProps() 
	{
		const res = await fetch("https://api.github.com/users/gunjan768");
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		
		// Here we need to return an object and every key-value pair will get attach to the props instead of state. 
		return { user: data, statusCode };
	}

	render() 
	{
		const { user, statusCode } = this.props;

		if(statusCode) {
			return <Error statusCode = { statusCode } />;
		}

		// console.log({user});

		return (
			<Layout title="About">
				<p>{ user.name }</p>
				<img src = { user.avatar_url } alt="Reed" height="200px" />
			</Layout>
		);
	}
}