import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
} from "@mantine/core";
import { IconWriting } from "@tabler/icons";
import { IconCSharp } from "@tabler/icons";
import { IconBook } from "@tabler/icons";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const ActivityComponent = () => {
  const { classes } = useStyles();

  return (
    <div>
      <br></br><br></br>
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE} color={'green'}>
          <IconWriting size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Lucrare scrisa
        </Text>
        <Progress value={40} mt={5} color={'green'}/>

        <Group position="apart" mt="md" >
          <Badge size="sm" color={'green'}>0pg</Badge>
          <Badge size="sm" color={'green'}>10pg</Badge>
          <Badge size="sm" color={'green'}>20pg</Badge>
          <Badge size="sm" color={'green'}>30pg</Badge>
          <Badge size="sm" color={'green'}>40pg</Badge>
        </Group>
      </Paper>
      <br></br><br></br>
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3} >
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE} color={'green'}>
          <IconCSharp size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Codul implementat
        </Text>

        <Progress value={80} mt={5} color={'green'}/>

        <Group position="apart" mt="md">
          <Badge size="sm" color={'green'}>Faza initiala</Badge>
          <Badge size="sm" color={'green'}>Implementare minima</Badge>
          <Badge size="sm" color={'green'}>Testare</Badge>
          <Badge size="sm" color={'green'}>Finalizat</Badge>
        </Group>
      </Paper>
      <br></br><br></br>
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE} color={'green'}>
          <IconBook size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Documente incarcate
        </Text>
        
        <Progress value={33} mt={5} color={'green'} />

        <Group position="apart" mt="md">
          <Badge size="sm" color={'green'}>1</Badge>
          <Badge size="sm" color={'green'}>2</Badge>
          <Badge size="sm" color={'green'}>3</Badge>
        </Group>
      </Paper>
    </div>
  );
};

export default ActivityComponent;
