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
  function handleChange(e){
    setSearch(e.target.value);
    
}
const filtredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLocaleLowerCase()));

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

            <div className={s.cards}>
                {
                  filtredProducts.length ?
                  filtredProducts.map(product => <Card id = {product.id} imagePath= {product.imagePath} name={product.name} price = {product.price} />)
                  :
                  <p>Продукт "{search} не найдено"</p>
                }
                
            </div>
          </div>
        </div>
      </div>
    )
}

