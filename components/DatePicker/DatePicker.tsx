"use client";

import Image from "next/image";

import Reset from "@/assets/image/reset.svg";
import CalendarIcon from "@/assets/image/calendar.svg";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="">
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => date && setStartDate(date)}
          dateFormat="dd_MM_yyyy"
          placeholderText="From"
          className="border border-gray-300 rounded px-4 py-2 relative w-40.5 h-7"
          calendarClassName="custom-calendar"
          open={isOpen}
          onClickOutside={() => {
            setTimeout(() => setIsOpen(false), 0);
          }}
          onSelect={() => setIsOpen(false)}
          onInputClick={() => setIsOpen(true)}
        />
      </div>
      <div className=" flex items-center justify-center  absolute top-0 right-0 z-20">
        <div
          onClick={() => setStartDate(null)}
          className=" flex items-center justify-center bg-[#ebebeb] w-6 h-7 border-[#dedede] border-l border-y"
        >
          <Image
            src={Reset}
            alt=""
          />
        </div>
        <div
          onClick={toggleCalendar}
          className=" flex items-center justify-center bg-[#ebebeb] w-6 h-7 border-[#dedede] border rounded-[0_4px_4px_0]"
        >
          <Image
            src={CalendarIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerPage;
