import React from "react";
import { shorten, Quantity, IsInCart } from "../../helper/function";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, clear, checkout, increase, decrease } from './../../Redux/Cart/cartAction'
const Products = ({ productData }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  const product = Quantity(state , productData.id)
  return (
    <div className="rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 hover:shadow-xl transition-all duration-200 p-[20px]">
      <img
        src={productData.image}
        alt={productData.title}
        className="w-[200px] h-[250px]"
      />
      <h2 className="text-xl pt-5 font-extrabold">
        {shorten(productData.title)}
      </h2>
      <p className="py-5 text-sm">{productData.price} $</p>
      <div className="flex justify-between py-1 px-0.1 items-center">
        <Link
          className="font-bold hover:text-blue-700 transition-all duration-200"
          to={`/products/${productData.id}`}
        >
          Detail
        </Link>
        <div className="flex items-center">
          {Quantity(state, productData.id) === 1 && (
            <button
              className="btn"
              onClick={() => dispatch(remove(productData))}
            >
              <BsTrash3 className="my-1" />
            </button>
          )}
          {Quantity(state, productData.id) > 1 && (
            <button
              className="btn px-3"
              onClick={() =>
                dispatch(decrease(productData))
              }
            >
              -
            </button>
          )}
          {IsInCart(state, productData.id) ? (
            <div>
              <span className="px-4 items-center text-center ml-1 ">
                {product}
              </span>
              <button
                className="btn ml-2"
                onClick={() =>
                  dispatch(increase(productData))
                }
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                dispatch(add(productData))
              }
              className="btn"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
