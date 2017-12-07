import React, {Component} from 'react';
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class Example extends Component {
  constructor() {
    super()
    this.state = {tags: []}
  }

  handleChange(tags) {
    this.setState({tags})
  }

  handlePasteSplit(data) {
    const separators = [',', ';', '\\(', '\\)', '\\*', '/', ':', '\\?', '\n', '\r', '\t'];
    return data.split(new RegExp(separators.join('|'))).map(d => d.trim());
  }

  render() {
    return <TagsInput value={this.state.tags} onChange={::this.handleChange} addOnPaste={true} onlyUnique={true} pasteSplit={::this.handlePasteSplit}/>
  }
}

export default Example
