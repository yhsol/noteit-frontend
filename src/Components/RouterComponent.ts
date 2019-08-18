import * as React from "react";
import { Route, Switch } from "react-router-dom";

interface IRouterComponentProps {
  isLoggedIn: boolean;
}

const LoggedInRoutes: React.FunctionComponent<{}> = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/search" component={Search} />
    <Route path="/explore" component={Explore} />
    <Route path="/notifications" component={Notifications} />
    <Route path="/:userName" component={ProfileContainer} />
  </Switch>
);

const RouterComponent: React.FC<IRouterComponentProps> = ({ isLoggedIn }) => {
  isLoggedIn ? {} : {};
};

export default RouterComponent;
