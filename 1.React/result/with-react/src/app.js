import { Component } from 'react';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            this.setState({ value: 'Hello World' });
          }}
        >
          Click!
        </button>
        <br />
        <input type="textare" readOnly value={this.state.value} />
      </div>
    );
  }
}

export default App;
