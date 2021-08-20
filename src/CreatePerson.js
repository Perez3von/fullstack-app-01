import React, { Component } from 'react';
import { createPerson, getColors } from './api-utils';
class CreatePerson extends Component {
    state={

        name:'',
        cool_factor:0,
        loves_music:false,
        shirt_color:1,
        color_list:[]
    }

componentDidMount = async () => {

    const colors = await getColors();
    this.setState({color_list:colors})

}

handleClick = async (e) => {

    e.preventDefault();

    const personData = {
        id:this.state.id,
        name:this.state.name,
        cool_factor:this.state.cool_factor,
        loves_music:this.state.loves_music,
        shirt_color:this.state.shirt_color
    }


    const data = await createPerson(personData);

    if(data.error){
    alert('an error occured')
    
    }
    else{
        alert('success')
    }
    

}







    render() { 
        return ( 
        <>
        <h2>Welcome to Create Person</h2>
        <form id='update-person'>
                    <div>
                        <label>NAME</label>
                        <input type='text' 
                         onChange={(e)=>{
                            this.setState({name:e.target.value})

                        }
                        }
                        
                        ></input>

                    </div>
                    <div>
                        <label>Cool Factor</label>
                        <input type='number' 
                         onChange={(e)=>{
                            this.setState({cool_factor:e.target.value})

                        }
                        }
                        
                        ></input>

                    </div>
                    <div>
                        <label>Favorite Color</label>
                        <select 
                        onChange={(e)=>{
                            this.setState({shirt_color:e.target.value})
                            
                        }
                        }>
                            {this.state.color_list.map((colour) => {  

                                return (<option value={colour.id} key={colour.id}>{colour.color}</option>)

                            } )}

                        </select>
                      

                    </div>
                    <div>
                        <label>Loves Music</label>
                        <input type='text'
                         onChange={(e)=>{
                            this.setState({loves_music:e.target.value})

                        }
                        }
                        
                        
                        ></input>

                    </div>
               
               <button type='submit'onClick={this.handleClick}> Submit changes </button>
               
               </form>





        </> );
    }
}
 
export default CreatePerson;