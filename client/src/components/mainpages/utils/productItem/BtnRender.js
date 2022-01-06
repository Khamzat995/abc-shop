import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    const handleClick = () => {
        window.scroll({top: 150, behavior: 'smooth' })
    }

    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Удалить
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Изменить
                    </Link>
                </>
                : <>
                    {/*<Link id="btn_buy" to="#!" onClick={() => addCart(product)}>*/}
                    {/*    Добавить*/}
                    {/*</Link>*/}
                    {/*<Link id="btn_view" to={`/detail/${product._id}`} onClick={handleClick}>*/}
                    {/*     Смотреть*/}
                    {/*</Link>*/}
                </>
            }
        </div>
    )
}

export default BtnRender