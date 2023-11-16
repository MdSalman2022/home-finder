import { createContext, useState, useEffect, useContext } from "react";
import room1 from "@/assets/room1.webp";
import room2 from "@/assets/room2.webp";
import room3 from "@/assets/room3.jpeg";
import room4 from "@/assets/room4.jpg";
import room5 from "@/assets/room5.jpeg";
import map from "@/assets/map.png";
import { AuthContext } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      fetch(
        `${import.meta.env.VITE_SERVER_URL}/users/getUserById?uid=${user?.uid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setUserInfo(data.user[0]))
        .catch((err) => console.log(err));
    }
  }, [user]);

  console.log("userInfo", userInfo);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");

  console.log("limit", limit);

  const {
    data: allHouse = [],
    refetch: refetchAllHouse,
    isLoading: isAllHouseLoading,
    error,
  } = useQuery({
    queryKey: ["allHouse", userInfo, page, limit, sortOrder] || [],
    queryFn: async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_SERVER_URL
        }/properties/getAll?page=${page}&limit=${limit}&sortOrder=${sortOrder}`,
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

  const {
    data: myProperties = [],
    refetch: refetchMyProperties,
    isLoading: isMyPropertiesLoading,
    error: myPropertiesError,
  } = useQuery({
    queryKey: (userInfo?.id !== undefined && ["myProperties", userInfo]) || [],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/properties/getPropertiesById?id=${
          userInfo?.id
        }`,
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
    cacheTime: 2 * (60 * 1000), // cache data for 2 minutes
    staleTime: 1 * (60 * 1000), // consider data fresh for 1 minutes
  });

  const {
    data: products = [],
    refetch: refetchProducts,
    isLoading: isProductsLoading,
    error: isProductsError,
  } = useQuery({
    queryKey: ["products"] || [],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/products/getProducts`,
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
    cacheTime: 2 * (60 * 1000), // cache data for 2 minutes
    staleTime: 1 * (60 * 1000), // consider data fresh for 1 minutes
  });

  console.log("products", products);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const stateInfo = {
    allHouse,
    setIsCreateModalOpen,
    isCreateModalOpen,
    userInfo,
    refetchAllHouse,
    isAllHouseLoading,
    filteredProperties,
    setFilteredProperties,
    myProperties,
    refetchMyProperties,
    products,
    page,
    limit,
    setPage,
    setLimit,
    sortOrder,
    setSortOrder,
  };

  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};
export default StateProvider;
