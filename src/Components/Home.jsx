import React from 'react';
import Image from "../assets/usedpc-lowres-2x1-8767.jpg"

const Home = () => {
  return (
 <>
<div className="card  text-white">
  <img src={Image} className="card-img" alt="..." height={550}/>
  <div className="card-img-overlay container">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>

 </>
  );
}

export default Home;
