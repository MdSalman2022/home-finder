import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

const PersionalInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container-sm mx-auto min-h-[80vh]">
      <p className="text-3xl font-semibold">Account Information</p>
      <div className="my-5"></div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="" />
          <span className="font-semibold">Profile picture</span>
        </div>
        <div className="flex justify-between gap-5 w-full">
          <label className="w-full">
            <span>First name</span>
            <input
              className="input-box w-full"
              type="text"
              value={user?.displayName.split(" ")[0]}
            />
          </label>
          <label className="w-full">
            <span>Last name</span>
            <input
              className="input-box w-full"
              type="text"
              value={user?.displayName.split(" ")[1]}
            />
          </label>
          <label className="w-full">
            <span>Email</span>
            <input
              className="input-box w-full"
              type="text"
              value={user?.email}
            />
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold">Integrated account</p>
          <div className="flex justify-between border rounded-lg px-3 py-3">
            <div className="flex items-center">
              <FcGoogle className="text-3xl" />
              Google
            </div>
            <button className="primary-outline-btn h-10 flex items-center">
              Connected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersionalInfo;
