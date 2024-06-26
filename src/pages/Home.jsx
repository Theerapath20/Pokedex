
import '../global.css'
import column from '../assets/element-3.svg'
import list from '../assets/row-vertical.svg'
import {  useState } from 'react'
import { Link } from "react-router-dom";




function Home({ data, searchTerm }) {
  const [selected, setSelected] = useState(false);

  const bigFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const buttonStyle = (isActive) => ({
    padding: "5px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: isActive ? "#FFCB05" : "white",
    borderRadius: "7px 0px 0px 7px",
  });

  

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
 
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className=" flex justify-between w-5/6 ">
          <div className="text-top ">Products ({filteredData.length})</div>
          <div className="flex gap-1 ">
            <button
              style={buttonStyle(selected === false)}
              onClick={() => setSelected(false)}
            >
              <img src={column} alt="" />
            </button>
            <button
              style={buttonStyle(selected === true)}
              onClick={() => setSelected(true)}
            >
              <img src={list} alt="" />
            </button>
          </div>
        </div>
      </div>
      {selected === false ? (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5 ">
            {filteredData.length > 0 ? (
              filteredData.map((val, i) => (
                <div className=" m-5  rounded-lg shadow-xl " key={i}>
                  <Link to={`/pokemon/${i + 1}`}>
                    <img
                      className="mb-3  mx-5"
                      width={250}
                      src={val.sprites.other.home.front_default}
                      alt={val.name}
                    />
                  </Link>
                  <h2 className=" text-name   ml-3">
                    {bigFirstLetter(val.name)}
                  </h2>
                  <div className="flex gap-2 mx-3 my-1 ">
                    {val.types.map((val, i) => (
                      <div key={i}>
                        <div className="text-types">
                          {bigFirstLetter(val.type.name)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="m-2 p-1 btn-detail  ">
                    <Link to={`/pokemon/${i + 1}`}>
                      <button className=" ">Detail</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-6 my-5 ">
          {filteredData.map((val, i) => (
            <div className="sm:mx-24 " key={i}>
              <div className="flex">
                <Link to={`/pokemon/${i + 1}`}>
                  <img
                    className="p-2"
                    width={90}
                    src={val.sprites.other.home.front_default}
                    alt={val.name}
                  />
                </Link>
                <div className=" mt-3  ">
                  <Link to={`/pokemon/${i + 1}`}>
                    <div className="mx-4 text-name">
                      {bigFirstLetter(val.name)}
                    </div>
                  </Link>
                  <div className="flex gap-2 mx-3 my-1 ">
                    {val.types.map((val, i) => (
                      <div key={i}>
                        <div className="text-types">
                          {bigFirstLetter(val.type.name)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mx-3 my-1 text-abilities-stats ">
                    <p className=""> Abilities:</p>
                    {val.abilities.map((val, i) => (
                      <div key={i}>
                        <div className="  ">
                          {bigFirstLetter(val.ability.name)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home