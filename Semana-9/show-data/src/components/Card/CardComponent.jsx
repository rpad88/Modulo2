import React from 'react'
import './cardComponent.css'

export default function CardComponent({avatar, neto}) {
  return (
    <div className="card card-body p-0 pe-2 mt-5">
      <div className="row">
        <div className="img-container col p-0">
          <img src={avatar} alt="" className="img-fluid rounded-start" />
        </div>
        {neto}
      </div>
    </div>
  );
}
