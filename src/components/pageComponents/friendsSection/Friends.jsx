import { use } from "react";
import ShowAllFriends from "./ShowAllFriends";

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);

  return (
    <>
      <ShowAllFriends friends={friends}></ShowAllFriends>
    </>
  );
};

export default Friends;
