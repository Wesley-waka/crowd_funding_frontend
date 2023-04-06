import React, { useState } from "react";
import "./CrowdCard.css";
import animationData from "./58070-fallen-tree-and-wind.json";
import { useNavigate } from "react-router-dom";

function CrowdCard({ campaign, user }) {
  const navigate = useNavigate();

  const handleClick = (campaign, user) => {
    user === false ? navigate("/login") : navigate(`/campaigns/${campaign.id}`);
  };

  return (
    <div className="card">
      <div className="illustration">
        <img src={campaign.image_url} alt="Campaign Image" />
      </div>
      <h3>{campaign.title}</h3>
      <div
        className="lottie-player"
        options={{
          animationData,
          background: "white",
          loop: true,
          autoplay: true,
        }}
        width={100}
        height={100}
      />
      <p>{campaign.description}</p>

      <button
        onClick={() => {
          handleClick(campaign, user);
        }}
      >
        View more
      </button>
    </div>
  );
}

export default CrowdCard;
