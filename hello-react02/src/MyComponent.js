import React, {Component} from "react"; 
import PropTypes from "prop-types";
// const MyComponent= () => {
//     return (
//         <div>
//             My New, Fancy Component
//         </div>
//     )
// };


// const MyComponent = props => {
//     return <div>Hello My Name is {props.name}</div>
// }

// const MyComponent = props => {
//     return (
//         <div>
//             Hello My Name is {props.name} <br/>
//             value of children {props.children} 
//         </div>
//     )
// }

// const MyComponent = props => {
//     const {name, children} = props; 

//     return (
//         <div>
//             Hello My Name is {name} <br/>
//             value of children {children}
//         </div>
//     )
// }

// destructuring assignment 
// const MyComponent = ({name, children}) => {
//     return (
//         <div>
//             Hello MyName is {name}. <br/>
//             {children} is value of children 
//         </div>
//     )
// }
//Component의 필수 Props를 지정하거나 props의 타입을 지정할 때에는 propTypes를 사용한다  
//Component의 propTypes를 지정하는 방법은 defaultProps을 설정하는 것고 비슷하다 

// const MyComponent = ({name, favoriteNumber, children}) =>{
//     return (
//         <div>
//             Hello My name is {name} <br/>
//             {children} is value of children
//             <br/>
//             {favoriteNumber} is my favorite Number 
//         </div>
//     )
// }

//class component 에서 props 사용하기 

// class MyComponent extends Component {
//     render () {
//         const {name, favoriteNumber, children} = this.props ; //비구조화 할당 

//         return (
//             <div>
//                 Hello My name is {name} <br/>
//                 {children} is value of children. 
//                 <br/>
//                 {favoriteNumber} is my favorite number 

//             </div>
//         )
//     }
// }

class MyComponent extends Component {
    static defaultProps = {
        name : "default Name"
    };
    static propTypes={
        favoriteNumber:PropTypes.number.isRequired, 
        name : PropTypes.string
    };

    render(){
        const {name, favoriteNumber, children} = this.props;

        return (
            <div>
                Hello My name is {name} <br/>
                {children} is value of children <br/>
                {favoriteNumber} is My favoriteNumber.
            </div>            
        );
    }
}

// class Counter extends Component {
//     constructor(props){
//         super(props);
        
//         this.state = {
//             number:0
//         };
//     }

//     render() {
//         const {number} = this.state;
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button onClick={() => {
//                     this.setState({number:number+1});
//                 }}>+1</button>


//             </div>
//         );
//     }
// }




// MyComponent.defaultProps = {
//     name : "Default Name"
// }

// MyComponent.defaultProps = {
//     name : "default name"
// }


// MyComponent.propTypes ={
//     name : PropTypes.string,
//     favoriteNumber:PropTypes.number.isRequired
// }

//propTypes를 지정하지 않았을 때 경고메시지를 띄어주는 작업
//prppTypes를 지정할 때 뒤에 isRequired를 붙여주면 된다 
// export default MyComponent;

export default MyComponent; 