import { loginUser } from "../lib/auth";
import Router from "next/router";

class LoginForm extends React.Component 
{
	state = 
	{
		email: "Rey.Padberg@karina.biz",
		password: "ambrose.net",
		error: "",
		isLoading: false
	};

	handleChange = event => 
	{
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event => 
	{
		event.preventDefault();

		const { email, password } = this.state;
		this.setState({ error: "", isLoading: true });
		
		// Generally we pass an annonynous function as a callback to catch block but here we passed a showError as a callback so error
		// ( here named as err ) object will be passed as an argument to showError.
		loginUser(email, password)
		.then(() => Router.push("/profile"))
		.catch(this.showError);		
	}

	showError = err => 
	{
		// console.error(error);
		
		const error = (err.response && err.response.data) || err.message;

		this.setState({ error, isLoading: false });
	}

	render() 
	{
		const { email, password, error, isLoading } = this.state;

		return (
			<form onSubmit = { this.handleSubmit }>
				<div>
					<input
						type="email"
						name="email"
						placeholder="email"
						value = { email }
						onChange = { this.handleChange }
					/>
				</div>
				<div>
					<input
						type="password"
						name="password"
						placeholder="password"
						value = { password }
						onChange = { this.handleChange }
					/>
				</div>
				<button disabled = { isLoading } type="submit">
					{ isLoading ? "Sending" : "Submit" }
				</button>
				{ error && <div>{error}</div> }
			</form>
		);
	}
}

export default LoginForm;