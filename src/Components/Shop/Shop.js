import React from "react";

import { useSelector , useDispatch } from "react-redux";
// components
import Shopelement from './Shopelement'
import { clear , checkout } from "../../Redux/Cart/cartAction";
const Shop = () => {
  const state = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  return (
    <div className="pt-20">
      <div className="py-20 mx-40 lg:flex justify-around md:block min-w-[200px]">
        <div className=" grow mr-8">
          {state.itemSelected.map((item) => (
            <Shopelement key={item.id} data={item} />
          ))}
        </div>
        {state.itemSelected.length > 0 && (
          <div className="w-[20%] bg-gray-100 rounded-md h-[200px] shadow-lg min-w-[300px]">
            <div className="py-5 px-5">
              <h4>Total Item : {state.itemCounter} </h4>
              <h4 className="my-10">Total Price: {state.total} $</h4>
              <div className="flex justify-between ">
                <button onClick={() => dispatch(clear())}>
                  Clear
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch(checkout())}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
