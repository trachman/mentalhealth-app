import './styles.css';
import axios from 'axios';
import * as React from "react";

const {useState} = React;

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <p>BOLT Does REACT</p>
      <p>{counter}</p>
      <div>
        <button onClick={() => {
          setCounter(counter+1)
        }}>Increase Counter</button>
        <button onClick={() => {
          setCounter(counter-1)
        }}>Decrease Counter</button>
      </div>
      <div>
        <button className="updatedb" onClick={() => { 
            axios.post('http://localhost:5000/counter', 
            {counterVal : counter})
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log("Could not connect to the server.");
            })}}>Update Database</button>
        <button className="updatedb" onClick={() => {
          axios.get('http://localhost:5000/clear')
          .then(response => {
            console.log(response.data);
          }).catch( error => {
            console.log("Could not connect to the server.");
          })
        }}>Clear Database</button>
      </div>
    </div>
  );
}