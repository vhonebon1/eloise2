import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      hasImages: false
    }
    this.getImages = this.getImages.bind(this)
  }

  componentDidMount () {
    this.getImages()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getImages () {
    this.fetch('api/images')
      .then(images => {
        this.setState({
          images: images,
          hasImages: true
         });
      })
  }

  renderImages = () => {
    return (
      <div>
        { this.state images.map((image, index) => {
          <img style={{width: "50px"}} src={image.url} />
        })}
      </div>
    )
  }

  render () {
    const { images } = this.state;
    return (
      <div>
        <h1>Homepage</h1>
        { this.state.images.length > 0 && this.renderImages() }
      </div>
    )
  }
}

export default App
