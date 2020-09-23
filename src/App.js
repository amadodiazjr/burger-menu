import React from 'react';
import ReactDOM from 'react-dom'
import BurgerMenu from './BurgerMenu'

const App = () => {
  return (
    <div>
      <BurgerMenu />
    </div>
  )  
}


ReactDOM.render(<App />, document.getElementById('app'));

export default App;
