import { Accordion, Button, Title } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";
const ModalContent = () => {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Accordion
      variant="filled"
      chevronPosition="left"
      defaultValue="customization"
    >
     <Title>profesor@gmail.com</Title>
    </Accordion>
  );
};

export default ModalContent;
