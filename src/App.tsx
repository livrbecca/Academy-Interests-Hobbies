import Header from "./components/Header";
import PeopleList from "./components/PeopleList";
import AddToList from "./components/AddToList";
import FilterBy from "./components/FilterBy";
import { useState } from "react";
import data from "./data";
import "./App.css";
import { PartyProps } from "./utils/interfaces";

function App() {
  /* HERE */
  const [displayedPeople, setPeople] =
    useState<PartyProps["displayedPeople"]>(data);

  return (
    <div className="App">
      <Header />
      <FilterBy
        displayedPeople={displayedPeople}
        setPeople={setPeople}
        originalData={data}
      />
      <div className="flex-container">
        {/* HERE */}
        <div className="flex-child displayedPeople">
          <PeopleList displayedPeople={displayedPeople} setPeople={setPeople} />
        </div>

        <div className="flex-child add">
          <AddToList displayedPeople={displayedPeople} setPeople={setPeople} />
        </div>
      </div>
    </div>
  );
}

export default App;
