import { useState } from "react";

import { toast } from "react-toastify";
import FriendContext from "./FriendContext";

const FriendContextProvider = ({ children }) => {
  const [addTimeLine, setAddTimeLine] = useState([]);

  const handleAddTimeLine = (friend, type) => {
    const newEvent = {
      id: friend.id,
      name: friend.name,
      type: type,
      time: new Date().toLocaleTimeString(),
    };

    setAddTimeLine((prev) => [newEvent, ...prev]);
    toast.success(`Added ${type.toUpperCase()} with ${friend.name}`, {
      autoClose: 2000,
      position: "top-center",
    });
  };

  const data = {
    addTimeLine,
    handleAddTimeLine,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendContextProvider;
