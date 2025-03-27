import s from './Catalogy.module.css'
import BlueBtn from '../BlueBtn/BlueBtn';
import GrayBtn from '../GrayBtn/GrayBtn';
import Card from './Card/Card';
import { products } from '../../products';
import { categories } from '../../categories';

export default function Catalogy(){
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

              {/* <BlueBtn text="Все товаы" /> {}
              <GrayBtn text="Шины/колеса" /> {}
              <GrayBtn text="Масла" /> {}
              <GrayBtn text="Ароматизаторы" /> {} */}
            </div>

            <div className={s.cards}>
                {
                  products.map(product => <Card id = {product.id} imagePath= {product.imagePath} name={product.name} price = {product.price} />)
                }
                
            </div>
          </div>
        </div>
      </div>
    )
}

