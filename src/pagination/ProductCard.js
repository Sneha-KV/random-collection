import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
            <img src={product.thumbnail} alt="thumbnail" className='product-img'/>
            <div>{product.title}</div>
    </div>
  )
}

export default ProductCard