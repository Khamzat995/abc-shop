import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Создать продукт</Link></li>
                <li><Link to="/category">Категории</Link></li>
                <li><Link to="/brand">Бренды</Link></li>
            </>
        )
    }
    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">История</Link></li>
                <li><Link to="/" onClick={logoutUser}>Выйти</Link></li>
            </>
        )
    }
    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Страница админа' : 'лучшие цены'}</Link>
                </h1>
                <h3 className="fas fa-phone">{" "}+90 552 286 8989</h3>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Товары' : 'Магазин'}</Link></li>
                <li><Link to="/about">О нас</Link></li>
                {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Войти ✥ Регистрация</Link></li>
                }
                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="картинка" width="30" className="menu" />
                </li>
            </ul>
            {
                isAdmin ? ''
                    : <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="30" />
                        </Link>
                    </div>
            }
        </header>
    )
}

export default Header
