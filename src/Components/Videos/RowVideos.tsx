import React from "react";
import SingleVideo from "./SingleVideo";
interface RowVideosProps {
  videos: object[];
}
const RowVideos = ({ videos }: RowVideosProps) => {
  return (
    <div className=" row-video-container ">
      <div className="d-flex gap-3">
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
      </div>
    </div>
  );
};

export default RowVideos;
