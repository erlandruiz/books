import { FaOpencart } from "react-icons/fa"
import './CartWidget.css'
import { useCartContext } from "../../state/Cart.context"
import { useNavigate } from "react-router-dom";

export const CartWidget = () =>{

    const {getCartQty} = useCartContext();

    const navigate = useNavigate();
    return(
        <div className="cart-widget" onClick={()=> navigate('/cart')}>
            <FaOpencart style={{fontSize: 50, color: 'red'}} /> 
            
           { getCartQty ? <span className="cart-widget__qty">({getCartQty})
                </span> : null}

                
        </div>
    )
}