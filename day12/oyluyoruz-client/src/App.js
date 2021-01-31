import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import New from "./pages/New";
import Questions from "./pages/Questions";
import QuestionDetail from "./pages/QuestionDetail";

function App() {
	return (
		<div className="app">
			<Router>
				<div>
					<nav>
						<ul className="menu">
							<li>
								<Link to="/">Questions</Link>
							</li>
							<li>
								<Link to="/new">New</Link>
							</li>
						</ul>
					</nav>
					<hr />

					<div className="content">
						<Switch>
							<Route path="/" exact component={Questions} />
							<Route path="/q/:id" component={QuestionDetail} />
							<Route path="/new" component={New} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
