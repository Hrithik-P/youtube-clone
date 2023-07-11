/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import RowVideos from "../Components/Videos/RowVideos";

import { getSuggestedVideos } from "../Redux/HomeSlice";
import { useAppDispatch } from "../Redux/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSuggestedVideos());
  }, []);

  return (
    <>
      <div className=" mb-3">
        <RowVideos />
      </div>
      <div className=" mb-3">
        <RowVideos />
      </div>
      <div className=" mb-3">
        <RowVideos />
      </div>
    </>
  );
};

export default Home;
