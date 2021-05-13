import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork/HowMyCoursesWork";
import ReviewsCourses from "../components/Web/ReviewsCourses/ReviewsCourses";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Juan Hervas</title>
        <meta
          name="Home main page"
          content="Home | Juan Hervas"
          data-react-helmet="true"
        ></meta>
      </Helmet>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
      <ReviewsCourses />
    </>
  );
}
