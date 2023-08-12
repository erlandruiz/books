const BOOKS = [
    // {
    //   id: 1,
    //   title: "Los tres mosqueteros",
    //   category: "Aventura",
    //   price: 550,
    //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
    //   img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ba/6a/ba6aa7885fba12057064610475c9bd41.jpg",
    //   stock: 10,
    // },
    // {
    //   id: 2,
    //   title: "El conde de montecristo",
    //   category: "Aventura",
    //   price: 805,
    //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
    //   img: "https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg",
    //   stock: 10,
    // },
    // {
    //   id: 3,
    //   title: "El exorcista",
    //   category: "Terror",
    //   price: 299,
    //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
    //   stock: 5,
    //   img: "https://resources.claroshop.com/imagenes-sanborns-ii/1200/9786073178228.jpg"
    // },
    {
      // id: 4,
      title: "El señor de los anillos",
      category: "fantasia",
      price: 450,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
      img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
      stock: 6,
    },
    {
      // id: 5,
      title: "El señor de los anillos",
      category: "fantasia",
      price: 450,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
      img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
      stock: 6,
    },
    {
      // id: 6,
      title: "El señor de los anillos",
      category: "fantasia",
      price: 450,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
      img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
      stock: 6,
    }
  ];
// const BOOKS = [
//     {
//       id: 1,
//       title: "Los tres mosqueteros",
//       category: "Aventura",
//       price: 550,
//       description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
//       img: "https://images.cdn2.buscalibre.com/fit-in/360x360/ba/6a/ba6aa7885fba12057064610475c9bd41.jpg",
//       stock: 10,
//     },
//     {
//       id: 2,
//       title: "El conde de montecristo",
//       category: "Aventura",
//       price: 805,
//       description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
//       img: "https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg",
//       stock: 10,
//     },
//     {
//       id: 3,
//       title: "El exorcista",
//       category: "Terror",
//       price: 299,
//       description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
//       stock: 5,
//       img: "https://resources.claroshop.com/imagenes-sanborns-ii/1200/9786073178228.jpg"
//     },
//     {
//       id: 4,
//       title: "El señor de los anillos",
//       category: "Fantasia",
//       price: 450,
//       description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
//       img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
//       stock: 6,
//     },
//     {
//       id: 5,
//       title: "El señor de los anillos",
//       category: "Fantasia",
//       price: 450,
//       description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
//       img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
//       stock: 6,
//     },
//     {
//       id: 6,
//       title: "El señor de los anillos",
//       category: "Fantasia",
//       price: 450,
//       description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum sunt aperiam voluptates laboriosam placeat perspiciatis non, molestiae quas aut possimus magnam, earum quasi odio! Soluta fugit assumenda consequuntur deserunt?",
//       img: "https://lamexicanalibrerias.com/wp-content/uploads/2022/09/359897_portada_el-senor-de-los-anillos-3-el-retorno-del-rey_j-r-r-tolkien_202206071121-scaled.jpg",
//       stock: 6,
//     }
//   ];

import { collection, getDocs , getDoc, addDoc, doc, where, query, updateDoc, deleteDoc, writeBatch, increment } from "firebase/firestore";
  import { db } from "./config";

  const booksRef = collection(db, 'items');
  

export const getBooks = async (category) =>{

  const q = category
  ? query(booksRef, where('category', '==', category))
  : booksRef;
  let books =[];
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc)=>{
    books = [...books, {...doc.data(), id: doc.id}]
  });

  return books;

  
}
// export const getBooks = (id) =>{

//   const _books = id ? BOOKS.filter((book)=>book.category.toLowerCase() === id) : BOOKS;
//     return new Promise ((res)=>{
//         setTimeout(()=>{
//             res(_books)
//         }, 500)
//     });
// }

export const getBook = async(id) =>{

 const document = doc(db, 'items', id);
 const docSnap = await getDoc(document);

 if(docSnap.exists()) return {id: docSnap.id, ...docSnap.data()};

 return null;
}
// export const getBook = (id) =>{

//   const book = BOOKS.filter((book)=> book.id === id)[0];
//     return new Promise ((res)=>{
//         setTimeout(()=>{
//             res(book)
//         }, 500)
//     });
// }


//Solo para cargar DATA

// export const cargarData = async()=>{
//   BOOKS.forEach(async(book)=>{
//     await addDoc(booksRef,book)
//   })
// }

//Actualizar- modificar item

export const updateBook = async(id, item) =>{
  const newBook = await updateDoc( doc(db, 'items',id),item );
  return 
}

//Eliminar

export const deleteBook = async(id)=>{
  return await deleteDoc(doc(db, 'items', id))
}

// Actualizar operaciones en lote 

export const updateManyBooks = async (items)=>{
  const batch = writeBatch(db);
  items.forEach(({id,qty})=>{
    batch.update(doc(db, 'items',id), {
      stock:increment(-qty)
    })
  })

  batch.commit()
}
