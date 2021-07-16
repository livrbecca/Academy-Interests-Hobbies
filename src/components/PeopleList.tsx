import { PartyProps as PeopleListProps } from "../utils/interfaces";
import { useState } from "react";
import SearchBar from "./SearchBar";

const PeopleList: React.FC<PeopleListProps> = ({
  displayedPeople,
  setPeople,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchBar = displayedPeople.filter(
    (person) =>
      person.name.toLocaleLowerCase().includes(searchTerm) ||
      person.notes?.toLocaleLowerCase().includes(searchTerm)
  );

  const renderHTMLMap = (): JSX.Element[] => {
    return searchBar.map((person) => {
      return (
        <>
          <li className="List" style={{ listStyle: "none" }} key={person.name}>
            <div className="List-header">
              <img className="List-img" src={person.url} alt={person.name} />
              <h2>{person.name}</h2>
            </div>
            <p>{person.pod} Pod</p>
            <p className="List-note">{person.notes}</p>
          </li>
        </>
      );
    });
  };
  return (
    <>
      <SearchBar
        setPeople={setPeople}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        displayedPeople={displayedPeople}
      />
      <ul className="mainUL">{renderHTMLMap()}</ul>
    </>
  );
};

export default PeopleList;
