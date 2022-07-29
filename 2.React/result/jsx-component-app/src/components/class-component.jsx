import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>This is Class Component</h2>
      </div>
    );
  }
}

export default ClassComponent;
