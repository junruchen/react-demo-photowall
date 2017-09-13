import React from 'react'

export default function ImageList ({selectId, fileList, selectImg}) {
  const imageList = fileList.map((item) =>
    <div className={selectId === item.id ? 'active image-item' : 'image-item'}
         key={item.id}
         onClick={selectImg.bind(this, item)}>
      <img className="image"
           src={item.src}
           alt={item.name}/>
      <p className="image-title"> {item.name} </p>
    </div>
  )
  return (
    <div className="image-list">
      {imageList}
    </div>
  )
}
