import { useStore } from "../hooks/useStore";
import User from "./User";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";

function SSO(): JSX.Element {
  const authData = useStore((state: any) => state.authData);

  return (
    <div className="SSO">
      {!authData ? (
        <>
          <h1>Welcome</h1>
          <LoginScreen></LoginScreen>
        </>
      ) : (
        <>
          <h1>React x Nestjs Google Sign in</h1>
          <User />
        </>
      )}
    </div>
  );
}

export default SSO;
