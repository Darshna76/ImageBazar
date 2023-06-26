import React, { useState } from 'react'
import axios from 'axios';

function Searchbar({addImages}) {
  let [serchTerm, setSerchTerm] = useState("");
  
 

  function handleSubmit(){
  axios.get("https://api.unsplash.com/search/photos",{
    params : {
      client_id:"ZffbKhFtggUr-eoUjSGnoBUDJWkSyuJsRNgu9kMkwxY",
      query:serchTerm,
    }
  })
.then(response=>addImages(response.data.results))
.catch(error=>console.log(error))

  
  }


  return (
    <div className='searchbar'>
    <input type="text" placeholder='Search for images'
    onChange={e=>setSerchTerm(e.target.value)}
    />
    <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Searchbar
