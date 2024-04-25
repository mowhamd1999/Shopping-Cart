import React, { useContext } from "react";
// context


import { shorten } from "../../helper/function";

import { BsTrash3 } from "react-icons/bs";

import { useSelector , useDispatch } from "react-redux";
import { decrease, increase, remove } from "../../Redux/Cart/cartAction";
const Shopelement = (props) => {
  const { image, title, quantity, price } = props.data;

  const dispatch = useDispatch();
  return (
    <div className="lg:flex justify-between min-w-[300px] md:table md:text-center items-center mb-7 px-20 py-5 border-gray-200 shadow-md border rounded-md">
      <img className="w-[150px] h-[200px] min-w-[100px] min-h-[150px]" src={image} alt={title} />
      <div className="text-center">
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <span>{quantity}</span>
      <div className="flex items-center">
        {quantity > 1 ? (
          <button
            className="btn px-3"
            onClick={() => dispatch(decrease(props.data))}
          >
            -
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => dispatch(remove(props.data))}
          >
            <BsTrash3 className="my-1" />
          </button>
        )}
        <button
          className="btn ml-2"
          onClick={() => dispatch(increase(props.data))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Shopelement;
