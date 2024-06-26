import arrow_left from '../assets/arrow-left.svg'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import cart from '../assets/bag-2.svg'
import '../global.css'

function Detail({ addToCart }) {
  const { id } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchdata();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error loading data.</p>;
  }

  const bigFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if(count === 0){
       return 0
    }else 
    {addToCart(data, count);

    }
    
    
  };

  return (
    // Back btn
    <>
      <div className="flex justify-center m-1  p-2 w-1/3">
        <img className="m-1" src={arrow_left} alt="" />
        <Link to={"/"}>
          <p className=" text-top">Back</p>
        </Link>
      </div>

      {/* detail */}
      <div className="flex justify-center m-5">
        <div className="  lg:w-3/4 sm:flex sm:flex-col md:flex md:flex-row   bg-white shadow-xl  ">
          <img
            className=" mb-5 sm:w-full md:w-1/4 my-5  "
            src={data.sprites.other.home.front_default}
            alt={data.name}
          />

          <div className="flex flex-col  w-full pt-2  gap-4 ">
            <p className="mx-5 text-name">
              {bigFirstLetter(data.species.name)}
            </p>
            <div className=" gap-2  flex flex-row  mx-4 ">
              {data.types.map((val, i) => (
                <div className="text-types" key={i}>
                  {bigFirstLetter(val.type.name)}
                </div>
              ))}
            </div>
            <div className="gap-2  flex text-abilities-stats  ">
              <p className="mx-5">Stats:</p>
              {data.stats.map((val, i) => (
                <div key={i}> {bigFirstLetter(val.stat.name)},</div>
              ))}
            </div>
            <div className="flex gap-2 text-abilities-stats ">
              <p className="mx-5">Abilities:</p>
              {data.abilities.map((val, i) => (
                <div key={i}>{bigFirstLetter(val.ability.name)},</div>
              ))}
            </div>
            <div className="flex">
              <p className="mx-5">Quantitiy:</p>
              <div className="flex border border-black rounded-lg px-3">
                <button className="px-3" onClick={handlePlus}>
                  +
                </button>
                <p className="px-4  bg-slate-100 p-1">{count}</p>
                <button className="px-3" onClick={handleMinus}>
                  -
                </button>
              </div>
            </div>
            <div className="mx-5 ">
              <button
                onClick={handleAddToCart}
                className="btn-click flex px-5 p-3 sm:my-5 md:my-0 sm:w-1/2 md:w-1/3 justify-center "
              >
                <img className="text-white mx-2" src={cart} alt="" />
                <p>Add to pocket</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* detail */}
    </>
  );
}



export default Detail