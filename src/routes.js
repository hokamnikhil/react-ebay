import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AuthenticatedRoute from "./components/authenticator/authenticatedRoute";
import UnauthenticatedRoute from "./components/authenticator/unauthenticatedRoute";
import { AppContext } from "./libs/contextLib";

const history = createBrowserHistory();
const [isAuthenticated, userHasAuthenticated] = useState(false);