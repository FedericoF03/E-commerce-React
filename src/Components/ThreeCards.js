import { NavLink } from "react-router-dom";

const ThreeCards = ({img, name, description, price, slug})=>
    (
        <div className="three__cards__box">
            <NavLink className="prueba1" to={"/productos/" + slug}>
                <img
                className="three__cards--img" 
                src={img} 
                alt={"Product-img"}></img>
                <figcaption>{name}</figcaption>
                <p className="three__cards--price">{price}</p>
                <p className="three__cards__text--description">{description}</p>
            </NavLink>
        </div>
    );

export default ThreeCards