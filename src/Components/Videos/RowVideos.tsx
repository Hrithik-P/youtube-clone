import React from "react";
import SingleVideo from "./SingleVideo";
import { useAppSelector } from "../../Redux/hooks";

const RowVideos = () => {
  const suggestedVideos = useAppSelector((state) => state.suggestedVideo);
  return (
    <div className="row-video-container  d-flex gap-3 ">
      {suggestedVideos?.map((vid) => (
        <SingleVideo video={vid} key={vid.id.videoId} />
      ))}
    </div>
  );
};

export default RowVideos;
