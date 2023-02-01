import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Grid,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconMessage,
  IconWallpaper,
  IconGuitarPick,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { AppRouter, AppRoutes } from "../navigation";

const mockdata = [
  
    {
      title: "Alege profesorul",
      description:
        "Consulta lista de propuneri si alegeti un profesor.",
      icon: IconUser,
      to: AppRoutes.PROFESSORS,
    },
    {
    title: "Revizuieste sarcinile",
    description:
      "Urmareste-ti progresul urmarind sarcinile indeplinite si cele in curs de implementare.",
    icon: IconGauge,
    to: AppRoutes.TASKS,
  },
 
  
  {
    title: "Documente",
    description: "Incarca si vizualizeaza documente.",
    icon: IconWallpaper,
    to: AppRoutes.DOCUMENTS,
  },
];

const useStyles = createStyles((theme) => ({
  gird: {
    marginTop:"2%"
  },
  title: {
    fontSize: 60,
    color: "white",
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
    paddingBottom:80
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9]
    }`
    
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: 'green',
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const FeaturesCards = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Grid.Col span={4}>
      <Link to={feature.to} className={classes.link}>
        <Card
          key={feature.title}
          shadow="md"
          radius="md"
          className={classes.card}
          p="xl"
        >
          <feature.icon size={50} stroke={2} color={'green'} />
          <hr></hr>
          <Text size="lg" weight={500} className={classes.cardTitle} >
            {feature.title}
          </Text>
          
          <Text size="sm" color="dimmed" mt="sm">
            {feature.description}
          </Text>
        </Card>
      </Link>
    </Grid.Col>
  ));
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        MyThesis
      </Title>

      <Grid className={classes.gird} grow>{features}</Grid>
    </Container>
  );
};

export default FeaturesCards;
