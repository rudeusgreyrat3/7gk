import s from './Catalogy.module.css'
import BlueBtn from '../BlueBtn/BlueBtn';
import GrayBtn from '../GrayBtn/GrayBtn';
import Card from './Card/Card';
import { products } from '../../products';
import { categories } from '../../categories';
import Search from '../../assets/components/Serach/Search';
import { useState } from 'react';

export default function Catalogy(){

  const [search, setSearch] = useState('');
  const[sorting, setSorting] = useState(0);
  const [category, setCategory] = useState('all');
  function sort(e){
      setSorting(e.target.value);
  }
  function sortProducts(sorting, products){
      switch(sorting){
          case 'asc': return [...products].sort((a, b)=> a.price - b.price);
          case 'desc': return [...products].sort((a, b)=> b.price - a.price);
          default : return products;
      }
  }
  function handleChange(e){
    setSearch(e.target.value);
}

const filtredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLocaleLowerCase())
 && 
(product.categoryId == category || category == 'all')
);
const sortedAndFiltredProducts = sortProducts(sorting, filtredProducts);

    return(
      <div className={s.catalogWrapper}> {}
        <div className="container">
          <div className={s.catalogy}>
            <h1>Каталог товаров</h1>

            <div className={s.Categories}>
              <h2>Категории: </h2>
              <br />
              {
                categories.map(categori => <BlueBtn text={categori.name}/>)
              }
            </div>

              <Search handleChange={handleChange} />

              <select value={sorting} onChange={sort} style={{width: '150px'}}>
                  <option value="0">Сортировать</option>
                  <option value="asc">По возрастанию</option>
                  <option value="desc">По убыванию</option>
              </select>
                          <div className="categoties" style={{display: 'flex', gap: "20px"}}>
                              <button onClick={()=> setCategory('all')}>Все товары</button>
                              <button onClick={()=> setCategory(0)} >Для женщин</button>
                              <button onClick={()=> setCategory(1)}>Для мужчин</button>
                          </div>

            <div className={s.cards}>
                {
                  sortedAndFiltredProducts.length ?
                  sortedAndFiltredProducts.map(product => <Card id = {product.id} imagePath= {product.imagePath} name={product.name} price = {product.price} />)
                  :
                  <p>Продукт "{search} не найдено"</p>
                }
                
            </div>
          </div>
        </div>
      </div>
    )
}

