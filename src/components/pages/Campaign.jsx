import React, { useState,useEffect } from 'react'
import ShowCampaigns from '../common/Card/ShowCampaigns'
import './Campaign.css'

function Campaign({search, user}) {
    const [campaigns, setCampaigns] = useState([])
    const [campaignsToDisplay,setCampaignsToDisplay]= useState ([])

    useEffect(() => {
        fetch("/campaigns")
        .then((response) =>response.json())
        .then((data)=>{
            setCampaigns(data)
            setCampaignsToDisplay(data)
        })
    },[])
   
      function filterCampaign(category){
        const updatedList=campaigns.filter((x) =>{
            if (category==="All"){
                return true
            }else{
                return x.category === category
            }
        });
        setCampaignsToDisplay(updatedList)
       }

       const filteredCampaigns=campaignsToDisplay.filter((campaign)=>{
        if (search===""){
            return true
        }else{
            return campaign.category.toLowerCase().includes(search.toLowerCase())
        }
        
       }) 
      
    return(
        <div>
            <div className="container my-3 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowCampaigns 
                    campaigns={filteredCampaigns} 
                    filterCampaign={filterCampaign} 
                    setCampaigns = {setCampaigns}
                    user={user}
                    />
                </div>
            </div>
        
        </div>
    )
}
export default Campaign
