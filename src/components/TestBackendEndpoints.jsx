import { get } from "./Api";
import React, { useState } from "react";

export const TestBackendEndpoints = (props) => {

    const [response, setResponse] = useState(null);
    const onClickHandler = () => {
        get("/hello").then(response => {
            setResponse(response.data);
        })
            .catch(error => {
                setResponse("Error: " + error);
            })
    }

    return (<>
        <h1>Test backend endpoints</h1>
        <button onClick={onClickHandler}>Send request</button>
        <h6>Response: <span>{response}</span></h6>
    </>);
}