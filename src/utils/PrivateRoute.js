import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, data, page, ...rest }) => (
  
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} data={data} page={page}/>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );