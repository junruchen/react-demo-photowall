import React from 'react'
import ImageList from './ImageList'
import ImageInfo from './ImageInfo'

class PhotoWall extends React.Component {
  constructor (props) {
    super(props)
    const fileList = this.props.fileList
    this.state = {
      fileList,
      selectId: 0
    }
    this.selectImg = this::this.selectImg
    this.wheelChangeImg = this::this.wheelChangeImg
  }

  selectImg (item) {
    this.setState({
      selectId: item.id
    })
  }

  wheelChangeImg (id) {
    this.setState({
      selectId: id
    })
  }

  render () {
    return (
      <div className="photowall-content">
        <ImageList
          selectImg={this.selectImg}
          fileList={this.state.fileList}
          selectId={this.state.selectId}/>
        <ImageInfo
          wheelChangeImg={this.wheelChangeImg}
          fileList={this.state.fileList}
          selectId={this.state.selectId}
          removeAllFiles={this.props.removeAllFiles}/>
      </div>
    )
  }
}

export default PhotoWall
