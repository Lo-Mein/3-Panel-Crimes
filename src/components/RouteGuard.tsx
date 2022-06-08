import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteGuard = () => {
  const regexExp = /^[a-f0-9]{64}$/gi;

  const key = regexExp.test(localStorage.getItem("key")); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to the landing page
  return key ? <Outlet /> : <Navigate to="/" />;
};

export default RouteGuard;