import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa6";
import Dropdown from "../Dropdown";
import ModalBox from "@/components/shared/ModalBox";
import { StateContext } from "@/contexts/StateProvider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const HouseRent = ({ house }) => {
  const { userInfo } = useContext(StateContext);
  const [selectedArea, setSelectedArea] = useState(1);
  const [phone, setPhone] = useState("");
  const items = [1, 2, 3, 4, 5];
  const [date, setDate] = useState("");

  console.log("house", house);

  const handleSelectArea = (item) => {
    setSelectedArea(item);
  };

  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const maxProgress = 100;
  const progressIncrement = 2; // Adjust this value for the speed of progression

  const handleMouseDown = (e) => {
    e.preventDefault();
    userInfo?.email && phone && date && setHolding(true);
  };
  console.log("date", date);

  const handleMouseUp = (e) => {
    e.preventDefault();
    setHolding(false);
    progress < maxProgress && setProgress(0);
  };

  useEffect(() => {
    let timer;

    if (holding && progress < maxProgress) {
      timer = setTimeout(() => {
        setProgress(progress + progressIncrement);
      }, 40); // Adjust the time interval for the speed of progression
    }

    return () => {
      clearTimeout(timer);
    };
  }, [holding, progress]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("userInfo", userInfo);

  const handleAddProperty = (e) => {
    e.preventDefault();

    if (progress < maxProgress) {
      // Progress is not 100%, don't submit the form
      return;
    }
    const formattedDate = date.toISOString().slice(0, 10);

    const form = e.target;
    const phone = form.phone.value;
    const checkIn = formattedDate;
    const submittedBy = userInfo?.id || "";

    const data = {
      phone,
      checkIn,
      submittedBy,
      propertyId: house?.id,
    };

    console.log("data", data);

    const response = fetch(
      `${import.meta.env.VITE_SERVER_URL}/properties/propertyReserved`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    console.log("response", response);
    if (response?.error) {
      toast.error("Your Reserve request has been failed");
    } else {
      toast.success("Your Reserve request has been submitted successfully");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="sticky top-5 w-full h-fit">
      <ModalBox isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="flex flex-col bg-white rounded-lg py-5 w-96">
          <span
            onClick={() => setIsModalOpen(false)}
            className="absolute top-3 right-3 text-black hover:text-red-600 cursor-pointer text-xl"
          >
            <RxCross2 />
          </span>

          <p className="border-b px-3 pb-2">Reservation Form</p>
          <form
            onSubmit={handleAddProperty}
            className="flex flex-col gap-5 w-full p-5"
          >
            <label htmlFor="">
              <span className="text-sm">Name</span>
              <input
                type="text"
                name="name"
                defaultValue={userInfo?.name}
                className="input-box w-full text-black"
                readOnly
              />
            </label>
            <label htmlFor="">
              <span className="text-sm">Email</span>
              <input
                type="email"
                name="email"
                className="input-box w-full"
                defaultValue={userInfo?.email}
                readOnly
              />
            </label>
            <label htmlFor="">
              <span className="text-sm">Phone</span>
              <input
                type="text"
                name="phone"
                className="input-box w-full"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
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
                  {date ? format(date, "PPP") : <span>CHECK-IN</span>}
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
            <button
              className={`w-full border border-blue-600 ${
                progress >= maxProgress ? "text-white" : "text-black"
              } rounded-lg h-12`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                background: `linear-gradient(to right, rgb(37 99 235) ${progress}%, #fff ${progress}%)`,
              }}
              disabled={!userInfo?.email || !phone || !date}
            >
              {progress >= maxProgress ? "DONE" : holding ? "Submit" : "Submit"}
            </button>
          </form>
        </div>
      </ModalBox>
      <div className="bg-white h-full w-full border shadow-xl rounded-lg p-5">
        <div className="flex justify-between">
          <p className="text-xl font-bold py-5">
            BDT {house?.price || house?.RentFee}
          </p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              {" "}
              <FaStar /> 5.00
            </span>
            <span>·</span>
            <span>308</span>
          </div>
        </div>
        <div>
          <div className="border rounded-lg rounded-b-none p-3">
            <div className="flex flex-col w-full gap-1">
              <span className="text-xs font-medium">CHECK-IN</span>
              <input type="date" className=" rounded-lg text-xs" />
            </div>
          </div>
          <div className="border-b border-x rounded-t-none rounded-lg p-3">
            <div className="flex flex-col w-full gap-1">
              <span className="text-xs font-medium">Members</span>
              <Dropdown
                items={items}
                onSelect={handleSelectArea}
                selectedItem={selectedArea}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="primary-btn shadow-lg shadow-blue-100 h-12 w-full flex justify-center items-center"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseRent;
