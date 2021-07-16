export interface PartyProps {
  displayedPeople: {
    name: string;
    url: string;
    pod: string;
    notes?: string;
  }[];
  setPeople: React.Dispatch<React.SetStateAction<{
    name: string;
    url: string;
    pod: string;
    notes?: string | undefined;
}[]>>
}

export interface FilterProps {
  originalData: PartyProps["displayedPeople"];
  displayedPeople: PartyProps["displayedPeople"];
  setPeople: React.Dispatch<
    React.SetStateAction<PartyProps["displayedPeople"]>
  >;
}

export interface IProps {
  displayedPeople: PartyProps["displayedPeople"];
  setPeople: React.Dispatch<
    React.SetStateAction<PartyProps["displayedPeople"]>
  >;
}

export interface searchBarProps {
  displayedPeople: PartyProps["displayedPeople"];
  setPeople: React.Dispatch<
    React.SetStateAction<PartyProps["displayedPeople"]>
  >;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
