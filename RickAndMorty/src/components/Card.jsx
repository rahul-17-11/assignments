import React from "react";

const Card = ({ character }) => {
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

  const episodeCount = character.episode?.length || 0;

  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-lg overflow-hidden shadow-xl border border-slate-700 transition-all hover:shadow-cyan-900/30 hover:shadow-lg">
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold text-white flex items-center ${getStatusColor(
              character.status
            )}`}
          >
            <span className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse"></span>
            {character.status}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2 truncate">
          {character.name}
        </h3>

        <div className="space-y-2 text-slate-300">
          <p className="flex justify-between">
            <span className="text-slate-400">Species:</span>
            <span className="font-medium">{character.species}</span>
          </p>

          <p className="flex justify-between">
            <span className="text-slate-400">Gender:</span>
            <span className="font-medium">{character.gender}</span>
          </p>

          <p className="flex justify-between">
            <span className="text-slate-400">Origin:</span>
            <span className="font-medium">{character.origin.name}</span>
          </p>

          <p className="flex justify-between">
            <span className="text-slate-400">Location:</span>
            <span className="font-medium truncate max-w-[160px]">
              {character.location.name}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="text-slate-400">Episodes:</span>
            <span className="font-medium">{episodeCount}</span>
          </p>

          {character.type && (
            <p className="flex justify-between">
              <span className="text-slate-400">Type:</span>
              <span className="font-medium">{character.type}</span>
            </p>
          )}
        </div>

        <button className="mt-4 w-full py-2 bg-cyan-800 hover:bg-cyan-700 text-white font-medium rounded transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
