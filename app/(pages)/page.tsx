import React from "react";
import { Container } from "@mui/material"; // Import Container from MUI
import Home from "@/app/(pages)/widgets/Home";
import How_it_works from "./widgets/How_it_works";
import Hero from "@/app/(pages)/widgets/Hero";
import Features from "@/app/(pages)/widgets/Features";
import Founders from "@/app/(pages)/widgets/Founders";
import HomeSearch from "@/app/(pages)/widgets/HomeSearch";
import PropertiesSection from "@/app/(pages)/widgets/PropertiesSection";
import ScrollDialog from "./widgets/Modal";

function page({
  searchParams: { showAuthDialog, initialPage },
}: {
  searchParams: {
    showAuthDialog: string;
    initialPage: string;
  };
}) {
  const isOpen = showAuthDialog === "true";
  return (
    <>
      <ScrollDialog isOpen={isOpen} initialPage={initialPage} />
      <HomeSearch /> {/* Use Container with maxWidth */}
      <Container maxWidth="xl">
      <Home />
      </Container>
      <Features />
      <Container maxWidth="xl">
        <Hero />
      </Container>
      <Container maxWidth="xl">
        <How_it_works />
      </Container>
      <PropertiesSection />
      <Container maxWidth="xl">
        <Founders />
      </Container>
    </>
  );
}

export default page;
