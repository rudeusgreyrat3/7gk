import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className={s.header_inner}>
                    <img src={reactLogo} alt="" className={s.logo} />
                    <nav className={s.nav}>
                        <NavLink to="/" className={`${s.nav_item} nav_item`}> Главная</NavLink>   
                        <NavLink to="/" className={`${s.nav_item} nav_item`}> Каталог</NavLink>   
                    </nav>
                
                </div>
            </div>
        </header>
    )
}