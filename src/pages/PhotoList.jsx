import React, { useEffect, useState } from "react";
import { Divider, Image } from 'semantic-ui-react'
import PhotoService from "../services/PhotoService";
import PhotoGrid from "./PhotoGrid";

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let photoService = new PhotoService();
    photoService.getPhotos().then((result) => setPhotos(result.data.data));
  },[]);
  return (
    <div>
      <PhotoGrid/>

    <Image.Group size='small'>
      <Image src={"https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"} />
      <Image src={"https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"} />
      <Image src={"https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"} />
      <Image src={"https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"} />
      <Image src={"https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"} />
     
    </Image.Group>
    <Divider hidden />
    
  </div>
  );
}
