import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'

function Brands() {
    const state = useContext(GlobalState)
    const [brands] = state.brandsAPI.brands
    const [brand, setBrand] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.brandsAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createBrand = async e => {
        e.preventDefault()
        try {
            if (onEdit) {
                const res = await axios.put(`/api/brand/${id}`, { name: brand }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            } else {
                const res = await axios.post('/api/brand', { name: brand }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setBrand('')
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editBrand = async (id, name) => {
        try {
            setID(id)
            setBrand(name)
            setOnEdit(true)
        } catch (err) {
            alert(err.msg)
        }
    }

    const deleteBrand = async id => {
        try {
            const res = await axios.delete(`/api/brand/${id}`, {
                headers: { Authorization: token }
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="brands">
            <form onSubmit={createBrand}>
                <label htmlFor="brand">Бренды</label>
                <input type="text" name="brand" value={brand} required
                    onChange={e => setBrand(e.target.value)} />

                <button type="submit">{onEdit ? "Изменить" : "Создать"}</button>
            </form>

            <div className="col">
                {
                    brands.map(brand => (
                        <div className="row" key={brand._id}>
                            <p>{brand.name}</p>
                            <div>
                                <button onClick={() => editBrand(brand._id, brand.name)}>Изменить</button>
                                <button onClick={() => deleteBrand(brand._id)}>Удалить</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brands
