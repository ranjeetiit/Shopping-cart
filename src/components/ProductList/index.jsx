import React from 'react';
import PropTypes from 'prop-types';
import Product from 'Containers/product';

const ProductList = ({ products }) => {
    return (
        <div>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
