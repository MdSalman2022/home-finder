import ModalBox from "@/components/shared/ModalBox";
import { StateContext } from "@/contexts/StateProvider";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const DeleteProperty = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedHouse,
}) => {
  const { refetchAllHouse, refetchMyProperties } = useContext(StateContext);
  console.log("selectedHouse", selectedHouse);

  const handleDelete = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/properties/deleteProperty`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedHouse?.pid,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
    toast.success("Property deleted successfully");
    setIsDeleteModalOpen(false);
    refetchMyProperties();
    refetchAllHouse();
    return response.json();
  };

  return (
    <div>
      <ModalBox
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
      >
        <div className="flex flex-col bg-white rounded-lg ">
          <div className="flex justify-between p-3  border-b">
            <p className="text-xl">Delete Property</p>
            <span onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>
              <RxCross2 className="text-2xl hover:text-red-600 cursor-pointer" />
            </span>
          </div>
          <p className="p-4 text-2xl text-center">
            Are you sure you want to delete this property?
          </p>
          <div className="flex justify-between gap-3 p-3">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="px-4 py-2 bg-[#103ADC] text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleDelete();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </ModalBox>
    </div>
  );
};

export default DeleteProperty;
