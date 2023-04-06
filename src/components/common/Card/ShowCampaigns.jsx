import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import CrowdCard from '../CrowdCard/CrowdCard';
import CampaignItem from './CampaignItem';
import './ShowCampaigns.css'

function ShowCampaigns({campaigns, filterCampaign, setCampaigns, user}) {

    const [itemsPerPage, setItemsPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const pageButtons = []


    const numPages = Math.ceil(campaigns.length/ itemsPerPage)

    function displayItems() {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        const itemsToDisplay = campaigns.slice(startIndex, endIndex)
        return (
            <div className='cards-container' >
                {itemsToDisplay.map(campaign=><CrowdCard campaign={campaign} key={campaign.id} user={user}/>)}
            </div>)
    }
    function goToPage(pageNumber) {
        setCurrentPage(pageNumber)
    }

    for (let i=1; i <=numPages; i++) {
        pageButtons.push(
            <button key={i} onClick={()=>goToPage(i)}>
                {i}
            </button>
        )
    }

  return (
    <>
    <h1 style={{fontFamily: "Fredoka, san-serif"}}> Categories</h1>
        <div style={{fontFamily: "Fredoka, san-serif"}} className="buttons d-flex justify-content-center mb-2 pb-3">
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("All")}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Global Warming/Environment")}>Environment</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Animals")}>Animals</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Education")}>Education</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Health")}>Health</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Musicians/Artists")}>Musicians/Artists</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterCampaign("Small Business")}>Small Business</button>        
        </div>
        {displayItems()}
        <div className='pagination-div'>
            <p>page numbers</p>
        {pageButtons}
        </div>
    </>
  )
}

export default ShowCampaigns