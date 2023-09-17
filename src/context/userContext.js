import { useContext, useEffect, useState, createContext } from "react";

export const userContext = createContext({ data: [] });

export const UserContext = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((result) => setData(result));
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <userContext.Provider value={{ data }}>{children}</userContext.Provider>
  );
};

export const useUserContext = () => {
  const { data } = useContext(userContext);
  return { data };
};
