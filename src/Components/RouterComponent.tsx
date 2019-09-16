import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Notification from "../Routes/Notification";
import Search from "../Routes/Search";
import EditProfile from "../Routes/EditProfile";
import Auth from "../Routes/Auth";
import Profile from "../Routes/Profile";
import EditPost from "../Routes/EditPost";
import Post from "../Routes/Post";
import UploadPost from "../Routes/UploadPost";
// TODO: 블로그이기 때문에 login 이 되지 않았을 때도 feed 를 보여줘야 됨.

const LoggedInRoutes: React.FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/uploadpost" component={UploadPost} />
      <Route path="/editpost" component={EditPost} />
      <Route path="/explore" component={Explore} />
      <Route path="/notification" component={Notification} />
      <Route path="/search" component={Search} />
      <Route exact path="/accounts" component={EditProfile} />
      <Route path="/post/:id" component={Post} />
      <Route path="/profile/:username" component={Profile} />
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

const RouterComponent: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default RouterComponent;
