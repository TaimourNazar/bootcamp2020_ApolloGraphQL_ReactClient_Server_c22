import React, {createRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {useMutation,useQuery} from "@apollo/client"
import {createMessageMutation, getAllMessages} from "./Schema/schema"

function App() {
  const messageValue = createRef();
  const [addMessage] = useMutation(createMessageMutation);
  //let {data, error, loading} = useQuery(getAllMessages)

  const submit=()=>{
    let message=messageValue.current.value;
    addMessage({variables:{data:{message}}})
    .then(data=>{
      console.log('response: ',data)
    }).catch(error=>{
      console.log("error: ",error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>GraphQL Apollo Client - React</label>
        <input ref={messageValue} placeholder="Enter message"/>
        <button onClick={submit}>add</button>
      </header>
    </div>
  );
}

export default App;
