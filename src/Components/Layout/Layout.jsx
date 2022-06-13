import React from "react";
import Header from "../Header/Header";
import'./layout.css'

export const Layout = ({children}) => (
  <div className="layout-content">
    <Header/>
    {children}
  </div>
)