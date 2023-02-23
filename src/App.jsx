import React from "react";
import ElementData from "./component/elementData";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = React.useState("");
  const [elementData, setElementData] = React.useState({});
  console.log(searchInput);
  function search(e) {
    //fetchs trending shows data
    fetch(
      `https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${searchInput}`
    )
      .then((res) => res.json())
      .then((data) => setElementData(data));
    e.preventDefault();
  }
  console.log(elementData);
  function handleChange(event) {
    setSearchInput(event.target.value);
  }


  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          placeholder="enter element"
        />
        <button onClick={search}>search</button>
      </form>
      <div>
        <p>{elementData.atomicNumber}</p>
        <p>{elementData.electronicConfiguration}</p>
        <p>{elementData.oxidationStates ? `oxidation states: ${elementData.oxidationStates}` : ''}</p>
        <p>{elementData.standardState}</p>
        <p>{elementData.groupBlock ? `group block: ${elementData.groupBlock}` : ''}</p>
        <p>{elementData.electronAffinity ? `electron affinity: ${elementData.electronAffinity}` : ''}</p>
        <p>{elementData.meltingPoint ? `melting point: ${elementData.meltingPoint}` : ''}</p>
        <p>{elementData.boilingPoint ? `melting point: ${elementData.boilingPoint}` : ''}</p>
        <p>{elementData.electronegativity ? `electronegativity: ${elementData.electronegativity}` : ''}</p>
        <p>{elementData.atomicMass ? `atomic mass: ${elementData.atomicMass}` : ''}</p>
      </div>
    </div>
  );
}

export default App;
