import React from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
class FormAddItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            item : '',
            redirect : false
        }
      }
   
    handleClick = () => {
        this.setState({
            redirect : true
        });
        console.log("true");
      }; 
    addItem = (e)=>{
        e.preventDefault();
        if(this.state.item)
        axios.post('/employees/addEmployee',{
            firstName:this.state.item
        }).then(rep=>{
            this.setState({redirect:true});
        }).catch(err=>{
            console.log(err);
        });
        else console.log("require champs");
    }
    handleGoBack=(e)=> {
        e.preventDefault();
        this.setState({redirect:true});
      }
    render(){
        return (
            <div className="card bg-light">
                <form>
                <input className="form-control mb-2 mt-2" onChange={e=>this.setState({item : e.target.value})} 
                       type="text" placeholder="add item"/>
                <div className='d-flex justify-content-center'>
                    <button onClick={this.addItem} className="btn btn-primary btn-sm me-2 px-3">Add</button>
                    <button onClick={this.handleGoBack} className="btn btn-primary btn-sm">Cancel</button>
                    {this.state.redirect && <Navigate to="/"/>}
                </div>
                
            </form>
            </div>
            
            
        )
    }
}

export default FormAddItem;