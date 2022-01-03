import {useState} from 'react';
import Button from './components/Button';
import './App.css';


function App() {
  const [counter,setCounter]=useState(0);

  function onClickforIncrease(){
    setCounter(counter+1);
  }

  function onClickforDecrease(){
    setCounter(counter-1);
  }
  
  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <div className='Buttons_Container'>
      <Button text={"Increase"} onClick={onClickforIncrease}/>
      <Button text={"Decrease"} onClick={onClickforDecrease}/>
      </div>
    </div>
  );
}

export default App;
