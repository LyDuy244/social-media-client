"use client"
import {IKVideo} from "imagekitio-next";

type VideoType = {
  path: string,
  className?: string
}
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({path, className}: VideoType) => {
  return (
    <IKVideo
      className={className}
      path={path}
      urlEndpoint={urlEndpoint}
      transformation={[{width: "1920", height: "1080", q: "90"}, {raw: "l-text,i-NgocDuy,fs-100,co-white,l-end"}]}
      controls={true}
    />
  );
};

export default Video;