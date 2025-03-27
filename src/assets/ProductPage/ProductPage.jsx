import { useParams } from "react-router-dom";
import BlueBtn from "../../components/BlueBtn/BlueBtn";
import { products } from "../../products";
import s from "../ProductPage/ProductPage.module.css"

export default function ProductPage(){
    const {id} = useParams();
    const product = products.find(product=>product.id == id);
    console.log(product);
    return(
    <div className="container">
        <div className={s.product}>
            
                <div className="product_img">
                    <img src= {`/${product.imagePath}`} alt="" />
                </div>
                <div className={s.product_about}>
                        <div className="product_name"><h1>{product.name}</h1></div>
                        <div className={s.product_description}> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sequi? Asperiores commodi iure exercitationem quos eum ipsum, perferendis excepturi est officia molestias possimus voluptates sed deserunt ullam! Praesentium, delectus quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus voluptate vitae iure laborum vel vero, officiis magni officia sapiente debitis iusto assumenda provident corrupti quia illum laudantium pariatur repellat.</p> </div>
                    <div className={s.product_c}>
                        <div className={s.product_price}>
                    
                            {product.price}
                            
                            </div>
                        <BlueBtn text="В корзину"/>
                    </div>
                </div>
                </div>
        </div>
    )
}