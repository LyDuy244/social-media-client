import React from 'react';
import Search from "@/components/Search";
import PopularTags from "@/components/PopularTags";
import Recommendations from "@/components/Recommendations";
import Link from "next/link";

const RightBar = () => {
  return (
    <div className={"pt-4 flex flex-col gap-4 sticky top-0 h-max"}>
      <Search/>
      <PopularTags/>
      <Recommendations/>
      <div className={"flex text-textGray text-sm gap-x-4 flex-wrap"}>
        <Link href={"/"}>Terms of Service</Link>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Cookie Policy</Link>
        <Link href={"/"}>Accessibility</Link>
        <Link href={"/"}>Ads Info</Link>
        <span>2024 ND Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;