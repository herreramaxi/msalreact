import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, Container, Menu, MenuItem } from "@material-ui/core";
import { loginRequest } from "../authConfig";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ProfileImage } from "./ProfileImage";

import { positions } from '@material-ui/system';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { instance } = useMsal();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
    };

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        });

        setAnchorEl(null);
    };

    const handleLogout = () => {
        instance.logoutRedirect().catch(e => {
            console.error(e);
        });

        setAnchorEl(null);
    }

    return (
        <>
            <div className="header">
                <Navbar
                    fixed="top"
                    expand={true}
                    expanded={true}
                    className="navbar navbar-expand-lg navbar-light bg-light mb-3 justify-content-between position-sticky">
                    <a className="navbar-brand" href="/">MSAL React</a>

                    <div className="text-right float-right">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MoreVertIcon />
                            <ProfileImage></ProfileImage>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <UnauthenticatedTemplate>
                                <MenuItem onClick={handleLogin}>Login</MenuItem>
                            </UnauthenticatedTemplate>
                            <AuthenticatedTemplate>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </AuthenticatedTemplate>
                        </Menu>

                    </div>
                </Navbar>

            </div >
            <Container>
                {props.children}
            </Container>
        </>
    );
};