import React from "react";
import IconLabelButtons from "./common/Button";
import BasicTextFields from "./common/Input";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
export default function Login() {
  return (
    <div className="auth-card">
      <div className="heading">
        <h1>
          Welcome to Frontend <span className="dojo">DOJO</span>
        </h1>
        {/* <hr className="divider" /> */}
        <p>Sign In with Google or Github to get started.</p>
      </div>

      <div className="login-body">
        <BasicTextFields title={`Enter the Email`} />
        <BasicTextFields title={`Enter the Password`} />
        <IconLabelButtons title={`Sign In`} icon={<VpnKeyIcon />} spacing={1} />
      </div>
      <p>— Or Sign in with —</p>
      <div className="auth-btn">
        <IconLabelButtons title={`Google`} icon={<GoogleIcon />} spacing={3} />
        <IconLabelButtons title={`Github`} icon={<GitHubIcon />} spacing={3} />
      </div>
    </div>
  );
}
