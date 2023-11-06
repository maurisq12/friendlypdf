import React, { Component } from 'react';

class FileUploader extends Component {
  handleFileChange = (event) => {
    // Manejar el cambio de archivo y enviarlo al servidor
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
      </div>
    );
  }
}

export default FileUploader;
