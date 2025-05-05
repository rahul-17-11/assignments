import React from "react";

const CharacterDemo = ({ character, onClose }) => {
  if (!character) return null;

  // Status badge color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Get episode count
  const episodeCount = character.episode?.length || 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cyan-800">
        {/* Header with close button */}
        <div className="sticky top-0 bg-slate-900 px-6 py-4 flex justify-between items-center border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white">{character.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Character image and basic info */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/3">
              <img
                src={character.image}
                alt={character.name}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center ${getStatusColor(
                    character.status
                  )}`}
                >
                  <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                  {character.status}
                </span>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              {/* Basic Info */}
              <div className="bg-slate-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  Character Info
                </h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-slate-200">
                  <div>
                    <p className="text-slate-400 text-sm">Species</p>
                    <p className="font-medium">{character.species}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Gender</p>
                    <p className="font-medium">{character.gender}</p>
                  </div>
                  {character.type && (
                    <div className="col-span-2">
                      <p className="text-slate-400 text-sm">Type</p>
                      <p className="font-medium">{character.type}</p>
                    </div>
                  )}
                  <div className="col-span-2">
                    <p className="text-slate-400 text-sm">Origin</p>
                    <p className="font-medium">{character.origin.name}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="font-medium">{character.location.name}</p>
                  </div>
                </div>
              </div>

              {/* Episodes */}
              <div className="bg-slate-900 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    Episodes
                  </h3>
                  <span className="bg-cyan-900 px-3 py-1 rounded-full text-white text-sm font-medium">
                    Total: {episodeCount}
                  </span>
                </div>
                <div className="max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                  <ul className="space-y-1">
                    {character.episode.slice(0, 10).map((ep, index) => {
                      const episodeNumber = ep.split("/").pop();
                      return (
                        <li
                          key={index}
                          className="text-slate-300 hover:text-white transition-colors"
                        >
                          <span className="inline-block w-8 text-cyan-500">
                            #{episodeNumber}
                          </span>
                          Episode {episodeNumber}
                        </li>
                      );
                    })}
                    {episodeCount > 10 && (
                      <li className="text-slate-400 italic pt-1">
                        + {episodeCount - 10} more episodes...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-slate-900 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Additional Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
              <div>
                <p className="text-slate-400 text-sm">Character ID</p>
                <p className="font-medium">{character.id}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Created</p>
                <p className="font-medium">
                  {new Date(character.created).toLocaleString()}
                </p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-slate-400 text-sm">API URL</p>
                <p className="font-medium text-cyan-500 break-all hover:underline cursor-pointer">
                  {character.url}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-cyan-800 hover:bg-cyan-700 text-white font-medium rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDemo;
