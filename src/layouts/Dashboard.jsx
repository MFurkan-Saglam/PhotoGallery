import React from "react";
import { useState } from "react"; //rfc diyip enterladık bu hazır snippetı kurdu.
import { Grid, GridRow } from "semantic-ui-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router";
import Category from "./Category";
import PhotoGrid from "../pages/PhotoGrid";
import "./Dashboard";
import Modal from "../pages/Modal";
import Login from "../pages/Login";
import Photos from "../pages/Photos";
import SignUp from "../pages/SignUp";
import Favorites from "../pages/Favorites";
import Trash from "../pages/Trash";

export default function Dashboard(props) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      <ToastContainer position="bottom-left" />
      <Grid>
        <Grid.Row>
          <Grid.Column width="3">
            <Category />
          </Grid.Column>
          <Grid.Column width="13">
            <Routes>
              <Route exact path="/" component={Login} />
              <Route exact path="/photos" component={SignUp} />
              <Route
                exact
                path="/main"
                element={<PhotoGrid setSelectedPhoto={setSelectedPhoto} />}
              />
              <Route
                exact
                path="/favorites"
                element={<Favorites setSelectedPhoto={setSelectedPhoto} />}
              />
              ,
              <Route
                exact
                path="/trash"
                element={<Trash setSelectedPhoto={setSelectedPhoto} />}
              />
            </Routes>

            {selectedPhoto && (
              <Modal
                selected
                Photo={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
/*

        */
