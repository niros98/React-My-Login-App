import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link, withRouter} from 'react-router-dom';
import {card,  FormControl, Form, Button  ,  FormGroup , FormLabel, FormCheck , onBlur} from "react-bootstrap";

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}}
    DeleteNote = (index)=>{
        debugger;
        this.props.delete(index);
    };
    render() {       
return ( 
    <div style={{textAlign:'center'}}>
    <h1>Notes</h1>
    <div style={{display: 'flex', margin:20}}>
    {this.props.notes.map((note,index)=>
    <Card key = {index}>
         <Card.Body>
             <Card.Title>{note.title}</Card.Title>
             <Card.Text>{note.description}</Card.Text>
             <Button variant="danger" onClick={()=> this.DeleteNote(index)}>Delete</Button>
         </Card.Body>
    </Card>  
    )}
    </div>
    <Link to="/main">
        <Button variant="link">back 2 Main</Button>
    </Link>
</div>
       
            
         );
    }
}
 
export default withRouter(Notes);