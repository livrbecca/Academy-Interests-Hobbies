import { useState } from "react";
import { PartyProps as AddToListProps } from "../App";

export interface IProps {
  displayedPeople: AddToListProps["displayedPeople"];
  setPeople: React.Dispatch<
    React.SetStateAction<AddToListProps["displayedPeople"]>
  >;
}

const AddToList: React.FC<IProps> = ({ displayedPeople, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    pod: "",
    notes: "",
  });

  // changing the 'name' to the 'value', overriding the name attribute
  // return void, which is nothing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.url || !input.pod) {
      return;
    }
    setPeople([
      ...displayedPeople,
      {
        name: input.name,
        url: input.url,
        pod: input.pod,
        notes: input.notes,
      },
    ]);
    setInput({ name: "", url: "", pod: "", notes: "" });
  };

  return (
    <div className="AddToList">
      <h5>Add your own:</h5>
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="image URL"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <input
        type="text"
        placeholder="pod"
        className="AddToList-input"
        value={input.pod}
        onChange={handleChange}
        name="pod"
      />
      <textarea
        placeholder="notes (optional)"
        className="AddToList-input"
        value={input.notes}
        onChange={handleChange}
        name="notes"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
