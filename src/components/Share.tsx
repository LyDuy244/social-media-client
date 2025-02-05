'use client'
import React, {useState} from 'react';
import Image from "@/components/Image";
import NextImage from "next/image";
import {shareAction} from "@/actions";
import ImageEditor from "@/components/ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  })
  
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  }
  
  const previewUrl = media ? URL.createObjectURL(media) : null;
  return (
    <form className={"p-4 flex gap-4"} action={formData => shareAction(formData, settings)}>
      {/*AVATAR*/}
      <div className={"relative w-10 h-10 rounded-full overflow-hidden"}>
        <Image path={"general/avatar.png"} alt={"logo"} w={100} h={100} tr={true}/>
      </div>
      {/*  OTHER */}
      <div className={"flex-1 flex flex-col gap-4"}>
        <input type="text" placeholder="What is happening?! "
               name={"desc"}
               className={"bg-transparent outline-none placeholder:text-textGray text-xl"}/>
        {/*PREVIEW IMAGE */}
        {
          media?.type.includes("image") && previewUrl && <div className={'relative rounded-xl overflow-hidden'}>
                <NextImage
                    src={previewUrl}
                    alt="" width={600}
                    height={600}
                    className={`w-full ${settings.type === "original"
                      ? "h-full object-contain"
                      : settings.type === "square"
                        ? "aspect-square object-cover"
                        : "aspect-video object-cover"}`
                    }/>
                <div
                    className={"absolute top-2 left-2 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-bold text-sm cursor-pointer"}
                    onClick={() => setIsEditorOpen(true)}
                >
                    Edit
                </div>
                <div
                    className={"absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer text-sm"}
                    onClick={() => setMedia(null)}
                >
                    X
                </div>
            </div>
        }
        
        {
          media?.type.includes("video") && previewUrl &&
            <div className={'relative'}>
                <video src={previewUrl} controls/>
                <div
                    className={"absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer text-sm"}
                    onClick={() => setMedia(null)}
                >
                    X
                </div>
            </div>
        }
        
        {
          isEditorOpen && previewUrl &&
            <ImageEditor
                onClose={() => setIsEditorOpen(false)}
                previewUrl={previewUrl}
                settings={settings}
                setSettings={setSettings}
            />
        }
        <div className={"flex items-center justify-between gap-4 flex-wrap"}>
          <div className={"flex gap-4 flex-wrap"}>
            <input type="file" name={"file"} accept={"image/*, video/*"} onChange={handleMediaChange}
                   className={"hidden"} id={"file"}/>
            <label htmlFor="file">
              <Image path={"icons/image.svg"} alt={""} w={20} h={20} className={"cursor-pointer"}/>
            </label>
            <Image path={"icons/gif.svg"} alt={""} w={20} h={20} className={"cursor-pointer"}/>
            <Image path={"icons/poll.svg"} alt={""} w={20} h={20} className={"cursor-pointer"}/>
            <Image path={"icons/emoji.svg"} alt={""} w={20} h={20} className={"cursor-pointer"}/>
            <Image path={"icons/schedule.svg"} alt={""} w={20} h={20} className={"cursor-pointer"}/>
            <Image path={"icons/location.svg"} alt={""} w={20} h={20} className={"cursor-pointer"}/>
          </div>
          <button type={"submit"} className={"bg-white text-black font-bold rounded-full py-2 px-4"}>Post</button>
        </div>
      </div>
    </form>
  );
};

export default Share;