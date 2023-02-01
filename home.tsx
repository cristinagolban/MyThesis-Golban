import { AppShell, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FeatureCards, Navbar } from "../components";

const HomePage = () => {

  return (
    <AppShell
      // padding="md"
      // fixed
      navbar={<Navbar />}
      styles={(theme) => ({ 
        main: {
          maxWidth:"85%",
          position:"absolute",
          right:0,
          backgroundColor: 
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },

      })}
    >
    <FeatureCards></FeatureCards>

    </AppShell>
  );
};

export default HomePage;
