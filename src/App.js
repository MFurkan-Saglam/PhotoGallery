import "./App.css";
import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Dashboard from "./layouts/Dashboard"; // Div içine yazdığını import etmeyi unutma
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import Navi from "./layouts/Navi";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { firebaseApp } from "./firebase.js";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [login, setLogin] = useState(false);

  const history = useNavigate();
  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            alert(
              "Yanlış formatta e-mail giridiniz. 'test@gmail' şeklinde giriniz."
            );
            break;
          case "auth/user-disabled":
            alert("Kullanıcı engellendi");
            break;
          case "auth/user-not-found":
            alert("Kullanıcı bulunamadı");
            break;
          case "auth/wrong-password":
            alert("Şifreniz yanlış");
            break;
        }
      });
    setLogin(true);
  };
  const handleSignUp = () => {
    clearErrors();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            alert(
              "Girdiğiniz e-mail hesabıyla daha önceden hesap açıldı.Başka bir e-mail deneyiniz. "
            );
          case "auth/invalid-email":
            alert(
              "Yanlış formatta e-mail giridiniz. 'test@gmail' şeklinde giriniz."
            );
            break;
          case "auth/weak-password":
            alert(
              "Lütfen 8 haneden az ve sayı,harf,özel işaret içeren şifre oluşturun."
            );
            break;
        }
      });
  };

  const handleLogout = () => {
    firebaseApp.auth().signOut();
    setLogin("");
    history("/");
  };

  const authListener = () => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    /*
    <div>
      
     <Container  className="bosluk"   >
        <Navi  />
      </Container>
      <Container className="bosluk" >
        <Dashboard  />
      </Container>
    </div>
    */
    /*
    <div>
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ):(
        <Container>
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError
        />
        <Hero handleLogout={handleLogout}/>
      </Container>
      )}
      
    </div>
    */
    <div>
      {login ? (
        <div>
          <Container>
            <Navi handleLogout={handleLogout} />
          </Container>
          <Container className="bosluk">
            <Dashboard />
          </Container>
        </div>
      ) : (
        <Container>
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError
          />
        </Container>
      )}
    </div>
  );
};

export default App;
/* <Container   >
        <Navi  />
      </Container>
      <Container className="bosluk" >
        <Dashboard  />
      </Container>*/
