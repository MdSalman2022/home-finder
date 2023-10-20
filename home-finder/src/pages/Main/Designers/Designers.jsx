import HeroSection from "@/components/Main/Designers/HeroSection";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DesignerList from "@/components/Main/Designers/DesignerList";

const Designers = () => {
  return (
    <div className="flex flex-col gap-5 container-lg">
      <HeroSection />
      <DesignerList />
    </div>
  );
};

export default Designers;
