import s from './Banner.module.css'

export default function Banner(){
    return(
    
            <div className={s.banner}>
                <div className="container">
                    <button className={s.Banner_btn}>
                        О компании АвтоТорг
                    </button>
                </div>
            </div>
    )
}