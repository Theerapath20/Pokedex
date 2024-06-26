import "../global.css";

function Summary({ cartItem }) {
  //   console.log(cartItem);

  const getTotalQuantity = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = getTotalQuantity(cartItem);
  return (
    <>
      <div className=" mx-6 mb-12 sm:mt-5 md:mt-0 md:w-1/4  border rounded-xl ">
        <div className="text-top bg-yellow-100 p-3">Order Summary</div>
        <div className="flex flex-wrap justify-between mx-5 my-3">
          <div>
            <p>Subtotal</p>
          </div>
          <div className="text-product-quantity">
            <p>{cartItem.length} Product</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mx-5 my-3">
          <div>
            <p>Quantity</p>
          </div>
          <div>
            {cartItem.length === 0 ? (
              <p>0 quantity</p>
            ) : (
              <div className="text-product-quantity ">
                <p>{totalQuantity} quantity</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-24 mb-5">
          <button className="btn-click m-2 px-4 py-3   ">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
