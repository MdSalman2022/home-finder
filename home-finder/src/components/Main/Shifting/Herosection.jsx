import React, { useState } from "react";
import bg from "@/assets/homeshifting.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

const Herosection = () => {
  const [date, setDate] = useState("");

  return (
    <div className="w-full md:h-[70vh] md:rounded-3xl relative">
      {/* herosection for mobile  */}
      <div
        className="flex md:hidden flex-col justify-center gap-3 p-5 h-[85vh]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + bg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center h-full gap-5 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            House Shifting <br /> Service
          </h1>
          <p className="flex items-start gap-2 text-xl">
            <BsCheckCircleFill className="mt-1" /> Trusted, Background Checked &
            Skilled Movers
          </p>
          <p className="flex items-start gap-2 text-xl">
            <BsCheckCircleFill className="mt-1" /> Superior Packaging,
            Loading-unloading & Quality Moving Services
          </p>
          <p className="flex items-start gap-2 text-xl">
            <BsCheckCircleFill className="mt-1" /> Bangladesh's Highest-rated &
            Premium Shifting Service
          </p>
        </div>
      </div>

      {/* herosection for desktop  */}
      <img
        className=" hidden md:block object-cover w-full h-full object-top lg:rounded-none 2xl:rounded-3xl brightness-50"
        src={bg}
        alt=""
      />

      <div className="hidden md:absolute md:top-[50%] md:-translate-y-[50%] md:left-5 2xl:left-20 md:flex flex-col justify-center gap-10">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          House Shifting Service
        </h1>
        <div className="flex flex-col gap-5 text-xl text-white">
          <p className="flex items-center gap-2">
            <BsCheckCircleFill /> Trusted, Background Checked & Skilled Movers
          </p>
          <p className="flex items-center gap-2">
            <BsCheckCircleFill /> Superior Packaging, Loading-unloading &
            Quality Moving Services
          </p>
          <p className="flex items-center gap-2">
            <BsCheckCircleFill /> Bangladesh's Highest-rated & Premium Shifting
            Service
          </p>
        </div>
      </div>
      <div className="md:absolute md:top-[50%] md:-translate-y-[50%] md:right-5 2xl:right-20 flex flex-col justify-center gap-10 md:w-[400px] 2xl:w-[550px]">
        <di className="flex flex-col p-5 bg-white rounded-xl">
          <p className="font-semibold md:text-lg 2xl:text-2xl">
            Contact us to ease your shifting process
          </p>
          <p className="text-sm flex flex-wrap">
            Please do not hesitate to reach out to us for a seamless transition
            during your relocation. To initiate the process, kindly complete the
            following form.
          </p>
          <form action="" className="flex flex-col gap-3 mt-5">
            <input
              type="text"
              className="input-box md:h-8 2xl:h-12"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="input-box md:h-8 2xl:h-12"
              placeholder="Your Phone"
            />
            <input
              type="text"
              className="input-box md:h-8 2xl:h-12"
              placeholder="Your Email (Optional)"
            />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full md:h-8 2xl:h-12  justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Day of Shifting</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <div className="flex items-center gap-5 justify-between">
              <input
                type="text"
                className="input-box md:h-8 2xl:h-12 w-full"
                placeholder="From"
              />
              <input
                type="text"
                className="input-box md:h-8 2xl:h-12 w-full"
                placeholder="To"
              />
            </div>
            <button className="primary-btn md:h-10 2xl:h-12 flex items-center justify-center">
              Submit
            </button>
          </form>
        </di>
      </div>
    </div>
  );
};

export default Herosection;
