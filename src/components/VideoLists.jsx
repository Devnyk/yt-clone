import React from "react";
import { Link } from "react-router-dom";
import videos from "../data/data.json";
import VideoCard from "../components/VideoCard";

const Home = () => {
  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-[1500px] mx-auto p-6">
      {videos.map((v) => (
        <Link to={`/video/${v.id}`} key={v.id}>
          <VideoCard
            id={v.id}
            thumbnail={v.thumbnail}
            title={v.title}
            channel={v.channel}
            views={v.views}
            time={v.time || v.date}
            channelImage={v.channelLogo || v.avatar || "https://via.placeholder.com/40"}
          />
        </Link>
      ))}
    </section>
  );
};

export default Home;
