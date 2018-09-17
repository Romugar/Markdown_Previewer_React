import React, { Component } from 'react';
import marked from "marked";
import './App.css';

const placeholder =
`INSTRUCCIONES
# h1
## h2
[freeCodeCamp](https://www.freecodecamp.com)
\`<p>code</p>\`
\`\`\`
Multi line code:

function func(arg) {  
    return arg;  
}
\`\`\`

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or
* asterisks

**bold**

> Block Quotes

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true,
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: placeholder,
    };
    // Bind methods
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(event) {
    this.setState({ inputText: event.target.value});
  }
  
  render() {
    return (
      <div className="container">
        <div className="input">
          <Editor value={this.state.inputText} onChange={this.onInputChange}/>
        </div>
        <div className="output">
          <Preview inputText={this.state.inputText} />
        </div>
      </div>
    );
  }
}

const Editor = ({value, onChange}) => {
  return (    
      <textarea type="text" id="editor" value={value} onChange={onChange}/>        
  )
}

const Preview = ({inputText}) => {
  return (    
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(inputText, { renderer: renderer })}} />        
  )
}

export default App;
