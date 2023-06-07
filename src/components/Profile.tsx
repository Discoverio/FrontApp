import React from "react";
import { useStore } from "../hooks/useStore";
import { googleLogout } from "@react-oauth/google";

const Profile = () => {
 const { authData, setAuthData } = useStore();
 return (
   <div className={"container"}>
     {authData && (
       <>
         <h1>{authData.data.given_name}</h1>
         <p>{authData.data.email}</p>
         <p>{authData.data.family_name}</p>
         <img src={authData.data.image} alt="profile_image" />

         <button
           onClick={() => {
             googleLogout();
             localStorage.removeItem("AuthData");
             setAuthData(null);
             window.location.reload();
           }}
           className={"button"}
         >
           Logout
         </button>
       </>
     )}
   </div>
 );
};

export default Profile;