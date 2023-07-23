// import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"; 
import MyComponent from "./MyComponent"; 
import Counter from './Counter';
import Say from "./Say";

// class App extends Component {
//   render(){
//     const name = "React"; 
//     return <div className = "react">
//       {name}
//     </div>
//   }
    
// }
// const App = () => {
//   return <MyComponent>React</MyComponent>;
// }

// const App = () => {
//   return <MyComponent name={"React"}>React</MyComponent>;
// }

// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={414}>React</MyComponent>
//   )
// }

const App= () => {
  // return (
  //   <Counter/>
  // );
  return (
    <Say />
  );
}
export default App;
