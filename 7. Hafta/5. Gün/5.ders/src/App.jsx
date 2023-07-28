import React, {Component} from 'react'
import './App.css'
import propTypes from 'prop-types' 



// function App() {
   
//     let name = "Emre";
//     let merhaba = `Merhaba, ${name}`;
    
//     return (
//       <>
//         <span>{merhaba}</span>
//       </>
//     )
  
// }

// export default App;

class Mycomponent extends Component{
  render(){
    let{name,age} = this.props
    return (
      <div>
        <h1>Merhaba, {name}</h1>
        <p>Yaşınız, {age}</p>
      </div>
    )
  }
}

//* propTypes 

//* React componentlerinde kullanılan bir doğrulama aracıdır
//*Componentlere geçirilien propsların doğru türde olduğunu ve istenilen değerler sahip olduğunu kontrole etmeye yarar. propTypes için 
//TODO import propTypes from 'prop-types'

Mycomponent.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired
};

//* propTypes.stirng.isRequired ile name prop'unun bir string olması gerektiğin ve zorunlu olduğunu belirttik. propTypes.number.isRequired ile de age probunun sayı olması gerektiğini belirttik

//* defaultProps 
//* belirli bir prop verilmediği durumda bu probun varsayılan bir değer almasını sağlar böylelikle hata engellenir

Mycomponent.defaultProps = {
  name: "Tanımsız",
  age: 0,
}

function App() {
  return (
    <Mycomponent name="Devran" age={18}/>
  )
}

export default App;