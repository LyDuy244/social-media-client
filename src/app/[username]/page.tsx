import React from 'react';
import Link from "next/link";
import Image from "@/components/Image";
import Feed from "@/components/Feed";

const Page = () => {
  return (
    <div className={""}>
      {/*PROFILE TITLE*/}
      <div className={"flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]"}>
        <Link href={"/"}>
          <Image path={"icons/back.svg"} alt={"icon back"} w={24} h={24}/>
        </Link>
        <h1 className={"font-bold text-lg"}>Ngoc Duy</h1>
      </div>
      {/*INFO*/}
      <div className={""}>
        {/*  COVER & AVATAR CONTAINER*/}
        <div className={"relative w-full"}>
          {/*COVER*/}
          <div className={"w-full aspect-[3/1] relative"}>
            <Image path={"general/cover.jpg"} alt={"cover background"} w={600} h={200} tr/>
          </div>
          {/* AVATAR */}
          <div
            className={"w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2"}>
            <Image path={"general/avatar.png"} alt={"cover background"} w={100} h={100} tr/>
          </div>
        </div>
        <div className={"flex w-full items-center justify-end gap-2 p-2"}>
          <div
            className={"w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer"}>
            <Image path={"icons/more.svg"} alt={"icon more"} w={20} h={20}/>
          </div>
          <div
            className={"w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer"}>
            <Image path={"icons/explore.svg"} alt={"icon more"} w={20} h={20}/>
          </div>
          <div
            className={"w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer"}>
            <Image path={"icons/message.svg"} alt={"icon more"} w={20} h={20}/>
          </div>
          <button className={"px-4 py-2 bg-white text-black font-bold rounded-full"}>Follow</button>
        </div>
        
        {/*  USER DETAILS*/}
        <div className={"p-4 flex flex-col gap-2"}>
          {/*  USERNAME & HANDLE*/}
          <div className={""}>
            <h1 className={"text-2xl font-bold"}>Ngoc Duy</h1>
            <span className={"text-textGray text-sm"}>@ngocduy</span>
          </div>
          <p className={""}>Ngoc Duy Developer</p>
          {/*  JOBS & LOCATION & DATE*/}
          <div className={"flex gap-4 text-textGray text-[15px]"}>
            <div className={"flex items-center gap-2"}>
              <Image path={"icons/userLocation.svg"} alt={"user location icon"} w={20} h={20}/>
              <span>USA</span>
            </div>
            <div className={"flex items-center gap-2"}>
              <Image path={"icons/date.svg"} alt={"user location icon"} w={20} h={20}/>
              <span>Joined May 2021</span>
            </div>
          </div>
          {/*  FOLLOWING & FOLLOW*/}
          <div className={"flex gap-4"}>
            <div className={"flex items-center gap-2"}>
              <span className={"font-bold"}>100</span>
              <span className={"text-textGray text-[15px]"}>Followers</span>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"font-bold"}>100</span>
              <span className={"text-textGray text-[15px]"}>Following</span>
            </div>
          </div>
        </div>
      </div>
      {/*  FEED*/}
      <Feed/>
    </div>
  );
};

export default Page;