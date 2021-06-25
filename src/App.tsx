import Header from "./components/Header";
import PeopleList from "./components/PeopleList";
import AddToList from "./components/AddToList";
import FilterBy from "./components/FilterBy";
import { useState } from "react";
import data from "./data";
import "./App.css";

export interface PartyProps {
  displayedPeople: {
    name: string;
    url: string;
    pod: string;
    notes?: string;
  }[];
}

function App() {
  const [displayedPeople, setPeople] =
    useState<PartyProps["displayedPeople"]>(data);
  //const greenPodScholars = displayedPeople.filter((p) => p.pod === "Green"); // console log works
  // const bluePodScholars = displayedPeople.filter((p) => p.pod === "Blue");

  return (
    <div className="App">
      <Header />
      <FilterBy
        displayedPeople={displayedPeople}
        setPeople={setPeople}
        originalData={data}
      />
      <div className="flex-container">
        <div className="flex-child displayedPeople">
          <PeopleList displayedPeople={displayedPeople} />
        </div>
        <div className="flex-child add">
          <AddToList displayedPeople={displayedPeople} setPeople={setPeople} />
        </div>
      </div>
    </div>
  );
}

export default App;
