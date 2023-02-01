import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  Menu,
} from "@mantine/core";
import { getResponsiveValue } from "@mantine/core/lib/Box/style-system-props/get-responsive-value/get-responsive-value";
import { RichTextEditor } from "@mantine/rte";
import {
  IconChevronDown,
  IconCalendar,
  IconBookmark,
  IconTrash,
} from "@tabler/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";

const initialValue =
  "Scrie aici...";
const useStyles = createStyles((theme) => ({
  container: {
    maxHeight: 500,
  },
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'green'
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));


const WorkContent = () => {
  const { classes, theme } = useStyles();
  const menuIconColor = 'green';
  const [value, onChange] = useState(initialValue);
  return (
    
    <Container className={classes.container} >
      <h1 style={{color:'white'}}>Scrie aici documentatia lucrarii tale de licenta!</h1>
      <RichTextEditor value={value} onChange={onChange} id="rte"  />


      <Group noWrap spacing={0} >
        <Link to={AppRoutes.DOCUMENTS}>
          <Button className={classes.button}>Trimite</Button>
        </Link>
        <Menu transition="pop" position="bottom-end">
          <Menu.Target >
            <ActionIcon
              variant="filled"
              color={"green"}
              size={36}
              className={classes.menuControl}
            >
              <IconChevronDown size={16} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown >
            <Menu.Item
              icon={
                <IconBookmark size={16} stroke={1.5} color={menuIconColor} />
              }
            >
              Salveaza
            </Menu.Item>
            <Menu.Item
              icon={<IconTrash size={16} stroke={1.5} color={menuIconColor} />}
            >
              Sterge
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Container>
  );
};

export default WorkContent;
