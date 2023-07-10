import React from "react";
import { Card, CardImg } from "reactstrap";

const SingleVideo = () => {
  return (
    <div className="col-3 ">
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/180"
          style={{
            height: 202,
            objectFit: "cover",
          }}
          className="rounded-4"
          top
          width="100%"
        />

        <div className="d-flex mt-2">
          <div>
            <img
              src="https://picsum.photos/900/180"
              alt=""
              style={{
                width: "2.5rem",
                height: "2.5rem",
                objectFit: "cover",
              }}
              className="rounded-circle"
            />
          </div>
          <div className="mx-3">
            <h3>video name</h3>
            <h6>channel name</h6>
            <span>viwes</span> . <span>Date</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleVideo;
