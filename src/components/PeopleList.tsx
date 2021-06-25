import { PartyProps as PeopleListProps } from "../App";

const PeopleList: React.FC<PeopleListProps> = ({
  displayedPeople,
}): JSX.Element => {
  return (
    <>
      <ul className="mainUL">
        {displayedPeople.map((person) => {
          return (
            <>
              <li
                className="List"
                style={{ listStyle: "none" }}
                key={person.name}
              >
                <div className="List-header">
                  <img
                    className="List-img"
                    src={person.url}
                    alt={person.name}
                  />
                  <h2>{person.name}</h2>
                </div>
                <p>{person.pod} Pod</p>
                <p className="List-note">{person.notes}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default PeopleList;
