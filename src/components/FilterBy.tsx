import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
//import { IProps as FilterProps } from "./AddToList";
import { PartyProps as AddToListProps } from "../App";

interface FilterProps {
  originalData: AddToListProps["displayedPeople"];
  displayedPeople: AddToListProps["displayedPeople"];
  setPeople: React.Dispatch<
    React.SetStateAction<AddToListProps["displayedPeople"]>
  >;
}

const FilterBy: React.FC<FilterProps> = ({
  displayedPeople,
  setPeople,
  originalData,
}): any => {
  const filterPod = (color: "Blue" | "Green") => {
    const chosenPod = originalData.filter((p) => p.pod === color);
    setPeople(chosenPod);
  };

  const filterName = () => {
    const sortedNames = [...originalData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log(sortedNames); // works
    setPeople(sortedNames); // doesn't work
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
        <Dropdown.Item onClick={() => filterName()} className="filter">
          Name A-Z
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default FilterBy;
