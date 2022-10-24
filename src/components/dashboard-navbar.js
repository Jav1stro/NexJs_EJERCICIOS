import PropTypes from "prop-types";
import { useState } from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Users as UsersIcon } from "../icons/users";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'black',
  borderBottom: '2px solid rgb(245,199,26)',
  boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
          paddingRight:10,
          minHeight: 64,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'flex-end',
          alignItems: 'flex-end'
        }}
        {...other}
      >

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            sx={{
              width:'10%',
              backgroundColor: "white",
              color: 'black'
            }}
            endIcon={<ArrowBackIcon fontSize="small" />}
          >
            Menu
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#9BB1FF",
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#9BB1FF",
              }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#9BB1FF",
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        {/* </Toolbar> */}
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
