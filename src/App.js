import React, {useState, Component} from 'react';
import './App.css';
import {SimpleModal} from './lib/index'

function App() {
  function toggleModal(size){
    if(SimpleModalOpen){
      setSimpleModalOpen(false)
    } else {
      setSimpleModalSize(size)
      setSimpleModalOpen(true)
    }
  }
  let [SimpleModalOpen, setSimpleModalOpen] = useState(false);
  let [SimpleModalSize, setSimpleModalSize] = useState('');


  return (
    <div>
      <h2>SimpleModal</h2>
      <div className="buttonContainer">
        <div className="button" onClick={() => {
          toggleModal('small')
          }}>
          Open Small Simple Modal
        </div>      
        <div className="button" onClick={() => {
          toggleModal('medium');
          }}>
          Open Medium Simple Modal
        </div>  
        <div className="button" onClick={() => {
          toggleModal('large')
          }}>
          Open Large Simple Modal
        </div>  
      </div>

      <SimpleModal 
        backgroundDim={true}
        title={'SimpleModal - Size: ' + SimpleModalSize}
        body={<Counter/>}
        close={()=> {
          toggleModal(false)
        }}
        done={()=> {
          toggleModal(false)
        }}
        open={SimpleModalOpen}
        size={SimpleModalSize}
      />
  
      
    </div>
  );
}

export default App;


const Counter = () => { 
    const [counter, setCounter] = useState(0);
    return (
      <div style={{display: "flex", justifyContent:"center", paddingTop:"20px"}}>
          <button onClick={() => {
              setCounter(counter + 1)
          }}
          style={{margin: "10px"}}
          >Increase</button>
          <button onClick={()=> {
              setCounter(counter - 1)
          }}
          style={{margin: "10px"}}
          >Decrease</button>
          <h3
          style={{margin: "10px"}}
          >{counter}</h3>
      </div>
  )
}