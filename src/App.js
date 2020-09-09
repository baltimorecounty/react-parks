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
        listContainerClassName="items row"
        apiEndpoint={getValue("parksApi")}
        includeClearButton={true}
        searchCategory="Parks"
        renderItem={(park) => (
          <div key={park.id} className="col-lg-4 col-md-6 col-sm-6 d-flex">
            <ParkCard {...park} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
