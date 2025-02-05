import React from 'react';
import Image from "@/components/Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className={"p-4 rounded-2xl border border-borderGray flex flex-col gap-4"}>
      <h1 className={"text-xl font-bold text-textGrayLight"}>{"What's"} Happening</h1>
      {/* TRENDS EVENT*/}
      <div className={"flex gap-4"}>
        <div className={"relative w-20 h-20 rounded-xl overflow-hidden"}>
          <Image path={"general/post.jpeg"} alt={"event icon"} w={120} h={120} tr/>
        </div>
        <div className={"flex-1"}>
          <h2 className={"font-bold text-textGrayLight"}>Nadal v Fereder Grand Slam</h2>
          <span className={"text-sm text-textGray"}>Last Night</span>
        </div>
      </div>
      {/*  TOPICS*/}
      <div>
        <div className={"flex items-center justify-between"}>
          <span className={"text-textGray text-sm"}>Technology . Trending</span>
          <Image path={"icons/infoMore.svg"} alt={"info icon"} w={16} h={16}/>
        </div>
        <h2 className={"text-textGrayLight font-bold"}>OpenAI</h2>
        <span className={"text-textGray text-sm"}>20k posts</span>
      </div>
 
      <Link href={"/"} className={"text-iconBlue"}>Show more</Link>
    </div>
  );
};

export default PopularTags;