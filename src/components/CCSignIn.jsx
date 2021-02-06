
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import {  select,FormFile,FormControl, Form, Button  ,  FormGroup , FormLabel, FormCheck , onBlur} from "react-bootstrap";
import checkMailValidate   from "/Users/User/my-login-app/src/FC/FCLogin";




class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_Password: '',
            mail_Validate : false, 
            user_name : '',
            picFile : File,
            hobbies :' ',
            notes : []
            //  [
            // {value: 'music', label:'music'} ,
            // {value : 'movies',  label : 'movies'},
            // {value : 'dancing' , label : 'dancing'},
            // {value : 'sports' ,  label : 'sport'}]
        }
  
    }
    //on change functions:
    setEmail = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
        console.log(e.target.value)
    }
    mailValid = ()=>{
        checkMailValidate(this.state.email) 
     }   
    setPassword = (e) => {
        e.preventDefault();

        this.setState({ password: e.target.value });
        console.log(e.target.value)

    }
    setConfirmPassword = (e) => {
        this.setState({ confirm_Password: e.target.value });
        console.log(e.target.value)

    }
    setMailValidate = (e)=>{
        this.setState({mail_Validate : e.target.value})
        console.log(e.target.value)

    }
    setUserName = (e)=>{
        this.setState({user_name : e.target.value});
        console.log(e.target.value)

    }
    setPicFile = (e)=>{
        // const [selectedFile  , setSelectedFile] = useState(false);
        // setSelectedFile(e.target.File);
        this.setState(e.target.File);
    }
    setHobbies = (e)=>{
        this.setState({hobbies : e.target.value});
        console.log(e.target.value);
    }
    CheckRegistrationInfo = () => {
        if (!(this.state.password === this.state.confirm_Password)) {
            alert("password1 && password2 not equal. please try again");
            return;
        }
        if (this.state.password === "" || this.state.email === "") {
            alert("Empty field");
            return;
        }
        let user = { email: this.state.email, password: this.state.password, confirm_Password : this.state.confirm_Password, user_name : this.state.user_name,
            picFile : this.state.picFile, hobbies : this.state.hobbies,notes:[] };
        this.props.addUser(user);
        this.setState({ email: "", password: "", confirm_Password: "" , user_name:"", hobbies:"", picFile:"", notes : "" });
        this.props.history.push({
            pathname: '/'
        });
        
        
    }

    render() {
        return (
            <div>
           

                   <Form className="registration-form">
                       <FormLabel><h1 style={{fontSize : "100px"}}>Registration </h1></FormLabel>
                       
                       <FormGroup className="fgr">Email
                           <FormLabel style={{marginLeft : "130px"}} className="reg-txt">
                               <FormControl className="reg-field"   required={true} type="email" placeholder="Validat Email Adress Format"   value={this.state.email} onChange={this.setEmail}></FormControl>
                           </FormLabel>
                       </FormGroup>
                       <FormGroup  className="fgr">(1)Password   
                           <FormLabel  style={{marginLeft : "20px"}} className="reg-txt">
                               <FormControl  type="pasword" className="reg-field" placeholder="choose password" value={this.state.password} onChange={this.setPassword}></FormControl>
                           </FormLabel>
                        </FormGroup>
                       <FormGroup>(2)Password
                           <FormLabel style={{marginLeft : "20px"}}  className="reg-txt">
                               <FormControl placeholder="repet password" className="reg-field" type="confirm_pasword" value={this.state.confirm_Password} onChange={this.setConfirmPassword}></FormControl>
                           </FormLabel>
                       </FormGroup>
                       <FormGroup>User Name
                           <FormLabel  style={{marginLeft : "50px"}} className="reg-txt">
                               <FormControl placeholder="choose user name" className="reg-field" type="user_name" value={this.state.user_name} onChange={this.setUserName}></FormControl>
                           </FormLabel>
                       </FormGroup>
                       <FormGroup>Hobbies 
                           <FormLabel   style={{marginLeft : "90px"}} className="hobbies" onChange={this.setHobbies}>
                               
                        <select onChange={this.setHobbies}>
                        <option  value="Music"> Music </option>
                        <option value="Movies">Movies</option>
                        <option selected value="Dancing">Dancing </option>
                        <option value="Sport">Sport</option>
                        </select>
                           </FormLabel>
                       </FormGroup>
                       <FormGroup>Upload Picture
                           <FormLabel   style={{width : "80%"}} className="reg-txt">
                               <FormControl className="reg-field" type="file" value={this.state.setPicFile}></FormControl>
                           </FormLabel>
                       </FormGroup>
                        <FormGroup> Register
                            <FormLabel>
                                <FormControl    onClick={this.CheckRegistrationInfo} type="button"></FormControl>
                            </FormLabel>
                        </FormGroup>
            </Form>  
            </div>
        );
    }
}

export default withRouter(SignIn);


