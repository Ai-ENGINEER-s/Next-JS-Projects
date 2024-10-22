import React from 'react'
import Image from 'next/image'
const ImageButton = ({src , alt , handleClick}) => {
  return (
   <button onClick={handleClick}>
<Image
src={src}
alt={alt}


/>



   </button>
  )
}

export default ImageButton
