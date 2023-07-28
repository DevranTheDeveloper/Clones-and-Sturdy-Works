import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import NavbarMy from './components/Navbar';
import AccordionMy from './components/Accordion';


function App() {

  const Gunduz = false;
  return (
    <>
    <NavbarMy/>
      <div>
        <p>
          {Gunduz ? "Günaydın":"Tünaydın"}
          {Gunduz && <p>İyi Günler</p>}
          {Gunduz ? (<p>Naber</p>):(<p>Kalk</p>)}
        </p>
        <Button variant="primary">Primary</Button>{' '}
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <AccordionMy/>
      </div>
    </>
  )
}

//* js expression ifadeleri süslü parantezler içerisine alınır

//* ifadelerde tanımlı değişkenleri veya fonksiyonları kullanarak dinamik yağılar ortaya çıkartabiliriz 

export default App
