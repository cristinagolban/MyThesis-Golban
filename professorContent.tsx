import { Carousel } from "@mantine/carousel";

import {
  Button,
  createStyles,
  Paper,
  Title,
  Text,
  useMantineTheme,
  Badge,
  Card,
  Group,
  Image,
  Grid,
  Modal,
  List,
  StarIcon,
  HoverCard,
} from "@mantine/core";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import img1 from "../img1.jpeg";
import img2 from "../img2.jpeg";
import img3 from "../img3.jpeg";
import img4 from "../img4.jpeg";
import ModalContent from "./modalContent";
const useStyles = createStyles((theme) => ({
  title2: {
    fontSize: 34,
    color: "white",
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  other: {
    marginTop: "100px",
  },
  big: {
    height: "100%",
    marginLeft: "15%",
    width: "85%",
    overflow: "hidden",
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card2({ image, title, category }: CardProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Trimite un email!"
      >
        <ModalContent />
      </Modal>
      <Button variant="white" color="dark" onClick={() => setOpened(true)}>
        
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: img1,
    title: "Prof. Ionescu Dan",
    category: "Facultatea de Matematica si Informatica",
  },
  {
    image: img2,
    title: "Prof. Popescu Dana",
    category: "Facultatea de Matematica si Informatica",
  },
  {
    image: img3,
    title: "Prof. Ion Gheorge",
    category: "Facultatea de Stiinte Politice",
  },
  {
    image: img4,
    title: "Prof. Barbu Simona",
    category: "Facultatea de Matematica si Informatica",
  },
];

const ProfessorContent = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card2 {...item} />
    </Carousel.Slide>
  ));
  return (
    <div className={classes.big}>
      <div>
        <Title  className={classes.title2} align="center" >
          Profesori si teme de licenta
        </Title>
        
      </div>
      <div className={classes.other}>
        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
          <Grid.Col span={3}>
            <Card>
              <Card.Section>
                <Image src={img4} height={250}  />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Badge color="green" variant="light" fullWidth>
                  Prof Dr. Popescu Dana
                </Badge>
              </Group>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'lightgreen'}}><Text color="black" >Tema 1</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'lightgreen'}}><Text color="black" >Tema 2</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'lightgreen'}}><Text color="black" >Tema 3</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 4</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 5</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Trimite un email"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="outline"
                color="green"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Intreaba despre o tema
              </Button>
            </Card>


          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={img1} height={250} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Badge color="green" variant="light" fullWidth>
                  Prof Dr. Barbu Simona
                </Badge>
              </Group>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 1</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 2</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Trimite un email"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="outline"
                color="green"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Intreaba despre o tema
              </Button>
            </Card>
          </Grid.Col>


          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={img2} height={250} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Badge color="red" variant="light" fullWidth>
                  Prof Popescu Ion
                </Badge>
              </Group>

              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 1</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'lightgreen'}}><Text color="black" >Tema 2</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 3</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'red'}}><Text color="black" >Tema 4</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Trimite un email"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="outline"
                color="green"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Intreaba despre o tema
              </Button>
            </Card>
          </Grid.Col>


          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={img3} height={250} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Badge color="red" variant="light" fullWidth>
                  Prof Dinu Ion
                </Badge>
              </Group>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'lightgreen'}}><Text color="black" >Tema 1</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Text size="sm" color="white" >
                <Badge style={{backgroundColor: 'lightgreen'}}><Text color="black" >Tema 2</Text></Badge>
                <br></br>
                Descriere scurta despre aceasta tema care din cauza faptului ca e pe fond verde deschid inseamna ca inca este valabila
              </Text>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Trimite un email"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="outline"
                color="green"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Intreaba despre o tema
              </Button>
            </Card>
          
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default ProfessorContent;
