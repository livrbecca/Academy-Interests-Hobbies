import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
//import { IProps as FilterProps } from "./AddToList";
//import { PartyProps as AddToListProps } from "../utils/interfaces";
import { FilterProps } from "../utils/interfaces";

const FilterBy: React.FC<FilterProps> = ({
  displayedPeople,
  setPeople,
  originalData,
}): any => {
  const filterPod = (color: "Blue" | "Green") => {
    const chosenPod = originalData.filter((p) => p.pod === color);
    setPeople(chosenPod);
  };

  // sortName
  const sortNameA_Z = () => {
    const sortedNames = [...originalData].sort((a, b) =>
      a.name.localeCompare(b.name)
    ); // not mutating
    setPeople(sortedNames);
  };

  const displayAll = () => {
    setPeople(originalData);
  };

  return (
    <>
      <DropdownButton
        className="mainButton"
        as={ButtonGroup}
        key={"down"}
        id={`dropdown-button-drop-${"down"}`}
        drop={"down"}
        title="Filter Scholars"
      >
        <Dropdown.Item onClick={() => displayAll()} className="filter">
          All
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterPod("Green")} className="filter">
          Green Pod
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterPod("Blue")} className="filter">
          Blue Pod
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sortNameA_Z()} className="filter">
          Name A-Z
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default FilterBy;
