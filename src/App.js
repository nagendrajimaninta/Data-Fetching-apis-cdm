import "./styles.css";
import React,{Component} from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({items:data})
    })
    .catch((error)=>console.log(error))
  }
  render(){
    return (
      <>
      <h2>Data Fetching from the apis</h2>
      {this.state.items.map((item)=>(
        <ol key={item.id}>
         { item.username }
                    
        </ol> 
      ))}
      <h3>This is the example of the class Component</h3>
      <h1 style={{color:'green'}}>Fetch apis inside componentDidMount</h1>
      </>
    );
  }
}
export default App;
