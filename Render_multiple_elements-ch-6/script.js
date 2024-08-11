import { createRoot } from 'react-dom/client';

import './style.css';

const h1 = <h1>Hello World</h1>

// const card = <div className='card'>
//       <img src="https://unsplash.com/photos/macro-photography-of-drop-of-water-on-top-of-green-plant-Kp9z6zcUfGw" alt='sky' />  
//       <div className="card-content">
//       <h3>
//         Iphone
//       </h3>
//       <p>
//         Apple
//       </p>
//       <p>
//         <b>
//             $1000
//         </b>
//       </p>
//       </div>
// </div>

function  Card(key, title, image, brand, price){
    console.log(key)
    return ( <div className='card' key={key}>
    <img src={image} alt='sky' />  
    <div className="card-content">
    <h3>
      {title}
    </h3>
    <p>
      {brand}
    </p>
    <p>
      <b>
          ${price}
      </b>
    </p>
    </div>
</div>
    )
}




const root = createRoot(document.getElementById('root'))

console.log(Card());

// const container = [
//     Card(1),
//     Card(2),
//     Card(3),
//     Card(4),
//     Card(5),
//     Card(6),
//     Card(7),
//     Card(8),
// ]

console.log('Hello world!!!')

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    console.log(data)
    const container2 = data.products.map((product) => {
      return Card(product.id, product.title, product.thumbnail, product.brand, product.price)
    })

    root.render(<div className='container'>{container2}</div>)
    console.log(container2)
});