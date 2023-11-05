import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GrShieldSecurity } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaIdCard } from "react-icons/lia";
import { MdOutlineAddHome, MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";

const Account = () => {
  const { user } = useContext(AuthContext);

  const options = [
    {
      icon: <LiaIdCard />,
      name: "Personal Info",
      description: "Update your personal information.",
      link: "personal-info",
    },
    {
      icon: <FaFileInvoiceDollar />,
      name: "Rent Management",
      description: "Manage your rent from here",
      link: "rent-management",
    },
    {
      icon: <MdOutlineAddHome />,
      name: "My Properties",
      description: "Add a new property for rent.",
      link: "properties",
    },
    {
      icon: <IoSettingsOutline />,
      name: "Settings",
      description: "Update your app settings.",
    },
    {
      icon: <AiOutlineEye />,
      name: "Privacy",
      description: "Update your privacy settings.",
    },
    {
      icon: <MdOutlinePayments />,
      name: "Payments & payouts",
      description: "Update your payment settings.",
    },
    {
      icon: <GrShieldSecurity />,
      name: "Login & Security",
      description: "Update your security settings.",
    },
  ];

  return (
    <div className="mx-auto my-10 min-h-screen max-w-[1000px]">
      <p className="text-4xl font-medium">Account</p>
      <p className="text-lg">
        <span className="font-semibold">{user?.displayName}</span>,{" "}
        {user?.email}.{" "}
        <span className="font-semibold underline">Go to profile</span>
      </p>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {options?.map((option, index) => (
          <Link
            to={option.link}
            key={index}
            className="shadow-lg p-5 rounded-lg"
          >
            <div className="flex flex-col gap-5">
              <span className="text-3xl">{option.icon}</span>

              <div className="flex flex-col items-start">
                <p className="text-lg font-semibold">{option.name}</p>
                <p className="text-sm opacity-80">{option.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Account;
