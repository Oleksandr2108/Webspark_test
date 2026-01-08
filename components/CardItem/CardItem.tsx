import { Post } from "@/types/Post";
import Image from "next/image";

import LikeIcon from "@/assets/image/like.svg";
import CommentIcon from "@/assets/image/comment.svg";

interface CardItemProps {
  viewMode: "list" | "grid";
  post: Post;
}

const CardItem = ({ viewMode, post }: CardItemProps) => {
  return (
    <div
      className={
        viewMode === "list" ? "bg-white col-span-full" : " bg-white col-span-3"
      }
    >
      <div
        className={
          viewMode === "list" ? "flex h-21.5  items-center  pr-20" : "flex-col"
        }
      >
        <div className={viewMode === "list" ?"relative w-21.5  h-21.5 shrink-0" : "relative w-full h-50"}>
          <Image
            src={post.imageUrl}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        <div
          className={
            viewMode === "list"
              ? "flex w-full items-center justify-between  ml-7.5"
              : "flex-col px-3"
          }
        >
          <div className={viewMode === "list" ?"flex " : "flex justify-between "}>
            <div>
              <h3 className="font-serif font-medium text-[16px]">Today</h3>
              <div
                className={
                  viewMode === "list"
                    ? "flex items-center gap-4.5 w-93.75"
                    : "flex-col"
                }
              >
                <div className="flex">
                  <Image
                    src={LikeIcon}
                    alt=""
                  />
                  <p className="font-serif font-medium text-[14px] ml-1.5">
                    {post.today.likes}
                  </p>
                </div>
                <div className="flex">
                  <Image
                    src={CommentIcon}
                    alt=""
                  />
                  <p className="font-serif font-medium text-[14px] ml-1.5">
                    {post.today.comments}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-medium text-[16px]">
                {post.stats.date}
              </h3>
              <div
                className={viewMode === "list" ? "flex gap-4.5" : "flex-col"}
              >
                <div className="flex">
                  <Image
                    src={LikeIcon}
                    alt=""
                  />
                  <p className="font-serif font-medium text-[14px] ml-1.5">
                    {post.stats.likes}
                  </p>
                </div>
                <div className="flex">
                  <Image
                    src={CommentIcon}
                    alt=""
                  />
                  <p className="font-serif font-medium text-[14px] ml-1.5">
                    {post.stats.comments}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-medium text-[16px]">Image upload</h3>
            <p className="font-serif font-medium text-[14px]">
              {post.imageUpload}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
