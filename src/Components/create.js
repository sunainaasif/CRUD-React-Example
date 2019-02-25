import React , {Component} from 'react';

export default class Create extends Component{
   constructor(props){
    super(props);
        this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    this.state={
        userName:'',
        password:''
    }
}

   onChangeUserName(event){
    this.setState({
        userName: event.target.value
    });
   }
    onChangePassword(event){
        this.setState({
            password: event.target.value
        });
   }

   onSubmit(event){
       event.preventDefault();
       console.log(`The values are ${this.state.userName} and ${this.state.password}`);
       this.setState({
           userName:'',
           password:''
       })
   }

    render(){
        return(
            <div style={{marginTop:10}}> 
            <div>Add Credentials</div>
            <form>
                <div className="form-group">
                    <label> Enter User Name : </label>
                    <input type='text' className="form-control"/>
                </div>
                <div className="form-group">
                    <label> Enter Password </label>
                    <input type='text' className="form-control"/> 
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>

            </div>
        )
    }
}