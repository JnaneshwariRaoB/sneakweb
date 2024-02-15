// import{ useState }from "react"
// function App()
// {
//   const [val,setVal]=useState('https://source.unsplash.com/random/200x200/?cat')
  

// const change=()=>{  setVal('https://source.unsplash.com/random/200x200/?dog')
    
//   }
//   return(
//     <>
//       <h2>My Name App</h2>
//     <img src={val} alt="cat1"></img>
//     <button onClick={change}>change</button>
//     </>
//   )
// }
//export default App
// import Twostar from "./twostar"
// function App(){
//   const ss={
//     name:"shreya",
//     place:'Karwar',
//     star:'star'
//   }

//   const ps={
//     name:"jeevitha",
//     place:'mangalore',
//     star:'power'
//   }
// return
// (
//   <>
//   <h1>Star student  of ISE 3A Detail</h1>
//   <h3>shreya</h3>
//   <p>from Karwar</p>
//   <hr></hr>

//   <Twostar ss={ss}/>
//   <Twostar ps={ps}/>
  
//   </>
// )
// }
// export default App

// function App()
// {
//   const submit=()=>{
//     alert("data submitted")
//   }
//   return(
//     <>

//     <h1>form demo</h1>
//     <hr></hr>
//     <form onSubmit={submit}>
//       <label>Name</label>
//       <input type="text" name="name" />
//       <button>submit</button>

//     </form>
//     </>
//   )
// }
// export default App

import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Palermo Unisex Sneakers', price: 10, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395875/04/sv01/fnd/IND/fmt/png/Blktop-Rider-Preppy-Unisex-Sneakers', 
    
    category: 'Category 1', rating: 4 },
    { id: 2, name: 'Mens Sneakers', price: 20, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395875/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Preppy-Unisex-Sneakers', 
    category: 'Category 2', rating: 3 },
    { id: 3, name: 'Womens Sneakers', price: 15, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/396463/07/sv01/fnd/IND/fmt/png/Palermo-Unisex-Sneakers', 
    category: 'Category 3', rating: 5 },

    { id: 1, name: 'Palermo Unisex Sneakers', price: 10, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/396463/05/sv01/fnd/IND/fmt/png/Palermo-Unisex-Sneakers', 
    
    category: 'Category 4', rating: 4 },
    { id: 2, name: 'Mens Sneakers', price: 20, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/396463/02/sv01/fnd/IND/fmt/png/Palermo-Unisex-Sneakers', 
    category: 'Category 5', rating: 3 },
    { id: 3, name: 'Womens Sneakers', price: 15, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/396041/01/sv01/fnd/IND/fmt/png/PUMA-x-PERKS-AND-MINI-Velophasis-V002-Men', 
    category: 'Category 6', rating: 5 },

    { id: 1, name: 'Palermo Unisex Sneakers', price: 10, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380080/01/sv01/fnd/IND/fmt/png/Velocity-NITRO%E2%84%A2-3-Psychedelic-Rush-Men', 
    
    category: 'Category 7', rating: 4 },
    { id: 2, name: 'Mens Sneakers', price: 20, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380086/01/sv01/fnd/IND/fmt/png/FAST-FWD-NITRO%E2%84%A2-Elite-Men', 
    category: 'Category 8', rating: 3 },
    { id: 3, name: 'Womens Sneakers', price: 15, img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/107845/01/sv01/fnd/IND/fmt/png/FUTURE-7-MATCH-CREATIVITY-FG/AG-Men', 
    category: 'Category 9', rating: 5 },
    // Add more products here
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter(item => item.quantity !== 0));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Sneaka</div>
          <input type="text" placeholder="Search..." />
          <ul>
            <li>All</li>
            <li>Category 1</li>
            <li>Category 2</li>
            {/* Add more categories here */}
          </ul>
        </nav>
      </header>
      <main>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <div>Rating: {product.rating}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;



