import { useState } from "react";
import { useChars } from "../context/CharProvider";
import Card from "./Card";
import CharacterDemo from "./CharacterDemo";

const CharacterGallery = () => {
  const { characters, error, loading, pageNum, setPageNum, totalPages } =
    useChars();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handlePrevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNum < totalPages) {
      setPageNum(pageNum + 1);
    }
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseDemo = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="container mx-auto p-6 bg-cyan-950 border border-slate-700 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-slate-100 mb-6 text-center">
        Rick and Morty Characters
      </h2>

      {error ? (
        <div className="p-4 bg-red-500 text-white rounded-lg text-center">
          <p>{error}</p>
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="animate-pulse text-3xl font-semibold text-slate-300">
            Loading...
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <div
                className="flex justify-center cursor-pointer"
                key={character.id}
                onClick={() => handleCardClick(character)}
              >
                <Card character={character} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={pageNum <= 1}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-50 hover:bg-slate-700 transition-colors"
            >
              Previous Page
            </button>
            <span className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg">
              Page {pageNum} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={pageNum >= totalPages}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-50 hover:bg-slate-700 transition-colors"
            >
              Next Page
            </button>
          </div>

          {/* CharacterDemo Modal */}
          {selectedCharacter && (
            <CharacterDemo
              character={selectedCharacter}
              onClose={handleCloseDemo}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CharacterGallery;
