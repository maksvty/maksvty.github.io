import {Component, useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";

export const withAuth = (Component) => (props) => {

  const {user} = useContext(AuthContext);

  if (!user) return <p>You are not</p>

  return <Component {...props} />
}
