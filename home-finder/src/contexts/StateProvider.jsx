import { createContext, useState } from "react";
import room1 from "@/assets/room1.webp";
import room2 from "@/assets/room2.webp";
import room3 from "@/assets/room3.jpeg";
import room4 from "@/assets/room4.jpg";
import room5 from "@/assets/room5.jpeg";
import map from "@/assets/map.png";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const allHouse = [
    {
      id: "1",
      name: "Anishur Rahman",
      price: 10000,
      bedroom: 3,
      bathroom: 2,
      livingArea: 1150,
      location: "Mirpur, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "2",
      name: "Atikur Hasan",
      price: 12000,
      bedroom: 3,
      bathroom: 2,
      livingArea: 1000,
      location: "Dhanmondi, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "3",
      name: "Ramiz Uddin",
      price: 15000,
      bedroom: 3,
      bathroom: 2,
      livingArea: 1100,
      location: "Banani, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "4",
      name: "Sheikh Akbar",
      price: 20000,
      bedroom: 3,
      bathroom: 2,
      livingArea: 1100,
      location: "Dhanmondi-2, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "5",
      name: "Choton Chowdhuri",
      price: 15000,
      bedroom: 3,
      bathroom: 2,
      livingArea: 1250,
      location: "Khilgaon, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "6",
      name: "Ibrahim Khan",
      price: 23000,
      bedroom: 3,
      bathroom: 3,
      livingArea: 1550,
      location: "Motijheel, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "7",
      name: "Yousuf Khan",
      price: 35000,
      bedroom: 4,
      bathroom: 3,
      livingArea: 2200,
      location: "Mohakhali, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "8",
      name: "Mubarak Rahman",
      price: 30000,
      bedroom: 3,
      bathroom: 3,
      livingArea: 2200,
      location: "Farmgate, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "9",
      name: "Mahbubur Rahman",
      price: 25000,
      bedroom: 4,
      bathroom: 4,
      livingArea: 2200,
      location: "Tejgaon, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "10",
      name: "Tofazzol Khan",
      price: 32000,
      bedroom: 4,
      bathroom: 3,
      livingArea: 2500,
      location: "Mohammadpur, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "11",
      name: "Ahmed Rahman",
      price: 40000,
      bedroom: 5,
      bathroom: 5,
      livingArea: 3000,
      location: "Mohammadpur, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
    {
      id: "12",
      name: "Rifat Hasan",
      price: 16000,
      bedroom: 3,
      bathroom: 3,
      livingArea: 1000,
      location: "Mirpur, Dhaka, Bangladesh",
      images: [room1, room2, room3, room4, room5],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab consequatur assumenda quidem exercitationem rem quam id repellendus, eligendi doloremque?",
      map: map,
    },
  ];

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const stateInfo = { allHouse, setIsCreateModalOpen, isCreateModalOpen };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};
export default StateProvider;
