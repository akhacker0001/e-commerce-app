import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ProductLoading from './ProductLoading';
import { addToCart } from '../store/slice';

const Product = () => {
    const id = useParams()
    const dispatch = useDispatch()
    
    const [loading, setLoading] = useState(false);
    // setId(useParams())
    const [data, setData] = useState([]);
    useEffect(() => {
        const Products = async () =>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id.id}`);
            setData(await response.json())
            setLoading(false)
        }
        Products();
      
    }, []);

    // const addCart = () => {

    // }
    
  return (
  <>
 { loading ? <ProductLoading /> : <div className="container my-4">
     <div className="row">
         <div className="col-md-6">
         <img src={data.image} alt="" height={"400px"} width="400px"/>
             
         </div>
         <div className="col-md-6">
         <h4 className='text-uppercase text-black-50'> {data.category}</h4>
         <h1 className='display-5'> {data.title}</h1>
         <p className='lead fw-bolder'> Rating {data.rating && data.rating.rate} <i className='fa fa-star'></i></p>
         <h3 className='display-6 fw-bold my-4'> $ {data.price}</h3>
         <p className="lead">{data.description}</p>
         <button onClick={ ()=>dispatch(addToCart({id:data.id}))} className='btn btn-outline-dark'> Add To Cart</button>
        <Link to="/cart" className='btn btn-dark mx-3'> Go To Cart</Link>
         </div>
     </div>
 
 </div>
     }
  </>
  );
}

export default Product;
