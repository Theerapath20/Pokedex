import "../global.css";
import trash from "../assets/trash.svg";
import Summary from "../components/Summary";

function Pocket({ cartItem, data, setCartItem }) {
  const handleRemoveItem = (id) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.pokemon.id !== id)
    );
  };
  return (
    <>
      <div className="md:flex md:justify-center m-20 ">
        <div className="md:w-3/4 h-auto  rounded-lg  shadow-xl ">
          <div>
            <p className="text-top m-5">Pocket list ({cartItem.length})</p>
          </div>
          <div className="flex justify-between text-product-quantity my-5 mx-5 ">
            <div className=" md:w-1/2">Product name</div>
            <div className=" w-3/4 flex justify-center">Quantity</div>
          </div>
          {cartItem.length <= 0 ? (
            <div className="flex justify-center items-center h-full">
              <p>cart is empty</p>
            </div>
          ) : (
            <div>
              {cartItem.map((val, i) => {
                const selectedPokemon = data.find(
                  (dataVal) => dataVal.id === val.pokemon.id
                );
                return (
                  <div key={i} className="flex justify-between border-t-2">
                    <div className=" flex  ">
                      <div className="image-container">
                        {selectedPokemon && (
                          <img
                            className="responsive-image "
                            width={150}
                            src={
                              selectedPokemon.sprites.other.home.front_default
                            }
                            alt={selectedPokemon.name}
                          />
                        )}
                      </div>
                      <div className=" w-full  ">
                        <div className=" text-name flex flex-col md:mt-5  mx-5 ">
                          <div>{selectedPokemon?.name}</div>
                          <div className="flex gap-3">
                            {selectedPokemon.types.map((val, i) => (
                              <div className="text-types" key={i}>
                                <p>{val.type.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex w-1/2 justify-center ">
                      <div className=" flex  w-1/2 md:w-3/4 justify-center pt-5 md:pt-8">
                        <p>{val.quantity}</p>
                      </div>
                      <div className="flex justify-center  w-1/4">
                        <button
                          onClick={() => handleRemoveItem(val.pokemon.id)}
                        >
                          <img
                            className="border"
                            width={25}
                            src={trash}
                            alt="Delete"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Summary cartItem={cartItem} />
      </div>
    </>
  );
}

export default Pocket;
