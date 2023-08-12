import { useCallback, useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getBook } from "../lib/books.request";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import { Loader } from "../components/Loader/Loader";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const [inCart, setInCart] = useState({});
  const { addProduct, itemInCart } = useCartContext();

  useEffect(() => {
    getBook(id).then((res) => {
      if(!res) return navigate('/')
      setBook(res);
    });
  }, []);

  //Aplicamos el useCallback Funcion con array de dependencias

  const handleAdd = useCallback(
    (qty) => {
      addProduct(book, qty);
    },
    [addProduct, book]
  );

  if (!Object.keys(book).length) return <Loader />;

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={book.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{book.title}</span>

          <p className="detail__info-description">{book.description}</p>

          <span className="detail__info-price">
            $
            {(book.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 2,
              maximumFractionDogits: 2,
            })}
          </span>

          {/* <span className="detail__info-stock">¡Quedan solo {book.stock}!</span> */}
          <span className="detail__info-stock">¡Últimas piezas! Disponibles {book.stock}</span>

          <ItemCount
            stock={book.stock - (itemInCart?.(id)?.qty || 0)}
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};
