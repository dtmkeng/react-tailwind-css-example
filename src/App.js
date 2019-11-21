import React, { useState } from "react";
import "./App.css";
function Tags({ tagname, id }) {
  return (
    <div className="inline-block mt-3" id="tag-name" key={id}>
      <span className="bg-gray-300 pr-2 mr-1 px-1 py-2 pt-1 border border-gray-400 rounded-full w-auto">
        <span className="hover:border-gray-600 text-justify pb-1 mr-1 px-2 ml mb-4 border border-red-300 rounded-full text-sm text-red-500">
          x
        </span>
        <span className="text-sm">{tagname}</span>
      </span>
    </div>
  );
}
function App() {
  // const tag = ["name"];
  const [tagname, setTagName] = useState("");
  const [tags, setTags] = useState([]);
  // function handleInput() {}
  return (
    <div>
      <div className="border border-gray-400 mt-2 ml-2 px-6 py-4 w-1/5 rounded-lg focus:shadow-outline">
        <form
          className="ml-2 mt-3"
          onSubmit={e => {
            e.preventDefault();
            setTags([...tags, tagname]);
            setTagName("");
          }}
        >
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2 px-1"
          >
            Name
          </label>
          <input
            value={tagname}
            onChange={e => {
              setTagName(e.target.value);
            }}
            placeholder="Enter name"
            id="name"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-50 appearance-none leading-normal"
          />
          <span className="text-xs text-red-500"></span>
          <div className="flex justify-center">
            <button className="bg-blue-500 border-gray-500 rounded-lg px-4 py-2 mt-3 text-gray-100 font-sans">
              Submit
            </button>
          </div>
        </form>
        {tags.map((data, id) => {
          return <Tags tagname={data} id={id} key={id} />;
        })}
      </div>
    </div>
  );
}

export default App;
