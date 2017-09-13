import React from 'react'

export default function ImageInfo ({selectId, fileList, removeAllFiles}) {
  let selectFile = fileList.find((item) => {
    return item.id === selectId
  })

  return (
    <div className="image-info">
      <button className="back"
              onClick={removeAllFiles}>返回
      </button>
      <div className="image-item">
        <img className="image"
             src={selectFile.src}
             alt={selectFile.name}/>
      </div>
    </div>
  )
}
