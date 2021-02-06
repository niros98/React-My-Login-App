import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { FormControl, Form, Button  ,  FormGroup , FormLabel, FormCheck , onBlur} from "react-bootstrap";
import userEvent from '@testing-library/user-event';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            description:''
         }
    }
    setTitle = (e) => {
        this.setState({title: e.target.value});
    };
    setDescription = (e) => {
        this.setState({description: e.target.value});
    };
    setNote = () => {
        if(this.state.title === "" || this.state.description === ""){
            alert("fill the field");
            return
        }
        let note =  {title: this.state.title , description: this.state.description}
        this.props.addNote(note);
        this.props.addNote(note);
        console.log(note);
        alert("Your note " + this.state.title + " is saved");
        this.setState({ title:"", description:"" });
    }



    render() { 
        return ( 
            <div className="main-form">
                <FormLabel className="main-h1"> Notes Creator </FormLabel>
                 <div>
                <FormGroup>
                 <FormControl type="title" placeholder="Title is here" onChange={this.setTitle} value={this.state.title}  />
                 <FormControl type="description is here" placeholder="Description" onChange={this.setDescription} value={this.state.description} />
                </FormGroup>
                 <Button variant="primary" onClick={this.setNote}>Save Note</Button>
                 <Link to="/notes">
                 <Button variant="danger">Go 2Note Page</Button>
                 </Link>
                </div>  
                <Link style={{color: "purple"}} className="main-disconect"  to='/'>Disconnect</Link>

               </div> 
           
        );
    }
}
       
    

 
export default withRouter(Main);