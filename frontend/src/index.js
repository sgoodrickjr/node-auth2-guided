import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Logout from "./logout"
import Register from "./register"
import Login from "./login"

const App = () => {
	return (
		<main>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
				<Link to="/logout">Logout</Link>
			</nav>

			<Switch>
				<Route path="/logout">
					<Logout />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<h1>Welcome</h1>
				</Route>
			</Switch>
		</main>
	)
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
)
