import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  // const value = "some value";
  // Era só para mostrar que não importa o quanto aninhado esteja, o outlet passa dados com facilidade.
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet
          // context={{ value }}
          // Era só para mostrar que não importa o quanto aninhado esteja, o outlet passa dados com facilidade.
          />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
