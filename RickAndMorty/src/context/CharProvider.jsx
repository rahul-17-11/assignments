import React, { createContext, useContext, useState } from "react";
import useCharacterFetch from "../hooks/useCharacterFetch";

const CharContext = createContext();

export const useChars = () => useContext(CharContext);

const CharProvider = ({ children }) => {
  const [localPage, setLocalPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Calculate which API page we need based on our local page
  const apiPage = Math.ceil((localPage * ITEMS_PER_PAGE) / 20);

  const {
    characters: allCharacters,
    error,
    loading,
  } = useCharacterFetch(
    `https://rickandmortyapi.com/api/character/?page=${apiPage}`
  );

  const getVisibleCharacters = () => {
    if (!allCharacters.length) return [];

    const localPageOffset = ((localPage - 1) * ITEMS_PER_PAGE) % 20;

    return allCharacters.slice(
      localPageOffset,
      localPageOffset + ITEMS_PER_PAGE
    );
  };

  const visibleCharacters = getVisibleCharacters();

  return (
    <CharContext.Provider
      value={{
        characters: visibleCharacters,
        error,
        loading,
        pageNum: localPage,
        setPageNum: setLocalPage,
        totalPages: Math.ceil(500 / ITEMS_PER_PAGE), // API has approximately 500 characters total
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
