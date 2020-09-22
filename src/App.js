import React from 'react';
import ReactDOM from 'react-dom'
import BurgerMenu from './BurgerMenu'
import './App.css';

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <BurgerMenu open={open} setOpen={() => setOpen(!open)} />
    </div>
  )  
}


ReactDOM.render(<App />, document.getElementById('app'));

export default App;
