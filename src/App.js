import React, { useState } from 'react'
// import Searchbar from './component/Searchbar'
import ShowImage from './component/ShowImage'
import Searchbar from './component/Searchbar'

function App() {
  let [images , setImages] = useState([]);
  console.log(images)
  return (
    <div>
      <Searchbar  addImages={setImages}/>
      <ShowImage images = {images} />
    </div>
  )
}

export default App

// ZffbKhFtggUr-eoUjSGnoBUDJWkSyuJsRNgu9kMkwxY
// https://api.unsplash.com/
// client_id=YOUR_ACCESS_KEY
// GET /search/photos