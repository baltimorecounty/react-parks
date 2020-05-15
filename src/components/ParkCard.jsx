import { Button, Card } from "@baltimorecounty/dotgov-components";

import Address from "./Address";
import React from "react";

const ParkCard = ({ detailsUrl, image, name, acres, address, city, zip }) => {
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
      <div className="mb--large">
        <h3 style={{ marginBottom: "0" }}>{name}</h3>
        <p>{acres} Acres</p>
        <Address address={address} city={city} zip={zip} />
      </div>
      <div>
        <Button
          as="a"
          href={detailsUrl}
          className="d-inline-block"
          text="Learn More"
        />
      </div>
    </Card>
  );
};

export default ParkCard;
