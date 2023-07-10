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
    <div className="col-12">
      <div className="row mb-3">
        <RowVideos />
      </div>
      <div className="row mb-3">
        <RowVideos />
      </div>
      <div className="row mb-3">
        <RowVideos />
      </div>
    </div>
  );
};

export default Home;
