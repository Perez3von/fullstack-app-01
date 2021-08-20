import React, { Component } from 'react';
import { createPerson, getColors } from './api-utils.js';
class CreatePerson extends Component {


    state={
        id:0,
        name:'',
        cool_factor:0,
        loves_music:false,
        color:'',
        color_list:[],
        error:false,
        message:''
    }
    componentDidMount = async () =>{
    
        const color_list  = await getColors();
        this.setState({color_list});
       
    }


    getColorId = () => {

        const colorObj =  this.state.color_list.find((item) => 
              item.color === this.state.color
              
          );
          return colorObj.id;
      }
  



handleClick = async (e) => {

        e.preventDefault();
        console.log(this.state)

        const personData = {
            id:this.state.id,
            name:this.state.name,
            cool_factor:this.state.cool_factor,
            loves_music:this.state.loves_music,
            shirt_color:this.getColorId()
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
        <form id='create-person'>
                    <div>
                        <label>NAME</label>
                        <input type='text' value={this.state.name}
                         onChange={(e)=>{
                            this.setState({name:e.target.value})

                        }
                        }
                        
                        ></input>

                    </div>
                    <div>
                        <label>Cool Factor</label>
                        <input type='number' value={this.state.cool_factor}
                         onChange={(e)=>{
                            this.setState({cool_factor:e.target.value})

                        }
                        }
                        
                        ></input>

                    </div>
                    <div>
                        <label>Favorite Color</label>
                        <select value={this.state.color} 
                        onChange={(e)=>{
                            this.setState({color:e.target.value})
                            
                        }
                        }>
                            {this.state.color_list.map((colour) => {  

                                return (<option value={colour.name} key={colour.id}>{colour.color}</option>)

                            } )}

                        </select>
                      

                    </div>
                    <div>
                        <label>Loves Music</label>
                        <input type='text' value={this.state.loves_music}
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