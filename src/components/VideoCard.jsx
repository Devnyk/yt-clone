import React from "react";

const VideoCard = ({ thumbnail, title, channel, views, time, channelImage }) => {
  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 cursor-pointer">
    
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

    
      <div className="flex mt-3">
        <img
          src={channelImage}
          alt={channel}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />

      
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{channel}</p>
          <p className="text-xs text-gray-500">
            {views} • {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;