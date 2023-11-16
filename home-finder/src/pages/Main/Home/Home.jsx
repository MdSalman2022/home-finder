import React, { useContext, useEffect } from "react";
import Herosection from "../../../components/Main/Home/Herosection";
import HouseList from "../../../components/Main/Home/HouseList";
import { StateContext } from "@/contexts/StateProvider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const {
    filteredProperties,
    page,
    limit,
    setPage,
    setLimit,
    allHouse,
    sortOrder,
    setSortOrder,
    userInfo,
  } = useContext(StateContext);

  const { data: distinctThana = [] } = useQuery({
    queryKey: ["distinctThana", userInfo] || [],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/properties/getByDistinctThana`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    cacheTime: 5 * (60 * 1000), // cache data for 5 minutes
    staleTime: 5 * (60 * 1000), // consider data fresh for 5 minutes
  });

  console.log("distinctThana", distinctThana);
  return (
    <div className="container-lg mx-auto space-y-5 ">
      <Herosection />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Top areas</p>
        <div className="flex items-center gap-3">
          {distinctThana?.length > 0 &&
            distinctThana?.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-300 cursor-pointer flex items-center gap-1 bg-gray-200 hover:bg-gray-400 rounded-full px-2 text-xs"
              >
                <p>{item.thana}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {filteredProperties?.issue === "No property found" ? (
          <div>
            <p className="text-center text-3xl font-bold text-[#103ADC]">
              No Property Found for your search
            </p>
            <div className="flex justify-between">
              <p className="text-4xl font-semibold">Other Properties</p>
              <span>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Low to High</SelectItem>
                      <SelectItem value="banana">High to Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        onClick={() => console.log("first")}
                        value="10"
                      >
                        10
                      </SelectItem>
                      <SelectItem
                        onClick={() => console.log("first")}
                        value="20"
                      >
                        20
                      </SelectItem>
                      <SelectItem
                        onClick={() => console.log("first")}
                        value="30"
                      >
                        30
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <p className="text-4xl font-semibold">Properties</p>
            <span className="flex items-center gap-2">
              <Select
                onValueChange={(value) => setSortOrder(value)}
                className="w-[150px]"
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="asc">Low to High</SelectItem>
                    <SelectItem value="desc">High to Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setLimit(value)}>
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem onClick={() => console.log("first")} value="10">
                      10
                    </SelectItem>
                    <SelectItem onClick={() => console.log("first")} value="20">
                      20
                    </SelectItem>
                    <SelectItem onClick={() => console.log("first")} value="30">
                      30
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </span>
          </div>
        )}

        <HouseList />
        <div>
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setPage(page - 1)}
              className="bg-[#103ADC] text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="bg-[#103ADC] text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                filteredProperties?.properties?.length > 0
                  ? filteredProperties?.properties?.length < limit
                  : allHouse?.length < limit
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
