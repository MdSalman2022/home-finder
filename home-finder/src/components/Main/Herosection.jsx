import React from "react";

const Herosection = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 w-[95vw] h-[50vh] rounded-3xl">
        <div className="flex justify-between items-center h-full w-full p-5">
          <div>
            <div className="h-fit bg-blue-900 w-fit flex flex-col gap-3 justify-center p-5 rounded-lg">
              <p className="text-6xl font-bold text-white">
                Find Your Dream Home
              </p>
              <p className="text-gray-300 text-xl">
                Saving much time by finding the match one using our algorithm{" "}
                <br />
                that we designed
              </p>
            </div>

            <div>
              <div className="flex flex-col">
                <p className="font-bold text-xl">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
