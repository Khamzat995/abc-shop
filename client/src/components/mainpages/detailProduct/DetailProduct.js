import React, { useContext, useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import ScrollToTop from "react-scroll-to-top"

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
            <div className="detail" >
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        {/*<h6>артикул: {detailProduct.product_id}</h6>*/}
                    </div>
                    <span>{detailProduct.price}{" "} руб.</span>
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    <h5>Дополнительная информация по товару:</h5>
                    <h5 style={{color: '#dc5e7b'}}>Tел: +90 0535-743-18-85</h5>
                    <h5 style={{color: '#dc5e7b'}}>WhatsApp мегафон: +7 938 997-65‐19 </h5>

                    <Link to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        купить
                    </Link>
                    <Link to="/" className="cart-btn" style={{marginLeft: '10px'}}>
                        вернуться
                    </Link>
                </div>
            </div>

            <div className="prefix">
                <h2>Похожие товары</h2>
                <div className="products" > <ScrollToTop />
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ?
                                 <ProductItem key={product._id} product={product} /> : null
                        })
                    }

                    {/*<div className="load_more">*/}
                    {/*    {*/}
                    {/*        result < page * 16 ? ""*/}
                    {/*          : <button onClick={() => setPage(page+1)}>Показать еще</button>*/}
                    {/*    }*/}
                    {/*</div>*/}

                </div>
            </div>
        </>
    )
}

export default DetailProduct
