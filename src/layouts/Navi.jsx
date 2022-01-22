import React, { Component } from "react";
import { Button, Dropdown, Menu, Container, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Navi.css";
import UploadForm from "../pages/UploadForm";
import logo from "../pictures/logo4.png";
export default function Navi(props) {
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
    handleLogout,
  } = props;

  return (
    <Menu size="large" fixed="top" secondary className="colorNavi">
      <Container>
        <Menu.Item>
          <Image size="tiny" src={logo} />
        </Menu.Item>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right" style={{ marginLeft: "10em" }}>
          <Dropdown item text="Hesabım">
            <Dropdown.Menu>
              <Dropdown.Item>Bilgilerim</Dropdown.Item>
              <Dropdown.Item>Şifre Değiştir</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Çıkış Yap</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <UploadForm />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

//<Button color='grey'>Upload Photo</Button>
