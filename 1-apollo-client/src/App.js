import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import PostDetail from "./pages/PostDetail";

function App() {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul className="menu">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<hr />

				<Switch>
					<Route path="/post/:id" component={PostDetail} />
					<Route path="/users" exact component={Users} />
					<Route path="/users/:id" component={UserDetail} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
