import * as React from 'react';
import './Products.css'
import '../../App.css'
import { FiPlus, FiMinus } from "react-icons/fi"

const Products = () => {
  
  const products = [
    {
      id: '0',
      name: 'Ekster Senate Cardholder', 
      description: {
        color: 'Black', 
        size: '200cm', 
        weight: '4Kg', 
      }, 
      price: '48.30', 
      bestPrice: '69.00',
      curencyCode: '€',
      img: 'https://cdn.shopify.com/s/files/1/1451/0712/products/front_black_960x.jpg?v=1603887006'
    },
    {
      id: '1',
      name: 'MOFT Universal Laptop Stand', 
      price: '29.99', 
      curencyCode: '€',
      img: 'https://www.proshop.de/Images/915x900/2946223_d6c4930b180f.jpg'}
  ];
  const [counter, setCounter] = React.useState([])

  const handleClounterDecr = (product) => {
    const exist = counter.find((x) => x.id === product.id)
    if (exist) {
      setCounter(
        counter.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      )
    } else {
      setCounter([...counter, {...product, qty: 1}])
    }
  }
  const handleClounterIncr = (product) => {
    const exist = counter.find((x) => x.id === product.id)
    if (exist) {
      setCounter(
        counter.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      )
    } else {
      setCounter([...counter, {...product, qty: 1}])
    }
  }

  return(
    products.map((item, i) => {
      return <>
      {
          counter[i]?.qty !== -1 &&
          <div className='product-item' key={item.id}>
          <div className='product-image'>
            <img src={item.img} alt="img" />
          </div>
          <div className='product-container'>
            <div className='product-heading'>
              <h3 className='my-0'>{item.name}</h3>
              {item.description?.color &&
                item.description?.size &&
                item.description?.weight &&
                <div className='product-description' key={i+1}>
                  <span>color: {item?.description?.color}</span> •
                  <span>size: {item?.description?.size}</span> •
                  <span>weight: {item?.description?.weight}</span>
                </div> 
              }
              <div className='product-price flex justify-between'>
                <div className='product-counter flex'>
                  <button className='products-counter_button' onClick={() => handleClounterIncr(item)}><FiMinus/></button>
                  <span>{(!counter[item.id]?.qty || counter[item.id]?.qty === 0) ? 1 : counter[item.id]?.qty + 1}</span>
                  <button className='products-counter_button' onClick={() => handleClounterDecr(item)}><FiPlus/></button>
                </div>
                <div className='product-price_price'>
                  {item?.bestPrice ? 
                  <div className='flex gap-1'>
                    <span className='line-through'>{item.curencyCode}{counter[item.id]?.qty ? ((counter[item.id]?.qty+1) * item.bestPrice).toFixed(2) : (item.bestPrice * 1).toFixed(2)}</span>
                    <span className='text-red font-semi-bolt'>{item.curencyCode}{counter[item.id]?.qty ? ((counter[item.id]?.qty+1) * item.price).toFixed(2) : (item.price * 1).toFixed(2)}</span>
                  </div> 
                  : 
                  <span className='font-semi-bolt'>{item.curencyCode}{counter[item.id]?.qty ? ((counter[item.id]?.qty+1) * item.price).toFixed(2) : (item.price * 1).toFixed(2)}</span> }
                </div>
              </div>
            </div>
            
          </div>
        </div>
      }
        
      </>
    })
  )
}

export default Products;