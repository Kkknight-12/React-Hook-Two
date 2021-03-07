import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ( { image, name, price } ) => {

  // now if image is there only then get me url 
  const url = image && image.url;
  return (
  <article className='product'>
    {/* if url don't exist defaultImage will be used */}
    <img src={ url || defaultImage} alt={name || 'default name'}/>
    <h4>
    {name}
    </h4>
    {/*  if price don't exist default price is 3.99 */}
    <p>${ price || 3.99 }</p>
  </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// commiting the code to run circut method
/* 
the image will still not be shown as you try to access image.url in code above, and the default image have no url property.
*/
// Product.defaultProps = {
//   image: 'default name',
//   price: '3.99',
//   image: url
// }
export default Product;
