"use client"
import React from 'react';
import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className={"flex justify-between items-center text-textGray font-bold px-4 pt-4 border-b-[1px] border-borderGray"}>
        <Link className={"pb-3 flex items-center border-b-4 border-iconBlue"} href={"/"}>For you</Link>
        <Link className={"pb-3 flex items-center"} href={"/"}>Following</Link>
        <Link className={"hidden pb-3 md:flex items-center"} href={"/"}>HTML</Link>
        <Link className={"hidden pb-3 md:flex items-center"} href={"/"}>CSS</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  );
};

export default Page;