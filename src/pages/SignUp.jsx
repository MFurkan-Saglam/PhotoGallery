import React from "react";
import {ToastContainer} from "react-toastify"
import { Grid, GridRow } from "semantic-ui-react";
import {
    Form,
    Input,
    TextArea,
    Button,
    Select,
    Image,
  } from "semantic-ui-react";
  import logoo from "../pictures/SignUp.jpg";
import './SignUp.css';



const SignUp=(props) => {
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
          <Image className="imgSignUp" src={logoo}></Image>
        </Grid.Column>
        <Grid.Column className="bodySignUp" width="8">
          <h1 className="PhotoGalleryTextSignUp"> PhotoGallery</h1>
          <br />
          <h1 className="PhotoGalleryTextTwoSignUp"> Welcome to your life</h1>
          <Form className="boslukSignUp">
            <h1 className="PhotoGalleryTextThreeSignUp">User Name</h1>
            <Form.Group className="inputSignUp" widths="small">
              <Form.Input placeholder="User name" id="userName" required />
            </Form.Group>
            <h1 className="PhotoGalleryTextThreeSignUp">Password</h1>
            <Form.Group widths="small">
              <Form.Input placeholder="Password" />
            </Form.Group>
            
            <button onClick={handleSignUp} className="button">
                      Sign Upppp
                    </button>
           
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
    )}

export default SignUp;
/* End
<Form.Group  widths="small">
              <Form.Field className="confirmSignUp"
                id="form-button-control-public"
                control={Button}
                content="Sign In"
              />
            </Form.Group> */