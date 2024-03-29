import * as React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
        <NavLink className='brand' to="/">Sample</NavLink>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/form">Rent</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/rules">Rule</NavLink>
          </li>
          <li>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <AccountCircleIcon sx={{color:"white", fontSize: 38}}/>
              </IconButton>
            </Tooltip>
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            border: "2px solid rgba(255, 255, 255, .2)",
            backdropFilter:"blur(50px)",
            bgcolor:'transparent',
            boxShadow:"0 0 10 rgba(0, 0, 0, .2)",
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <LoginIcon sx={{marginRight: 1, color:'white'}}/> <NavLink className="menu-item" to="/login">Sign In</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PersonAddAlt1Icon  sx={{marginRight: 1, color:'white'}}/> <NavLink className="menu-item" to="/register">Sign Up</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AirportShuttleIcon  sx={{marginRight: 1, color:'white'}}/> <NavLink className="menu-item" to="/order">Order</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon sx={{color:"white"}} />
          </ListItemIcon>
            <NavLink className="menu-item" to="/">Log Out</NavLink>
        </MenuItem>
      </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
