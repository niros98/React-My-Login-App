import  react , {  Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCSignIn from './CCSignIn';
import CCLogin from './CCLogin';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            appUsers : [],
            appLogedInUser : '',
            appuser:{}
        }

    }

    Getuser = (appuser)=>{
        var arr = new arr();
        arr = [this.state.appUsers, appuser];
        this.state({appUsers: arr});

    }
    UsersWhoLogedIn = (userName, password ) => {
        var who= this.state.appUsers.find(appuser => appuser.userName === userName && appuser.password === password);
        if (who) {
          this.setState({appLogedInUser: who.email})
          this.props.history.push({
            pathname: '/login'
            
          });
        }
        else {
          alert("Harkoskes");
        }
      }

render() {
    return (
        
            <Switch>
                <Route exact path="/login" render={()=><Login UsersWhoLogedIn={this.UsersWhoLogedIn}></Login>}/>
                <Route path = "/signIn" render={()=> <SignIn userAsObj = {this.Getuser}  appUsers={this.state.appUsers}></SignIn>}/>

            </Switch>
    )

}
}

export default withRouter(Index);
