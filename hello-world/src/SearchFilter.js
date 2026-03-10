import { useState } from "react";

const SearchFilter = () => {
  const words = ["apple", "banana", "grapes", "orange"];
  const [searchValue, setValue] = useState("");
  const [arrayValue, setArray] = useState(words);

  const filterValue = (value) => {
    const searchedWord = words.filter((val) =>
      val.toLowerCase().includes(value.toLowerCase()),
    );
    return setArray(searchedWord);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setValue(e.target.value);
          filterValue(e.target.value);
        }}
      />
      <ul>
        {
          arrayValue.map((val) => (
            <li key={val}>{val}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default SearchFilter;
