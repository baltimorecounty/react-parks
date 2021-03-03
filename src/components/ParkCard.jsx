import { Button, Card } from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";
import Address from "./Address";
import React from "react";

const ParkCard = ({ detailsUrl, image, name, acres, address, city, zip }) => {
  return (
    <Card>
      <div className="mb--small">
        <img
          src={
            image ||
            "//beta.baltimorecountymd.gov/sebin/n/f/parks-placeholder-forest.jpg"
          }
          alt={`${name}`}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </div>
      <div className="mb--large">
        <h3 style={{ marginBottom: "0" }}>{ReactHtmlParser(name)}</h3>
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
