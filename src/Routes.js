import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Main from "./Layout/Main";
import RouteWithLayout from "./containers/RouteWithLayout/RouteWithLayout";
import Signup from "./containers/Signup/Signup";
import Signin from "./containers/Signin/Signin";
import Events from "./containers/Events/Events";
import Support from "./containers/Support/Support";
import CreateNewSupport from "./containers/CreateNewSupport/CreateNewSupport";
import Sessions from "./containers/Sessions/Sessions";
import Orders from "./containers/Orders/Orders";
import PriceList from "./containers/PriceList/PriceList";
import Coupons from "./containers/Coupons/Coupons";
import SMSLog from "./containers/SMSLog/SMSLog";
import TicketDetails from "./containers/TicketDetails/TicketDetails";
import OrderDetails from "./containers/OrderDetails/OrderDetails";
import changeTitle from "./utils/change-title";
import ProxyComp from "./containers/ProxyComp/ProxyComp";

const Index = () => {
  // a component which will be replaced at some point of time
  useEffect(() => {
    changeTitle("Home");
  }, []);

  return (
    <div className="text-center">
      {/* <Link to="/signup" className="btn btn-primary m-5">
        Auth
      </Link> */}
      <Link to="/events" className="btn btn-primary m-5">
        Events
      </Link>
      <Link to="/support" className="btn btn-primary m-5">
        Support
      </Link>
      <Link to="/create-new-support" className="btn btn-primary m-5">
        CreateNewSupport
      </Link>
      <Link to="/sessions" className="btn btn-primary m-5">
        Sessions
      </Link>
      <Link to="/orders" className="btn btn-primary m-5">
        Orders
      </Link>
      <Link to="/price-list" className="btn btn-primary m-5">
        Price List
      </Link>
      <Link to="/coupons" className="btn btn-primary m-5">
        Coupons
      </Link>
      <Link to="/sms-log" className="btn btn-primary m-5">
        SMS Log
      </Link>
      <Link to="/ticket-details" className="btn btn-primary m-5">
        Ticket Details
      </Link>
      <Link to="/order-details" className="btn btn-primary m-5">
        Order Details
      </Link>
    </div>
  );
};

const Routes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return (
      <Router>
        <Switch>
          <RouteWithLayout exact path="/" component={Index} layout={Main} />
          <RouteWithLayout
            exact
            path="/support"
            layout={Main}
            component={Support}
          />
          <RouteWithLayout path="/events/" component={Events} layout={Main} />
          <RouteWithLayout
            exact
            path="/create-new-support"
            component={CreateNewSupport}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/sessions/:eventId"
            component={Sessions}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/orders/:sessionId/:status?"
            component={Orders}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/proxy-comp/:sessionId/:status"
            component={ProxyComp}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/price-list/:eventId"
            component={PriceList}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/coupons/:eventId"
            component={Coupons}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/sms-log/:sessionId"
            component={SMSLog}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/ticket-details"
            component={TicketDetails}
            layout={Main}
          />
          <RouteWithLayout
            exact
            path="/order-details/:orderId"
            component={OrderDetails}
            layout={Main}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Redirect to="/signin" />
        </Switch>
      </Router>
    );
  }
};

export default Routes;
