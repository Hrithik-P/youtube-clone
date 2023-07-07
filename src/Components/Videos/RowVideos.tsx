import React from "react";
import SingleVideo from "./SingleVideo";
interface RowVideosProps {
  videos: object[];
}
const RowVideos = ({ videos }: RowVideosProps) => {
  return (
    <div>
      <SingleVideo />
    </div>
  );
};

export default RowVideos;
