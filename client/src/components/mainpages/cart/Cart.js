import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import { Card } from 'react-bootstrap';
// import PaypalButton from './PaypalButton'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        // if(window.confirm("Вы хотите удалить этот товар?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        // }
    }

    // const tranSuccess = async(payment) => {
    //     const {paymentID, address} = payment;
    //
    //     await axios.post('/api/payment', {cart, paymentID, address}, {
    //         headers: {Authorization: token}
    //     })
    //
    //     setCart([])
    //     addToCart([])
    //     alert("Вы успешно разместили заказ.")
    // }


    if(cart.length === 0) 
        return <h3 className="cart-text">Корзина пуста</h3>

    return (
      <div className="g-4">
          {cart.map((product) => (
            <div key={product._id} className="col" >
                <Card>
                    <div className="delete"
                         onClick={() => removeProduct(product._id)}>
                        X
                    </div>
                    <div style={{display: "flex"}}>
                        <img className="responsive" src={product.images.url} alt='картинка'/>
                        <div style={{padding: "20px"}}>
                        <div className='card-body'>
                            <div className='card-title'><h2>{product.title}</h2></div>
                            <h3>цена за 1 шт:{" "}{product.price}{" "}руб.</h3>
                            <h3>стоимость по количеству шт:{" "}{product.price * product.quantity}{" "}руб.</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </Card>
            </div>
          ))}
                <div className="total">
            {/*<h3>Total: $ {total}</h3>*/}
                <div className="total-one">
                <h2>Общая сумма покупок: {total} {" "} руб.</h2>
                </div>
            {/*<PaypalButton*/}
            {/*total={total}*/}
            {/*tranSuccess={tranSuccess} />*/}
                </div>
      </div>
    )
}

export default Cart
