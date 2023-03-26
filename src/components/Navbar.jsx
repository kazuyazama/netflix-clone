import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Navbar = () => {
  const { currentUser, logOut } = useContext(AuthContext);

  console.log(currentUser);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between z-[100] p-4  absolute w-full ">
      <Link to="/">
        <h1 className="text-red-400  text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {currentUser?.email ? (
        <div className="flex items-center">
          <Link to="/account">
            <button className="text-white pr-2 lg:pr-4">アカウント</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 lg:px-6 py-2 rounded cursor-pointer text-white"
          >
            ログアウト
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-2 lg:pr-4">ログイン</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-2 lg:px-6 py-2 rounded cursor-pointer text-white">
              アカウント作成
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
