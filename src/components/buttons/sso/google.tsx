import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


const GoogleLoginWidget = () => {
    return (
        <GoogleOAuthProvider clientId="674546016382-4b1st85hr20iv3ckr1mdrtt0itrvrg7n.apps.googleusercontent.com">
                <GoogleLogin
                    useOneTap={true}
                    onSuccess={async (credentialResponse) => {
                    console.log(credentialResponse);
                    const { data } = await axios.post(
                        "http://localhost:19006/login",
                        {
                        // pass the token as part of the req body
                        token: credentialResponse.credential,
                        });
                    localStorage.setItem("AuthData", JSON.stringify(data));
                    //  this.setAuthData(data);
                    }}
                    onError={() => {
                    console.log("Login Failed");
                    }}
                />
                </GoogleOAuthProvider>
    );
}

export default GoogleLoginWidget;
