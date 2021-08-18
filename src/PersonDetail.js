import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import{getPerson} from './api-utils.js'
class PersonDetails extends Component {
    state={
        id:0,
        name:'',
        cool_factor:0,
        loves_music:false,
        shirt_color:0
    }
    componentDidMount = async () =>{
        
        const person_id =  this.props.match.params.person_id;
        const person = await getPerson(person_id);
        console.log('fsd');
        this.setState({...person});
    }

    render() { 
        return (

            <>
            <h2>Welcome to a person's page</h2>
            

               <p>{this.state.name}</p>
               <p>{this.state.cool_factor}</p>

            
            </>
          );
    }
}
 
export default PersonDetails;