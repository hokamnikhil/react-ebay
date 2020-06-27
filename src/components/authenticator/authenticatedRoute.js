import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
    const { pathname, search } = useLocation();
    const { isAuthenticated } = useAppContext();
    console.log('AuthenticatedRoute isAuthenticated', isAuthenticated);
    console.log('AuthenticatedRoute children', rest);
    return (
        <Route {...rest}>
            {isAuthenticated ? (
                children
            ) : (
                    <Redirect to={
                        `/login?redirect=${pathname}${search}`
                    } />
                )}
        </Route>
    );
}