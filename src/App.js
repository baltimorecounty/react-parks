import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import ParkFilters from "./Filters";
import React from "react";
import { Run } from "./Startup";

const { getValue } = Config;

Run();

function App() {
  return (
    <div className="App">
      <FilterList
        title="Baltimore County Parks and Facilities"
        filters={ParkFilters}
        apiEndpoint={getValue("parksApi")}
        renderItem={({ name, address, amenities = [] }) => (
          <div
            style={{
              border: "1px solid #e0e0e0",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{name}</h2>
            <p>{address}</p>
            {amenities.map((x) => (
              <p>{x.label}</p>
            ))}
          </div>
        )}
      />
    </div>
  );
}

export default App;
