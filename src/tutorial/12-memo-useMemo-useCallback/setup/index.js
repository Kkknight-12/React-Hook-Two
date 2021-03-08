import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

// whenever you update the state value count you render this function
// but suppose if this function take long time to cal value it will
// delay to update state value.
// it would be nice if we can remember the Most exp value 
// and render the function only when the data changes which is products
const calMostExpensive = (data) => {
  return (
    data.reduce( ( total, item )=> {
      const price = item.fields.price;
      if( price >= total ){
        total = price;
      }
      return total;
    },0)/100
  );
};

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [ cart, setCart ] = useState(0);

  // when the value of count changes it trigger re-render
  // and when ever that happen we create the addToCart function from scratch
  // useCall will check for the value change, if the value change then only
  // re-render the function
  const addToCart = useCallback(()=> {
    setCart( cart + 1 );
    // need to add dependency as each time you update cart value you update this function
  },[cart]);
  // when if you work with count you wont trigger re-Render
  // function will only re-render if you update the cart value.

  // using useMemo to keep watch on products
  // run the function mostExpensive only when products changes
  const mostExpensive = useMemo( () => {
    return calMostExpensive(products)
  },[products])

  return (
    <>
      <h1>Count: {count}</h1>
        <button className='btn'
          onClick={ () => setCount( count + 1 ) }
          >click me
        </button>
        <h1 style={ { marginTop: '3rem' } }
          >cart: {cart}
        </h1>
        <h1>
          Most Expensive: ${ mostExpensive }
        </h1>
        <BigList products={products} addToCart={addToCart} />
    </>
  )

}


// memo function checks if the prop products changes then only re-render the function
// BigList
// don't confuse memo function with useMemo they are different
const BigList = React.memo( ({ products, addToCart }) => {
  useEffect( () => {
    console.log('big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = ({ fields, addToCart }) => {
   
  useEffect( () => {
    console.count('single item called')
  })

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button  onClick={addToCart}>Add to Cart</button>
    </article>
  )
}
export default Index;

/* 
difference between React.memo and useMemo
React.memo - checks for prop value changes
useMemo - check is the value change
*/