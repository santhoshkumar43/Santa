import React from "react";
import "./Login.css";
import google from "../../imagee/google (2).png";
import apple from "../../imagee/apple.png"

function Login() {
    return (
        <div className="main-login">
            <div className="banner-login">
                <p>Board.</p>

            </div>
            <div className="container-login">
                <div className="in-cont-login">
                    <div className="heading-login">
                        <h1>Sign in</h1>
                        <p className="desc-login">Sign in to your account</p>

                        <div className="in-heading-login"> <button><img src={google}/><p>Sign in with Google</p></button>
                            <button><img src={apple}/><p>Sign in with Apple</p></button></div>
                    </div>
                    <div className="input-login">
                        <p>Email address</p>
                        <input type="email" />
                        <p>Paswword</p>
                        <input type="password" />
                        <p><a href="#">Forget password</a></p>
                        <button>Sign in</button>

                    </div>
                    <p className="reg-login">Don't have an account? <a href="#">Regester Here</a></p>

                </div>


            </div>
        </div>
    )
}
export default Login;