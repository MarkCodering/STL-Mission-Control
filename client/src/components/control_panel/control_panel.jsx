import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu
} from "cdbreact";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

function onClickListener() {
  return true;
}

export default function ControlPanel() {

  return (
    <div>
      <div
        style={{ display: "flex", height: "100vh",  overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#003060">
          <CDBSidebarHeader prefix={<i className="fa fa-bars"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Mission Control
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Router>
                <NavLink exact to="/launch" activeClassName="activeClicked">
                  <Button size="sm" type="button" variant="warning" onClick={onClickListener}>
                    Launch
                  </Button>
                </NavLink>
        
                <NavLink exact to="/abort" activeClassName="activeClicked">
                  <Button size="sm" type="button" variant="danger">
                    Abort
                  </Button>
                </NavLink>
              </Router>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              Space Technology Lab
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </div>
  );
}
