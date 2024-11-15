import * as React from "react";
import { Header } from "./Components/Header/Header";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Spaces from "./Components/Spaces/Spaces";
import Footer from "./Components/Footer/Footer";

export interface IAppProps {}

export function MainPage(props: IAppProps) {
  return (
    <div className="main-page__container">
      <Header></Header>
      <About></About>
      <Features></Features>
      <Spaces></Spaces>
      <Footer></Footer>
    </div>
  );
}
