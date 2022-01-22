import axios from "axios";


import React from 'react'

export default class photoService {
  getPhotos() {
      return axios.get("http://localhost:8080/api/photos/getall")

  }
}
