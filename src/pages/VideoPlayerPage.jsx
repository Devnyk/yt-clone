import React, { useState } from "react";
import { useParams } from "react-router";
import data from "../data/data.json";

const VideoPlayerPage = () => {
  const { id } = useParams();
  const video = data.find((v) => v.id === id);
  const [newComment, setNewComment] = useState("");

  if (!video) return <p className="p-4">Video not found</p>;

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto">
      {/* Main video */}
      <div className="flex-1">
        <div className="aspect-video">
          <iframe
            src={video.embedUrl}
            title={video.title}
            allowFullScreen
            className="w-full h-[500px] rounded-lg"
          ></iframe>
        </div>

        <h1 className="mt-4 text-lg font-bold">{video.title}</h1>
        <div className="flex items-center gap-3 mt-2">
          <img src={video.channelLogo} alt={video.channel} className="w-10 h-10 rounded-full" />
          <span className="font-semibold">{video.channel}</span>
        </div>
        <p className="mt-2 text-gray-600">{video.description}</p>

        {/* Comments */}
        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-5">{video.comments.length} Comments</h2>

          <div className="flex gap-3 mb-6">
            <img src="https://i.pravatar.cc/40" alt="Your Avatar" className="w-10 h-10 object-cover rounded-full" />
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 border-b border-gray-300 focus:border-gray-500 outline-none pb-1"
            />
          </div>

          {video.comments.map((comment, idx) => (
            <div key={idx} className="flex gap-3 mb-6 border-b border-gray-200 pb-4">
              <img src="https://i.pravatar.cc/40?u={idx}" alt={comment.user} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">{comment.user}</span>
                  <span className="text-gray-500">{comment.time}</span>
                </div>
                <p className="text-sm mt-1">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested */}
      <div className="w-full lg:w-80">
        <h3 className="font-semibold mb-3">Suggested Videos</h3>
        {data.filter((v) => v.id !== id).map((v) => (
          <div key={v.id} className="flex gap-3 mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <img src={v.thumbnail} alt={v.title} className="w-32 h-20 object-cover rounded" />
            <div>
              <p className="text-sm font-semibold line-clamp-2">{v.title}</p>
              <p className="text-xs text-gray-500">{v.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerPage;
