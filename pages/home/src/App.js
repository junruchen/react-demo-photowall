import React from 'react'
import '../assets/index.styl'
import PhotoWall from './PhotoWall'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fileList: []
    }
    this.onChange = this::this.onChange
    this.removeAllFiles = this::this.removeAllFiles
  }

  onChange (e) {
    let srcArr = []
    for (let i = 0; i < e.target.files.length; i++) {
      let itemSrc = {
        id: i,
        name: e.target.files.item(i).name,
        src: window.URL.createObjectURL(e.target.files.item(i))
      }
      srcArr.push(itemSrc)
    }
    this.setState({
      fileList: srcArr
    })
  }

  removeAllFiles () {
    this.setState({
      fileList: []
    })
  }

  render () {
    return (
      <div className="container">
        {
          this.state.fileList.length === 0 &&
          <div className="file-content">
            <input type="file"
                   onChange={ this.onChange }
                   multiple/>
            <p>上传图片</p>
          </div>
        }
        {
          this.state.fileList.length > 0 &&
          <PhotoWall
            removeAllFiles={this.removeAllFiles}
            fileList={this.state.fileList}/>
        }
      </div>
    )
  }
}

export default App
