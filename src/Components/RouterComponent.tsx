import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Notification from "../Routes/Notification";
import Search from "../Routes/Search";
import EditProfile from "../Routes/EditProfile";
import Profile from "../Routes/Profile";
import Auth from "../Routes/Auth";

interface IRouterComponentProps {
  isLoggedIn: boolean;
}

const LoggedInRoutes: React.FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/explore" component={Explore} />
      <Route path="/notification" component={Notification} />
      <Route path="/search" component={Search} />
      <Route exact path="/accounts" component={EditProfile} />
      <Route path="/:username" component={Profile} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

const LoggedOutRoutes: React.FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

const RouterComponent: React.FC<IRouterComponentProps> = ({ isLoggedIn }) => {
  return (
    <Router>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Router>
  );
};

export default RouterComponent;
