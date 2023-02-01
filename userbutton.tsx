import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
  Button,
  Collapse,
  Burger,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export function UserButton({
  image,
  name,
  email,
  icon,
  ...others
}: UserButtonProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar src={image} sx={{ width: 56, height: 56 }}/>

        <div style={{ flex: 1}}>
          <Text size="md" weight={500} color="white">
            {name}
          </Text>

          <Text color="darkgrey" size="sm">
            {email}
          </Text>
        </div>
        
      </Group>
    </UnstyledButton>
  );
}
