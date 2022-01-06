import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (








        <div className="filter_menu">
            <div className="row" style={{marginRight: "10px"}}>
                <span>Фильтр: </span>
                <select value={category} onChange={e => setCategory(e.target.value)} >
                    <option value=''>Все товары</option>
                    {
                        categories.map(category => (
                          <option value={"category=" + category._id} key={category._id}>
                              {category.name}
                          </option>
                        ))
                    }
                </select>
            </div>

            <div className="row sort">
                <span>Сортировка: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Новинки</option>
                    <option value='sort=oldest'>Давние</option>
                    <option value='sort=-sold'>Лучшие продажи</option>
                    <option value='sort=-price'>Цена: высокая</option>
                    <option value='sort=price'>Цена: низкая</option>
                </select>
            </div>

            <input style={{ width:"100px"}} type="text" value={search} placeholder="Введите свой поиск"
            onChange={e => setSearch(e.target.value.toLowerCase())} />
        </div>

    )
}

export default Filters
