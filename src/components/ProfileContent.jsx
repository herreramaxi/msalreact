import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from "react-bootstrap";
import { callMsGraph, getProfilePhoto } from "../graph";
import { ProfileData } from "./ProfileData";

export const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {

            callMsGraph(response.accessToken).then(response => {
                setGraphData(response);
            });
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
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {profilePicture && <img alt="profile" src={profilePicture}></img>}
            {graphData ?
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            }
        </>
    );
};