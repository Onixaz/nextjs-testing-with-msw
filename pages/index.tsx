import React from "react";
import { NextPage } from "next";
import HomePageContainer from "@containers/home";
import Layout from "@components/layout";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HomePageContainer />
    </Layout>);
};

export default HomePage;
