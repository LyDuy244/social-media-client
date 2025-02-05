import React from 'react';
import Link from "next/link";
import Image from "@/components/Image";

const Recommendations = () => {
  return (
    <div className={"p-4 rounded-2xl border border-borderGray flex flex-col gap-4"}>
      {/*  USER CARD*/}
      <div className={"flex items-center justify-between"}>
        {/*IMAGE AND USER INFO*/}
        <div className={"flex items-center gap-2"}>
          <div className={"relative rounded-full overflow-hidden w-10 h-10"}>
            <Image path={"general/avatar.png"} alt={"Ngoc Duy"} w={100} h={100} tr/>
          </div>
          <div className={""}>
            <h1 className={"text-base font-bold"}>Ngoc Duy</h1>
            <span className={"text-textGray text-sm"}>@ngocduy</span>
          </div>
        </div>
        {/*BUTTON*/}
        <button className={"py-1 px-4 font-semibold bg-white text-black rounded-full"}>Follow</button>
      </div>
      <div className={"flex items-center justify-between"}>
        {/*IMAGE AND USER INFO*/}
        <div className={"flex items-center gap-2"}>
          <div className={"relative rounded-full overflow-hidden w-10 h-10"}>
            <Image path={"general/avatar.png"} alt={"Ngoc Duy"} w={100} h={100} tr/>
          </div>
          <div className={""}>
            <h1 className={"text-base font-bold"}>Ngoc Duy</h1>
            <span className={"text-textGray text-sm"}>@ngocduy</span>
          </div>
        </div>
        {/*BUTTON*/}
        <button className={"py-1 px-4 font-semibold bg-white text-black rounded-full"}>Follow</button>
      </div>
      
      <Link href={"/"} className={"text-iconBlue"}>Show more</Link>
    </div>
  );
};

export default Recommendations;