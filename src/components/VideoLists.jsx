import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const VideoLists = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((video) => (
        <Link
          key={video.id}
          to={`/video/${video.id}`}
          className="bg-white rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-3 flex gap-2">
            <img
              src={video.channelLogo}
              alt={video.channel}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-sm line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs text-gray-500">{video.channel}</p>
              <p className="text-xs text-gray-500">{video.views}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoLists;