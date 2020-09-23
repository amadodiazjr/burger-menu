import React from 'react';
import ReactDOM from 'react-dom'
import Menu from './Menu.js';
import Burger from './Burger.js';
import './App.css';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div>
        <h1>Hello. This is burger menu tutorial</h1>
        <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        <small>Icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
       </div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
