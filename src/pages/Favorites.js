import React from "react";
import { Container } from "semantic-ui-react";
import useFirestore from "../hooks/useFirestore";
import { projectFirestore } from "../firebase";

const Favorites = ({ setSelectedPhoto }) => {
  const { docs } = useFirestore("favorites");

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
                className="butonnn"
                onClick={() => {
                  projectFirestore.collection("favorites").doc(doc.id).delete();
                }}
              >
                Favoriden Çıkar
              </button>
            </divx>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
