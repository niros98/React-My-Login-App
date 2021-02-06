
import React from 'react';
import { form , button } from "react-bootstrap";
import {Link,withRouter} from 'react-router-dom';
import { FormControl, Form, Button  ,  FormGroup , FormLabel, FormCheck , onBlur} from "react-bootstrap";

import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter , faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import checkMailValidate   from "/Users/User/my-login-app/src/FC/FCLogin";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',  
            terms : false
         }
    }
    
    setEmail = (e) => {
        this.setState({email: e.target.value});
        console.log(this.state.email);
        
    };
    mailValid = ()=>{
       checkMailValidate(this.state.email) 
    }    
    setPassword = (e) => {
        this.setState({password: e.target.value});
        console.log(this.state.password);
        
    };

    setTerms = (e)=>{
    //    e.target.value = true;
    //    this.setState({terms : e.target.value});
        return true;
    }

    SetLogin = () => {
        if(this.state.email === "" || this.state.password === "") {
            alert('Field cannot be an empty');
            return;
        }
        let details = {email: this.state.email, password:  this.state.password }
        this.props.logIn(details);
        this.setState({ email: "", password: ""});
    };

    render() { 
        return ( 

            <div id="login-form">
                <h1 style={{textDecoration : "underline" , fontSize : "125px"}} id="login-header">Login Page</h1>
                <Form>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl  style={{flexDirection:"row" , width : "50%"}}   className="login-email" type="email" value={this.state.email}  onBlur={this.mailValid}   onChange={this.setEmail}  placeholder="Enter Email Adress Please"></FormControl>
                    </FormGroup>
                    <FormGroup>
                    <FormLabel>Password</FormLabel>
                        <FormControl style={{width : "65%"}} className="login-password"  type="password" value={this.state.password} onChange={this.setPassword} placeholder="Enter Password Please"></FormControl>
                    </FormGroup>

                    <div id="login-buttom">

                    <FormGroup className="login-terms">
                        <FormLabel>Use Term <FormCheck type="radio" aria-label = "radio-1" value={this.state.terms} onClick={this.setTerms}></FormCheck></FormLabel>
                        
                    </FormGroup>
                    <FormGroup>
                        <button style={{borderRadius : "15%" , backgroundColor : " rgb(110, 40, 110)" , fontFamily:"ariel"}} onClick={this.SetLogin}>Login</button>
                    </FormGroup>
                    <Link to="/SignIn" type="button">
                        Register Here
                    </Link>
                    </div>

                </Form>
                <div>

            </div>
            {/* <Form style={{width:'60%' ,marginRight:'20%' , marginLeft:'20%'}}>
                <Form.Group controlId="formBasicuser_name">
                    <Form.Label>Email address</Form.Label>
                         <Form.Control type="user_name" value={this.state.email} onChange={this.setUserName} placeholder="Enter User Name" />
                             <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                             </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                         <Form.Control type="password" value={this.state.password} onChange={this.setPassword} placeholder="Password" />
                </Form.Group>
       
            </Form>  */}

           
         </div>
         
         );
    }
}
 
export default withRouter(Login);
























// import { Link, withRouter } from 'react-router-dom';
// import React, { Component } from 'react';
// import {Button, Form , FormGroup, Label , Input} from 'react-bootstrap';



// class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             user_name: '',
//             password: '',

//         }
        
//     }
//         user_nameSet = (e)=>{
//             e.preventDefault();
//             this.setState({user_name: e.target.value});
//             console.log(e.target.value);
//             console.log(this.state.user_name.length);

//         }

//         passwordSet = (e)=>{
//             e.preventDefault();

//             this.setState({password: e.target.value});
//             console.log(e.target.value);
//         }
//         LoginSend = (e)=>{
//             e.preventDefault();
//             this.props.SendCheck(this.state.user_name, this.state.password);
//         }
        
//     render() {

//         return (

//             <div className="Login-Page">
//              <h1>Login Page </h1>
//              <div id="login-form">
//              <FormGroup>
//                <label className="user_name"> UserName </label>
//                <input type= "text"   onChange={this.user_nameSet} placeholder="username"></input>
//              </FormGroup>
//              <FormGroup>
            
//                <label className="password"> Password </label>
//                <input type= "text" onChange={this.passwordSet}  placeholder="password"></input>
//              </FormGroup>
            
//              <button className="btn-lg btn-dark btn-block"   onClick={()=>{if(this.state.user_name==="nir"){alert('holeee')}}} style={{width: "100%"}}>Log in </button>
                
//              </div>
            
//             <Link to="/signIn">Register here</Link>

//             </div>

//         );
//     }
// }

// export default withRouter(Login);



//            {/* <div className="Login_Form">
//                 <form>
//                     <label>User Name<input type="text" onChange={this.user_name} name="user_name"/><br/>
//                     Pssowrd
//                     <input type="text" onChange={this.password} name="password" />
//                     </label>
//                     <input type="submit" onClick={this.LoginSend}   value="Submit"/>
//                 </form>
//             </div> */}



