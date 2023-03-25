import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Navbar = () => {
  const { currentUser ,logOut } = useContext(AuthContext);

  console.log(currentUser)

  return (
    <div className="flex items-center justify-between z-[100] p-4  absolute w-full ">
      <Link to="/">
        <h1 className="text-red-400  text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/login">
          <button className="text-white">
            {currentUser ? "ログアウト" : "ログイン"}{" "}
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 py-2 px-6 rounded  cursor-pointer text-white  ">
            アカウント作成
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
