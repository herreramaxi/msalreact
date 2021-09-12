import React from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { ApexChart } from "components/ApexChart";

function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <PageLayout>

      {isAuthenticated && <ApexChart></ApexChart>}

      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default App;