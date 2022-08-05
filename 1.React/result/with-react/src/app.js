// import { Component } from 'react';
import { useState } from 'react';
import './styles/app.css';

// Function Component
const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setValue('Hello World');
        }}
      >
        Click!
      </button>
      <br />
      <textarea readOnly value={value} />
    </div>
  );
};

// Class Component
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//   }

//   render() {
//     return (
//       <div>
//         <button
//           className="button"
//           onClick={() => {
//             this.setState({ value: 'Hello World' });
//           }}
//         >
//           Click!
//         </button>
//         <br />
//         <input type="textare" readOnly value={this.state.value} />
//       </div>
//     );
//   }
// }

export default App;
