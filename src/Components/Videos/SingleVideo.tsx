import React, { useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import { SuggestedVideo } from "../../Redux/HomeSlice";
import TextTruncate from "react-text-truncate";
import moment from "moment";
interface SingleVideoProps {
  video: SuggestedVideo;
}
const SingleVideo = ({ video }: SingleVideoProps) => {
  useEffect(() => {}, []);

  return (
    <div className="col-3">
      <Card>
        <CardImg
          alt="Card image cap"
          src={video.snippet.thumbnails.maxres?.url}
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
              src={video.snippet.thumbnails.maxres?.url}
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
            <div className="text-white">
              <TextTruncate
                line={3}
                element="h5"
                truncateText="…"
                text={video.snippet.title}
              />
            </div>
            <span>{video.snippet.channelTitle}</span>
            <br />
            <span>viwes</span> .{" "}
            <span>{moment(video.snippet.publishedAt).fromNow()}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleVideo;
