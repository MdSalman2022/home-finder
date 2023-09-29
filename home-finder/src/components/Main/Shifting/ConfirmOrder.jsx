import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import family from "@/assets/family.webp";
import center from "@/assets/call-center.webp";
import registration from "@/assets/registration.webp";
import shifting from "@/assets/shifting.jpg";

const ConfirmOrder = () => {
  const [activeSection, setActiveSection] = useState("1");

  const accordions = [
    {
      title: "Submit the form to get free Quotation for Shifting Service",
      content:
        "Submit the form with required information to book home/office shifting services. One of our shifting experts will contact you and let you know the cost instantly. Also there is an opportunity to see your home/office furniture and then know the complete cost.",
      button: "Submit Form",
      bg: "#E9FCF6",
    },
    {
      title: "Confirm",
      content:
        "After pre-inspection our shifting team will confirm your shifting service.",
      bg: "#FFF2F9",
    },
    {
      title: "Enjoy Shifting Service",
      content:
        "Finally, the Home Finder shifting team will reach your location on time to ensure your home/office shifting on the scheduled day.",
      bg: "#F2F7FF",
    },
  ];

  console.log("active", activeSection);

  return (
    <div className="py-10 px-4 md:px-0">
      <div className="flex flex-col items-center gap-3">
        <p className="text-3xl font-bold text-center">
          How you can take our Service?
        </p>
        <p className="text-sm">Here are the steps to take our service</p>

        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:mt-5">
          <div className="col-span-1 flex flex-col items-start gap-3 w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-5"
            >
              {accordions.map((accordion, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className={`rounded-3xl p-5 bg-blue-300 bg-opacity-10 border-blue-600`}
                  >
                    <AccordionTrigger
                      onClick={() => setActiveSection(`${index + 1}`)}
                      className="text-xl font-semibold text-start"
                    >
                      {accordion.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      <div className="flex flex-col items-start gap-5 md:w-[70%] leading-loose">
                        {accordion.content}
                        {accordion?.button && (
                          <Button className="bg-blue-600 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600">
                            Submit Form
                          </Button>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div className="col-span-1 flex flex-col gap-3 w-full h-[70vh]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={
                activeSection === "1"
                  ? registration
                  : activeSection === "2"
                  ? center
                  : family
              }
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full bg-white rounded-2xl p-5">
          <div className="flex md:flex-row flex-col-reverse gap-5 md:gap-0 justify-between w-full">
            <div className="flex flex-col md:w-1/2 justify-center gap-3">
              <p className="text-3xl">Discover a Better Way to Move Home</p>
              <p>
                Our dedicated shifting service is available around the clock to
                cater to your home or office relocation requirements. Reach out
                to us today for an exceptional shifting experience.
              </p>
              <Button className="w-fit bg-blue-600 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600">
                Submit Form
              </Button>
            </div>
            <div className="w-fit">
              <img
                className="md:h-[40vh] rounded-2xl w-fit"
                src={shifting}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
