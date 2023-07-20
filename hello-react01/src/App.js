import React, {Fragment} from "react";
import "./App.css"
function App(){
  // return (
  //   <div>
  //     <h1>Hello React</h1>
  //     <h2>Hello World</h2>
  //   </div>
  // );

  // return (
  //   <Fragment>
  //     <h1>Hello World</h1>
  //     <h2>Hello React</h2>

  //   </Fragment>
  // );

  // return (
  //   <>
  //     <h1>Hello World</h1>
  //     <h2>Hello React</h2>
  //   </>
  // );

  // const name = "React";
  // return (
  //   <div>
  //     <h1>Hello {name} </h1>
  //     <h2>Hi World</h2>
  //   </div>
  // )

  //
  // const name = "React"; 
  // return (
  //   <div>
  //   {name === "React"?(
  //     <h1>React</h1>
  //   ):(
  //     <h1>Not React</h1>
  //   )}
  //   </div>
  // );

  // const name = "React1"; 
  // return <div>
  //   {name === "React" ? <h1>React</h1> : null}

  // </div>
  // return <div> {name === "React1" && <h1>React1</h1>}</div>

  // const name = 0 ; 

  // return 
  // <div>
  //   name && <h1> value-content </h1>
  // </div>

  // const name = undefined;
  
  //return name || "The value is null";
  //return <div>{name}</div>

  //  const name = "React"; 

  //  const style = {
  //     backgroundColor : 'black', 
  //     color : 'aqua', 
  //     fontSize : '48px', 
  //     fontWeight : 'bold', 
  //     padding : 16
  //  };
  //  return <div style={style}>{name}</div>
  const name = "React Hello"; 

  // return (
  //   <div style={{
  //     backgroundColor : 'black', 
  //     color : 'aqua', 
  //     fontSize : '48px', 
  //     fontWeight : 'bold', 
  //     padding : 16
  //   }}
  //   >
  //     {name}
  //   </div>
  // )

  //return <div className="react">{name}</div>
  return (
    <>
      <div className="react" >{name}</div>
      <input/>

    </>
  )

}
export default App;
