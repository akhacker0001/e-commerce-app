import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductLoading = () => {
  return (
    <>
        <div className="container my-4">
     <div className="row">
         <div className="col-md-6">
         <Skeleton  height={400} width={400}/>
             
         </div>
         <div className="col-md-6">
        <Skeleton height={50} />
        <Skeleton height={20} count={4} />
        <Skeleton height={20} />
        <Skeleton height={50} />
        <Skeleton height={20} />
        <Skeleton height={50}  width={100}/>

         </div>
     </div>
 </div>
    </>
  );
}

export default ProductLoading;
