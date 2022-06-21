import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = ({ data }) => {
  const [filterData, setFilterData] = useState([])
  const { id } = useSelector((e) => e.rootReducers.cartSlicer)
  useEffect(() => {
    const filteredResults = data.filter(e => {
      return id.includes(e.id)
    });
    setFilterData(filteredResults)

  }, [id])
  return (
    <div className='container' >
      <div className='row'>
        
          {

            filterData.map(ele => {


              return (
                <div className="col-md-3 my-2" key={ele.image}>
                  <div className="card" >
                    <img src={ele.image} className="card-img-top" alt="..." height={250} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{(ele.title).toLowerCase().substr(0, 18)}...</h5>

                    </div>
                  </div>
                </div>
              )
            })
          }

       
      </div>
    </div>
  )
}

export default Cart
