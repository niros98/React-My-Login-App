import './App.css';
import React from 'react';
import {Switch, Route, withRouter
} from "react-router-dom";
import Login from './components/CCLogin';
import SignIn from './components/CCSignIn';
import Main from './components/CCMain';
import Notes from './components/CCNotes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedUser:''
    }  
  }
  addUser = (user) => {
    let temp = [...this.state.users, user];
    this.setState({ users: temp });
  }
  logIn = (details) => {
    let user = this.state.users.find((s) => s.email === details.email && s.password === details.password);
    if(user === undefined)
    {
      alert('undefined');
      return;
    }
    else{
      this.props.history.push({
        pathname:'/main'
      });
      this.setState({
        loggedUser:user
      })
    }
  }

addNote = (note) => {
  let user=this.state.users.find((s)=>s.email===this.state.loggedUser.email)
  user.notes.push(note)
  let newArr=this.state.users.filter((s)=>s.email!==user.email)
  this.setState((prev)=>({
    loggedUser:user,
    users:[...newArr,user]
  }));
}
delete = (index) => {
  console.log(index,this.state.loggedUser)
  let user=this.state.users.find((s)=>s.email===this.state.loggedUser.email)
  user.notes.splice(index,1)
  this.setState((prev)=>({
    loggedUser:user,
    users:[...user.notes,user]
  }));
}

  render() {
    return (
     
        <div>
          <Switch>
            <Route exact path="/" render={() => <Login logIn={this.logIn}/>} />
            <Route path="/signin" render={() => <SignIn addUser={this.addUser} />} />
            <Route path="/main" render={() => <Main addNote={this.addNote}/>} />
            <Route path="/notes"render={() => <Notes deleteNote={this.deleteNote} notes ={this.state.loggedUser.notes}/>}/>
          </Switch>
        </div>
      

    );
  }
}

export default withRouter(App);
