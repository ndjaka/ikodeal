import React from 'react'

export default function Title({title}) {
    return (
        <div>
            <div className="row">
              <div className="col-10 mx-auto my-2 text-center text-title">
                 <h3 className="text-capitalize font-weight-bold">
                     {title}
                     </h3> 
              </div>
            </div>
        </div>
    )
}
