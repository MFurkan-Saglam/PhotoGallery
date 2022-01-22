import React from "react";
import { Container } from "semantic-ui-react";
import useFirestore from "../hooks/useFirestore";
import { projectFirestore } from "../firebase";

const PhotoGrid = ({ setSelectedPhoto }) => {
  const { docs } = useFirestore("photos");

  return (
    <div className="photo-grid">
      {docs &&
        docs.map((doc) => (
          <div className="photo-wrap" key={doc.id}>
            <img
              src={doc.url}
              alt="uploaded photo "
              onClick={() => setSelectedPhoto(doc.url)}
            />
            <divx>
              <button
                className="buton"
                onClick={() => {
                  projectFirestore.collection("favorites").add({
                    url: doc.url,
                  });
                }}
              >
                Favori
              </button>
              <button
                className="buton"
                onClick={() => {
                  projectFirestore.collection("trash").add({
                    url: doc.url,
                  });
                  projectFirestore.collection("photos").doc(doc.id).delete();
                }}
              >
                Sil
              </button>
            </divx>
          </div>
        ))}
    </div>
  );
};

export default PhotoGrid;
