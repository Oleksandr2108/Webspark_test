"use client";

import Image from "next/image";
import { Grid } from "../Grid/Grid";

import Logo from "@/assets/image/Logo.svg";
import DatePickerPage from "../DatePicker/DatePicker";

interface HeaderProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}
const Header = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: HeaderProps) => {
  return (
    <div className="w-full h-43 py-1.5 shadow-[0_4px_24px_0_rgba(0,0,0,0.12),inset_0_12px_24px_0_rgba(0,0,0,0.12)] bg-[rgba(255,255,255,0.67)]">
      <Grid className="items-center">
        <div className="col-span-3 ">
          <Image
            src={Logo}
            alt="logo"
            className="ml-13.5"
          />
        </div>
        <div className="col-span-6 col-start-5 ">
          <div className="flex items-center ">
            <h3 className="font-sans font-medium text-2xl">monblanproject</h3>
            <div className="flex items-center justify-center border-primary h-7 px-3 border rounded-xs ml-4 ">
              <p className="font-serif font-normal text-[13px] text-primary">
                {" "}
                Start on 17-02-2016
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-4">
            <p className="font-serif font-normal text-[14px] ">
              <span className="font-bold">870</span> posts
            </p>
            <p className="font-serif font-normal text-[14px] ">
              <span className="font-bold">11,787</span> followers
            </p>
            <p className="font-serif font-normal text-[14px] ">
              <span className="font-bold">112</span> following
            </p>
          </div>

          <div className="flex items-center gap-5 mt-5">
            <p className="font-serif text-[16px] font-normal">Date</p>
            <DatePickerPage
              newDate={startDate}
              setNewDate={setStartDate}
              placeholder="from"
            />
            <DatePickerPage
              newDate={endDate}
              setNewDate={setEndDate}
              placeholder="to"
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Header;
