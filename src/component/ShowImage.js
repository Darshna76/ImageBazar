import React from 'react'

function ShowImage({images}) {
  return (
    <div className='ShowImage'>
        {
      images.map(image=>(
        <img key={image.id} src={image.urls.small} alt={image.alt_description} />
      ))
        }
    </div>
  )
}

export default ShowImage
