import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductLoading from './ProductLoading';

const Product = () => {
    const id = useParams()
    
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
         <button className='btn btn-outline-dark'> Add To Cart</button>
<button className='btn btn-dark mx-3'> Go To Cart</button>
         </div>
     </div>
 
 </div>
     }
  </>
  );
}

export default Product;
