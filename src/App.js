import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  //state hook
  const data = [
    {
      productImage:
        "https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Apple 14pro max",
      price: 100000,
      rating: 96,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 93,
    },
    {
      productImage:
        "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/617MPEZB5mL._SL1500_.jpg",
      productName: "Oneplus 11",
      price: 64000,
      rating: 65,
    },
    {
      productImage:
      "https://images.fonearena.com/blog/wp-content/uploads/2021/12/vivo-V23-Pro-5G-1024x1007.jpg",
      productName: "vivo v23 pro",
      price: 64000,
      rating: 60,
    },
    
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="cart-value">
      <Badge bg="success">
        CART {count}
      </Badge>
      </div>

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}

      </div>
    </div>
  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card key = {idx} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>{prod.price} RS</Card.Text>
          <Card.Text>{prod.rating} ♥</Card.Text>
        {/* conditional rendering */}

         {!show ? <Button
           variant="primary"
           onClick={addToCart}
           >Add cart</Button> : ""}


           {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""}

        </Card.Body>
      </Card>
  )
}