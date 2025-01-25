import React from 'react';
import Image from "@/components/Image";
import PostInfo from "@/components/PostInfo";
import PostInteraction from "@/components/PostInteraction";

const Post = () => {
  return (
    <div className={"p-4 border-y-[1px] border-borderGray"}>
      {/*  POST TYPE*/}
      <div className={"flex items-center gap-2 text-sm text-textGray mb-2 from-bold"}>
        icon
        <span>Ngoc Duy reposted</span>
      </div>
      {/*POST CONTENT*/}
      <div className={"flex gap-4"}>
        {/*AVATAR*/}
        <div className={"relative w-10 h-10 rounded-full overflow-hidden"}>
          <Image path={"general/avatar.png"} alt={"avatar"} w={100} h={100} tr={true}/>
        </div>
        {/*CONTENT*/}
        <div className={"flex-1 flex flex-col gap-2"}>
          {/*TOP*/}
          <div className={"flex items-center justify-between gap-2"}>
            <div className={"flex items-center gap-2 flex-wrap"}>
              <h1 className={"text-lg font-bold"}>Ngoc Duy</h1>
              <span className={"text-textGray"}>@ngocduy123</span>
              <span className={"text-textGray"}>1 day ago</span>
            </div>
            <PostInfo/>
          </div>
          {/*  TEXT & MEDIA*/}
          <p className={""}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aspernatur consectetur cupiditate
            dignissimos est ex expedita explicabo rerum similique!
          </p>
          <Image path={"general/post.jpeg"} alt={"post.jpeg"} w={600} h={600}/>
          <PostInteraction/>
        </div>
      </div>
    </div>
  );
};

export default Post;