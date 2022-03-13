import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadinSkeletion = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
                <div className="col-md-3"><Skeleton height={330}/> </div>
            </div>
        </div>
    </>
  );
}

export default LoadinSkeletion;
