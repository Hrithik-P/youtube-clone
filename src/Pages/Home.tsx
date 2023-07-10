import React from "react";
import RowVideos from "../Components/Videos/RowVideos";

const Home = () => {
  return (
    <div className="d-flex flex-column ">
      <RowVideos videos={[]} />
      <RowVideos videos={[]} />
      <RowVideos videos={[]} />
    </div>
  );
};

export default Home;
