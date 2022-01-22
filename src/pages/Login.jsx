import React from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Image,
} from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import { Grid, GridRow } from "semantic-ui-react";
import logooo from "../pictures/nature.jpg";
import { Container } from "semantic-ui-react";
import "./Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError = "dffsdf",
    passwordError,
  } = props;
  return (
    <div>
      <ToastContainer position="bottom-left" />
      <Grid>
        <Grid.Row>
          <Grid.Column width="8">
            <Image className="img" src={logooo}></Image>
          </Grid.Column>
          <Grid.Column className="body" width="8">
            <h1 className="PhotoGalleryText"> PhotoGallery</h1>
            <br />
            <h1 className="PhotoGalleryTextTwo">
              {" "}
              We're glad to see you again
            </h1>
            <Form className="bosluk">
              <h1 className="PhotoGalleryTextThree">User Name</h1>

              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="User name"
              />
              <p className="errorMsg">{emailError}</p>

              <h1 className="PhotoGalleryTextThree">Password</h1>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <p className="errorMsg">{passwordError}</p>

              <div>
                {hasAccount ? (
                  <>
                    <button onClick={handleLogin} className="button">
                      Sign In
                    </button>
                    <p className="p">
                      Don't have an account ?
                      <span
                        onClick={() => setHasAccount(!hasAccount)}
                        className="span"
                      >
                        Sign Up
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <button onClick={handleSignUp} className="button">
                      Sign Up
                    </button>
                    <p className="p">
                      Have an account ?{" "}
                      <span
                        onClick={() => setHasAccount(!hasAccount)}
                        className="span"
                      >
                        Sign In{" "}
                      </span>{" "}
                    </p>
                  </>
                )}
              </div>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Login;
/**<Form.Group  widths="small">
              <Form.Field className="confirm"
                id="form-button-control-public"
                control={Button}
                content="Sign In"
              />
            </Form.Group> */
