import React from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { TestBackendEndpoints } from "components/TestBackendEndpoints";

function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        {/* <ProfileContent /> */}
        <p>You are signed in!</p>

        <TestBackendEndpoints></TestBackendEndpoints>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default App;