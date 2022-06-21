import React, { useEffect, useState } from 'react';
import LoadinSkeletion from './LoadinSkeletion';
// import Spinner from './Spinner';
import {Link} from "react-router-dom"

const Poducts = ({data,loading}) => {
  
    const [filter, setFilter] = useState([]);

    useEffect(()=>{
        setFilter(data)
    },[data])


   

    const filterData = (cat) => {
  
        const updatData = data.filter((x) => x.category === cat);
     
            setFilter(updatData)
        

    }


    return (
        <div className="container">
            <div className="row my-4 ">
                <div className="col-12">
                    <h1 className='text-center '>Latest Products</h1>
                </div>
            </div>

            <div className="btn d-flex justify-content-center my-4">
                <button onClick={() => setFilter(data)} className='btn btn-outline-dark mx-2'> All</button>
                <button onClick={() => filterData("men's clothing")} className='btn btn-outline-dark mx-2'> Men's clothing</button>
                <button onClick={() => filterData("women's clothing")} className='btn btn-outline-dark mx-2'> Women's clothing</button>
                <button onClick={() => filterData("jewelery")} className='btn btn-outline-dark mx-2'> Jewelery</button>
                <button onClick={() => filterData("electronics")} className='btn btn-outline-dark mx-2'> Electronics</button>
            </div>

            <div className="row">
           { loading && <LoadinSkeletion />}

                
                    

                    {

                    filter.map(ele => {
                        
                        return (
                            <div className="col-md-3 my-2" key={ele.image}>
                                <div className="card" >
                                    <img src={ele.image} className="card-img-top" alt="..." height={250} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{(ele.title).toLowerCase().substr(0, 18)}...</h5>
                                        <Link to={`/products/${ele.id}`} className="btn btn-outline-dark">buy now</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </div>

        </div>
    );
}

export default Poducts;
