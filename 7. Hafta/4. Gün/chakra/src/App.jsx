import React from 'react'
import './App.css'


//* bir component belirli verileri almak veya  diğer componentlere 

//* bu sayede veriler bileşenler arasında iletişim kurarken kullanılır

//* aslında bir componentin dışa aktarılbilmesi için props parametresini kullanmak gerekir

// let MyComponent = (props) => {
//   return (
//     <h1>Merhaba, {props.name}</h1>
//   );
// }

let UserCard = (props) => { // yapıyı burada oluşturdun 
  return (
    <div className='user-card'>
      <img src={props.avatar}/>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

let App = () => {
  return (
    <div className='users'>
      <h1>Kullanıcı Listesi</h1>
      <UserCard  // burda da oluşturduğun yapıyı çekip içindeki özelliklere bilgi girdin
        name = "Devran"
        avatar = "data:image/jpeg;base64,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"
        bio = "Merhabalar ben fullstack developer Indian People"
      />
    </div>
  )
}
export default App;
