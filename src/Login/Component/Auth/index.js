import React, { Component } from 'react';
import { Grid, Col, Alert} from 'react-bootstrap'

class App extends Component {

  constructor(props){

    super(props);
    this.state ={
      sucess:false
    }
    this.inputEmailRef = React.createRef();
    this.inputPasswordRef = React.createRef();
  }


  login=(e)=>{
    e.preventDefault()
    let params = {
      email:this.inputEmailRef.current.value,
      password:this.inputPasswordRef.current.value
    }

    console.log(params);
  }

  register=(e)=>{
    e.preventDefault()
    let registerUrl = 'http://localhost:8080/api/v1/register'
    let params = {
      email: e.target.username.value,
      password: e.target.password.value,
      name: e.target.first_name.value+" "+e.target.last_name.value
    }
    let header = {
      method:'POST',
      body:JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(registerUrl,header).then(response=>response.json())
    .then(res=>{
     console.log(res);
    }).catch(error=>{
      console.log(error)
    })
    
  }

  changeUi=(action)=>{
    console.log('called',action)
    this.setState({
      purpose:action
    })

  }


  render() {
    const { purpose } = this.props;
    const { sucess } =  this.state;

    return (
      <Grid className="App">
      {sucess?<h2 className="sucess-msg">Register sucessfull</h2>:null}
      {purpose==="login"?

      <Col>
        <form className="form-login" onSubmit={(e)=>this.login(e)}>

          <h3>Login Here </h3>
          <input 
            type="email" 
            ref={this.inputEmailRef}  
            placeholder="Enter Your Email"
            required/>

          <br/>
          <input 
            type="password"   
            ref={this.inputPasswordRef}
            placeholder="Enter Your Password"
            required/>
            <br/>
          <input type="submit" />
        </form> 
      </Col>
:
        <Col>
          <div>
            <form className="form-login" onSubmit={(e)=>this.register(e)}>

            <h3>Register Here </h3>
              <input type="email"     name="username" placeholder="Enter Your Email" required/>
                <br/>
              <input type="text"     name="first_name" placeholder="Enter Your First Name" required/>
                <br/>
              <input type="text"     name="last_name" placeholder="Enter Your Last Name" required/>
                <br/>
              <input type="password"  name="password" placeholder="Enter Your Password" required/>
                <br/>
              <input type="password"  name="confirm_password" placeholder="Confirm Password" required/>
                <br/>
              <input type="submit" />
              
            </form>
          </div>
        </Col>
      }

        
      </Grid>
    );
  }
}



export default App;

