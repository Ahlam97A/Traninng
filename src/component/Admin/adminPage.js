import React, { Component } from 'react';
import Login  from './login'
import TabsButton from './Tab'
export async function getData(url, data) {
  // Default options are marked with *
  let options = {

    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'token': window.Token

    },
    body: JSON.stringify(data)
  }
  let response = await fetch(url, options);
  return await response.json();
}
class Tab extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            type: '',
            name: '',

        }
    }
   componentDidMount() {
     window.token='kojihugy'
     this.props.history.listen()
     localStorage.setItem('Token',window.Token)
     //getData() 
     console.log(window)
     console.log( this.props.history.listen())

  }
  render() {  
    return (   
      <div >        
        <TabsButton />      
      </div>
     
    );
  }
}

export default Tab;
