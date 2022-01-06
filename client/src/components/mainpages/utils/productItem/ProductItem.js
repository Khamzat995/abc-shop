import React from 'react'
import BtnRender from './BtnRender'
import { Link } from 'react-router-dom';
import Stars from './Stars';

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
  const handleClick = () => {
    window.scroll({top: 150, behavior: 'smooth' })
  }

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
          <Link to={`/detail/${product._id}`} onClick={handleClick}>
            <img src={product.images.url} alt="картинка" />
          </Link>


            <div className="product_box">
                <h6 title={product.title}>{product.title}</h6>

                {/*<span>${product.price}</span>*/}
                <span>{product.price} {' '} руб.</span>
                {/*<p>{product.description}</p>*/}
              <Stars/>
            </div>
            <BtnRender product={product} deleteProduct={deleteProduct}  handleCheck={handleCheck}/>
        </div>
    )
}

export default ProductItem
