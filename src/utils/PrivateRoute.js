import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, data, ...rest }) => (
  
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token').length > 0 ? (
          <Component {...props} data={data} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );