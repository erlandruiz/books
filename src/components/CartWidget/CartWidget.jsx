import { FaOpencart } from "react-icons/fa"
import './CartWidget.css'

export const CartWidget = () =>{
    return(
        <div className="cart-widget">
            <FaOpencart style={{fontSize: 50, color: 'red'}} /> <span className="cart-widget__qty">(3)
                </span>

        </div>
    )
}