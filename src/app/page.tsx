"use client"
import React from 'react';
import Image from "@/components/Image";
import {IKImage} from "imagekitio-next";
import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Page = () => {
  return (
    <div>
      <div className={"flex justify-evenly items-center text-textGray font-bold px-4 pt-4 border-b-[1px] border-borderGray"}>
        <Link className={"pb-3 border-b-4 border-iconBlue"} href={"/"}>For you</Link>
        <Link className={"pb-3"} href={"/"}>Following</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  );
};

export default Page;