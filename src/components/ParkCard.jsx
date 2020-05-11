import Address from "./Address";
import { Card } from "@baltimorecounty/dotgov-components";
import React from "react";

const ParkCard = ({ image, name, acres, address, city, zip }) => {
  return (
    <Card>
      <div className="mb--small">
        <img
          src={
            image ||
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Bute_Park%2C_Cardiff.jpg"
          }
          alt={`${name}`}
          style={{ width: "100%" }}
        />
      </div>
      <div className="text-left">
        <h3>{name}</h3>
        <p>{acres} Acres</p>
        <Address address={address} city={city} zip={zip} />
      </div>
    </Card>
  );
};

export default ParkCard;
