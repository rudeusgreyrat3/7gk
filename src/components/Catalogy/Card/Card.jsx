
import s from './Card.module.css'
import BlueBtn from '../../BlueBtn/BlueBtn';
import { Link } from 'react-router-dom';

export default function Card(props){
    return(
           
            <div className={s.Card}>
                <img src={props.imagePath} alt="" />

                <p>{props.name}</p>

                <div className={s.price}>
                    <h2>{props.price} P</h2>
                    
                    <Link to={`${props.id}`}>
                        <BlueBtn text="Добавить в корзину" /> {}
                    </Link>
                </div>
                </div>
           
    )
}
