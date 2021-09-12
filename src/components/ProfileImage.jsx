import Tooltip from '@material-ui/core/Tooltip';
import { useMsal } from "@azure/msal-react";
import { getProfilePhoto } from "graph";
import React, { useEffect, useState } from "react"
import { loginRequest } from "../authConfig";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useIsAuthenticated } from "@azure/msal-react";


export const ProfileImage = (props) => {
    const { instance, accounts } = useMsal();
    const [profilePicture, setProfilePicture] = useState(null);
    const name = (accounts[0] && accounts[0].name) ?? null;
    const isAuthenticated = useIsAuthenticated();

    const profileImage = {
        width: "40px",
        height: "40px",
        boxSizing: "border-box",
        backgroundClip: "content-box",
        border: "2px solid transparent",
        borderRadius: "49.9%"
    };

    useEffect(() => {

        if (!accounts[0]) { return; }
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {

            getProfilePhoto(response.accessToken).then(r => {
                let reader = new FileReader();
                reader.readAsDataURL(r);

                reader.onload = function () {
                    var base64 = reader.result; // data url

                    setProfilePicture(base64);
                };
            });
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                getProfilePhoto(response.accessToken).then(r => {
                    let reader = new FileReader();
                    reader.readAsDataURL(r);

                    reader.onload = function () {
                        var base64 = reader.result; // data url

                        setProfilePicture(base64);
                    };
                });
            });
        });

    }, [accounts, instance])

    return (<div>


        {profilePicture &&
            <Tooltip title={name}>
                <img alt="profile" style={profileImage} src={profilePicture}></img>
            </Tooltip >}
        {!profilePicture && <AccountCircleIcon />}

    </div>)
}