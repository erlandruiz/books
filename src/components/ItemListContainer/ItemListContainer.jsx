import { Item } from "../Item/Item";
import "./ItemListContainer.css";


export const  ItemListContainer = ({products})=>{

    return (

        <div className="item-list">

            {
                products.map((product)=><Item
                key={product.id}
                // {...product}
                
                img={product.img} 
                category={product.category} 
                title={product.title} 
                price={product.price}
                
                
                />)
            }
            <h1>


        
            </h1>
    
        </div>

    );

       


    



}