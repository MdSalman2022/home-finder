import React from "react";

const RentedByCard = ({ selectedHouse }) => {
  console.log("selectedHouse", selectedHouse);
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return formattedDate;
  }

  // Example usage:
  const timestamp = "2023-11-09T03:19:09.000Z";
  const formattedTime = formatTimestamp(timestamp);

  console.log(formattedTime);

  return (
    <div className="flex flex-col gap-4 rounded-lg shadow-lg p-6 text-sm bg-white w-full">
      <div className="flex justify-center">
        <img
          className="rounded-full w-24 h-24 p-1 outline outline-2 outline-dashed outline-blue-600"
          src={selectedHouse?.photo}
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">{selectedHouse?.name}</p>
        <p className="text-gray-600">{selectedHouse?.email}</p>
        <p className="text-gray-600">{selectedHouse?.phone}</p>
      </div>
      <div className="grid grid-cols-2">
        <p className="text-gray-600">Check-In: </p>
        <p>{selectedHouse?.checkInDate}</p>
        <p className="text-gray-600">Reserved on:</p>
        <p>{formatTimestamp(selectedHouse?.Timestamp)}</p>
      </div>
    </div>
  );
};

export default RentedByCard;
