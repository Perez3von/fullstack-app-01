import React, { Component } from 'react';
import {getPeople} from './api-utils.js'
import { Link } from 'react-router-dom';



class People extends Component {
    state={

        people:[]
    }
    componentDidMount = async ()=> {

        const data = await getPeople();
        this.setState({people:data});

    }


    render() { 
        return ( 
            <>
            
            {this.state.people.map((p)=>(

               <h2 key={p.id} > <Link to={`/people/${p.id}`}> {p.name} </Link> </h2>

            ))
            }
            
            </>
         );
    }
}
 
export default People;