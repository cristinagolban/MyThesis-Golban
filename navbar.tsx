import {
  createStyles,
  Navbar,

  UnstyledButton,
  Badge,
  Menu,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSelector,
  IconTrash,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";
import { UserButton } from "./userbutton";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "ForestGreen",
    paddingTop: 0,
    height: "100vh",
    width: "15%",
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `2px solid ${
        theme.colorScheme === "light"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },
  link_main_text: {
    textDecoration:"none"
  },
  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  otherLink: {
    textDecoration: "none",
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },


  collections: {
   
    paddingRight: theme.spacing.md ,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  collectionLink: {
    display: "block",
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "light"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "light" ? theme.white : theme.black,
    },
  },
}));

const links = [
  {  label: "Acasa", to: AppRoutes.HOME },
  {  label: "Profesori", to: AppRoutes.PROFESSORS },
  { label: "Status", to:AppRoutes.ACTIVITY},
  
];

const collections = [
  {  label: "Tasks",  to:AppRoutes.TASKS },
  {  label: "Scrie", to: AppRoutes.WORK },
  {  label: "Incarca documente", to: AppRoutes.DOCUMENTS },
];

const NavbarSearch = () => {
  const { classes } = useStyles();

  const mainLinks = links.map((link) => (
    <Link to={link.to} className={classes.link_main_text}>
      <UnstyledButton key={link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>

          <span style={{ fontSize: "15px" }}>{link.label}</span>
        </div>
       
      </UnstyledButton>
    </Link>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href={collection.to}
      key={collection.label}
      className={classes.collectionLink}
      style={{ fontSize: "15px" }}
    >
      <span style={{ marginRight: 9, fontSize: 16 }}></span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <Navbar p="md" className={classes.navbar}>
          <Navbar.Section className={classes.section}>
            <UserButton
              image="https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100510/50599754-flat-green-pen-and-paper-icon-and-green-circle.jpg"
              name="Golban Belgea Cristina Maria"
              email="FMI">
            </UserButton>
          </Navbar.Section>
        

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.collections}>{collectionLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarSearch;
