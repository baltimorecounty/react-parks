import React from "react";

const Address = ({ address: street, city, zip }) => {
  const cityStateZip = `${city}, Maryland, ${zip}`;
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${street} ${cityStateZip}`}
    >
      {street}
      <br />
      {cityStateZip}
    </a>
  );
};

export default Address;
