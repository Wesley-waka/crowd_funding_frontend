import React, { useState } from 'react'
import './Statistics.css'

function Statistics() {
    const [data, setData] = useState([])
    useState(()=>{
      fetch(`/custom_methods`)
      .then((r)=>r.json())
      .then((data)=>setData(data))
    }, [])

  return (
    <div className='container'>
        <div className="box">
            <h1>{data.projects_funded}</h1>
            <h4>projects funded</h4>
        </div>
        <div className="box">
            <h1>${data.total_goal_amount}</h1>
            <h4>amount donated</h4>
        </div>
        <div className="box">
            <h1>{data.total_pledges_amount}</h1>
            <h4>pledges</h4>
        </div>
    </div>
  )
}

export default Statistics