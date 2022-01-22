import React from "react";
import { Container } from "semantic-ui-react";
import useFirestore from "../hooks/useFirestore";
import { projectFirestore } from "../firebase";

const Trash = ({ setSelectedPhoto }) => {
  const { docs } = useFirestore("trash");

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
                  projectFirestore.collection("photos").add({
                    url: doc.url,
                  });
                  projectFirestore.collection("trash").doc(doc.id).delete();
                }}
              >
                Geri yükle
              </button>
              <button
                className="buton"
                onClick={() => {
                  projectFirestore.collection("trash").doc(doc.id).delete();
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

export default Trash;
