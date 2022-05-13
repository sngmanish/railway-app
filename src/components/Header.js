import React from "react";
import { AppBar, Toolbar, Box,} from "@mui/material";
import { Link } from "react-router-dom";



const Header = () => {

  return (
    <div>
      {
        <AppBar position="static" sx={{ background: "#707070" }}>
          <Toolbar>
            <Link to="/">
              <Box component="img" src="/Logo.png" alt="XFlix" height="40px" />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      }
    </div>
  );
};

export default Header;
