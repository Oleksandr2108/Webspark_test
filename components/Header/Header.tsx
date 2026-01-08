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
    <div className="w-full py-4 md:py-1.5 shadow-[0_4px_24px_0_rgba(0,0,0,0.12),inset_0_12px_24px_0_rgba(0,0,0,0.12)] bg-[rgba(255,255,255,0.67)]">
      <div className="px-4 md:px-0">
        <Grid className="items-center gap-y-4">
          <div className="col-span-full md:col-span-3 flex justify-center md:justify-start">
            <Image
              src={Logo}
              alt="logo"
              className="md:ml-13.5 w-32 md:w-auto"
            />
          </div>

          <div className="col-span-full md:col-span-6 md:col-start-5">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-0">
              <h3 className="font-sans font-medium text-xl md:text-2xl text-center sm:text-left">
                monblanproject
              </h3>
              <div className="flex items-center justify-center border-primary h-7 px-3 border rounded-xs sm:ml-4">
                <p className="font-serif font-normal text-xs md:text-[13px] text-primary whitespace-nowrap">
                  Start on 17-02-2016
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 mt-3 md:mt-4">
              <p className="font-serif font-normal text-xs md:text-[14px]">
                <span className="font-bold">870</span> posts
              </p>
              <p className="font-serif font-normal text-xs md:text-[14px]">
                <span className="font-bold">11,787</span> followers
              </p>
              <p className="font-serif font-normal text-xs md:text-[14px]">
                <span className="font-bold">112</span> following
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-5 mt-4 md:mt-5">
              <p className="font-serif text-sm md:text-[16px] font-normal">
                Date
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-auto sm:w-auto">
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
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
