import { Suspense } from "react";

import Loader from "../../components/loader/Loader";
import Banner from "../../components/pageComponents/Banner";
import Friends from "../../components/pageComponents/friendsSection/Friends";
import SummaryCard from "../../components/pageComponents/SummaryCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <SummaryCard friendsPromise={friendsPromise}></SummaryCard>
      <Suspense fallback={<Loader></Loader>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
    </>
  );
};

export default HomePage;
