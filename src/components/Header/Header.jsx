import s from './Header.module.css'
import Logo from '../../img/avtotorgLogo.svg'
import BlueBtn from '../BlueBtn/BlueBtn';
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <header>
        
            <div className= {s.header}>
                <nav className={s.nav}>
                <NavLink to="/" className={`${s.nav_item} nav_item`}> Главная</NavLink>   
                        <NavLink to="/catalogWrapper" className={`${s.nav_item} nav_item`}> Каталог</NavLink>   
                </nav>
                <img src={Logo} alt="" />
                <div className={s.nav_btn}>
                    <BlueBtn text="Регистрация" /> {}
                    <BlueBtn text="Вход" /> {}
                </div>
            </div>
    
    </header>
    )
}