import React, { Component } from 'react';
import {getPeople} from './api-utils.js'




class People extends Component {
    state={

        people:[]
    }
    componentDidMount = async ()=> {

        const people = await getPeople();
        this.setState({people});

    }


    render() { 
        return ( 
            <>
            <h2>Welcome to All people page</h2>
            {this.state.people.map(p=>{

                return <p>{p.name}</p>

            })}
            <p></p>
            </>
         );
    }
}
 
export default People;