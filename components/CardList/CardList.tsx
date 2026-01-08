"use client";

import { Post } from "@/types/Post";
import { Grid } from "../Grid/Grid";
import CardItem from "../CardItem/CardItem";
import { GridIcon } from "./GridIcon";
import { ListIcon } from "./ListIcon";
import { useState } from "react";

interface CardListProps {
  posts: Post[];
}

const CardList = ({ posts }: CardListProps) => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [loadMore, setLoadMore] = useState<number>(8);
  return (
    <>
      <Grid className="gup-y-4">
        <div className="col-span-full flex gap-5 ml-auto py-5 ">
          <GridIcon
            active={viewMode === "grid"}
            onClick={() => setViewMode("grid")}
          />
          <ListIcon
            active={viewMode === "list"}
            onClick={() => setViewMode("list")}
          />
        </div>
        {posts
          .map((item) => (
            <CardItem
              key={item.id}
              post={item}
              viewMode={viewMode}
            />
          ))
          .slice(0, loadMore)}

        <div className="col-span-full pb-50">
          {loadMore >= posts.length ? (
            <></>
          ) : (
            <div
              onClick={() => setLoadMore(loadMore + 8)}
              className="border border-[#929292] rounded-[14px] w-27.75 h-7 flex items-center justify-center mx-auto mt-4 cursor-pointer"
            >
              <p className="uppercase font-serif font-medium text-[11px] text-[#929292]">
                Load more
              </p>
            </div>
          )}
        </div>
      </Grid>
    </>
  );
};

export default CardList;
