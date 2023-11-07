
import "../styles/Login.css";

import { useNavigate } from 'react-router-dom';

export default function Login() {

let navigate = useNavigate();

    const goToTracker = () => {
navigate('/tracker');
    }

return (
<>
    <h1>Login</h1>
    <div className="button-container">
    <button onClick={goToTracker}>Login</button>
    </div>
    <section className="page"  id="register">
            <h2>Register</h2>
            <form id="formRegister" onsubmit="Auth.register(event)">
                <fieldset>
                    <label for="register_name">Name</label>
                    <input placeholder="Name" id="register_name"
                            required autocomplete="name"/>
                    <label for="register_email">E-mail (your username)</label>
                    <input placeholder="Email" id="register_email" 
                            required type="email" autocomplete="username"/>
                    
                    <label for="register_password">Your Password</label>
                    <input type="password" id="register_password"
                            required autocomplete="new-password"/>
                </fieldset>

                <button>Register Account</button>
            </form>
        </section>
        <section class="page" id="login">
            <h2>Log In</h2>

            <form id="formLogin" onsubmit="Auth.login(event)">
                <fieldset>
                    <label for="login_email">E-mail</label>
                    <input placeholder="email" id="login_email"
                        required autocomplete="webauthn username"/>      
                    <section hidden id="login_section_password">              
                        <label for="login_password">Password</label>
                        <input type="password" id="login_password"
                         autocomplete="webauthn current-password"/>
                    </section>                                      
                    <section hidden id="login_section_webauthn">
                        <a href="#" class="navlink" onclick="Auth.webAuthnLogin(); event.preventDefault">Log in with your Authenticator</a> 
                    </section>
                    </fieldset>
                <button>Continue</button>

                <p>
                    <a href="/register" class="navlink">Register a new account instead</a> 
                </p>                   

                <fieldset>
                    <div id="g_id_onload"
                    data-client_id="159147182373-ddh3g7b9n6ndpqp7ns9iri7movhq2cpa.apps.googleusercontent.com"
                    data-context="signin"
                    data-ux_mode="popup"
                    data-callback="loginFromGoogle"
                    data-auto_select="false"
                    data-itp_support="false">
                </div>

                <div class="g_id_signin"
                    data-type="standard"
                    data-shape="rectangular"
                    data-theme="outline"
                    data-text="signin_with"
                    data-size="medium"
                    data-logo_alignment="left">
                </div>        
                                            
                </fieldset>
            </form>            
        </section>

         
        <section class="page"  id="account">
            <h2>My Account</h2>
            <dl>
                <dt>Name</dt>
                <dd class="account_name"></dd>
                <dt>Email</dt>
                <dd class="account_username"></dd>
            </dl>

            <section id="webauthn">
                <button onclick="Auth.addWebAuthn()">Add Authenticator / Passkey</button>
            </section>

            <button onclick="Auth.logout()">Log out</button>
        </section>      
</>
)}


