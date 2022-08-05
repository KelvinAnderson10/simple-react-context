import { Component } from "react";
import { MainContext } from "../../context/MainContext";

class LoginView extends Component{
    static contextType = MainContext;
    render(){
        const {setProfile} = this.context
        return(
            <div>
                <button onClick={()=> setProfile({name: 'Doni'})}>Login</button>
            </div>
        )
    }
}

export default LoginView;