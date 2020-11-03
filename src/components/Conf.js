import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as axios from "axios";

class Conf extends Component{
  constructor()
  {
    super()

      this.state = {
        hash: null
    }
  }
  handleHash = (event) => {
    event.preventDefault();
    const data = {
      hash: this.hash
    }

    /**var site = 'http://habitable-productivityapp.herokuapp.com/user/confirm/' + this.hash;**/
       axios.post(`http://habitable-productivityapp.herokuapp.com/user/confirm/${this.hash}`,data).then(response=>{if(response.status === 200){
       console.log(response.status);
       alert("Email verification successful!")
    }
  }).catch(error=>{console.log(error.response.status); alert("Unsuccessful! Try again!")});

  }
render(){
    const {hash} = this.state;
return(
  <div style={{background: "#0558ab", height: "15px", width: "600px", color:"white", borderRadius: "5px", position:"absolute",
   marginTop:"-30px", marginLeft: "-290px", padding:"15px", border:"3px outset #16b9f0"}}>
   <form onSubmit={this.handleHash}>
  <label>Enter the hash-code recieved in email: </label>
  <input type="text" onChange={event => this.hash = event.target.value} />
  <input type="submit" style={{width:"70px", background:"#06306b", color:"#fff", border:"none", height:"20px"}}/>
  </form>
</div>
);
};

}


export default Conf;
