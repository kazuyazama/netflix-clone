import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { db } from "../firebase";
import { useSlide } from "../hooks/useSlide";

const SavedShows = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  const { scrollRef, slideLeft, slideRight } = useSlide();

  const { currentUser } = useContext(AuthContext);

  const moviewRef = doc(db, "users", `${currentUser?.email}`);

  useEffect(() => {
    onSnapshot(moviewRef, (doc) => {
      const savedShows = doc.data()?.savedShows;
      if (savedShows?.length) {
        setSavedMovies(savedShows);
      } else {
        setSavedMovies("");
      }
    });
  }, [currentUser?.email]);

  const deleteShow = async (deleteId) => {
    const deleteItem = savedMovies.filter((movies) => movies.id !== deleteId);
    try {
      await updateDoc(moviewRef, {
        savedShows: deleteItem,
      });
    } catch (error) {
      alert("削除に失敗しました");
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slideLeft(500)}
          className="bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          ref={scrollRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {savedMovies ? (
            savedMovies.map((savedShow) => (
              <div
                key={savedShow.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${savedShow?.img}`}
                  alt={savedShow?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {savedShow?.title}
                  </p>
                  <p
                    onClick={() => deleteShow(savedShow.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">保存された映画が存在しません。</p>
          )}
        </div>
        <MdChevronRight
          onClick={() => slideRight(500)}
          className="bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
