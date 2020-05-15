import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import ParkCard from "./components/ParkCard";
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
        renderItem={(park) => (
          <div key={park.id} className="col-4">
            <ParkCard {...park} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
