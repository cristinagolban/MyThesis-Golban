import { useRef } from "react";
import { Text, Group, Button, createStyles, Title } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons";
import { DndList } from "./existingDocuments";

const data = [
    {
      
      "type": "PDF",
      "name": "Documentatie initiala"
    },
    {
      "type": "pptx",
      "name": "Prezentare"
    }
  ]
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    backgroundColor:'green',
    width: 250,
    left: "calc(50% - 125px)",
    bottom: -20,
  },
}));

const UploadContent = () => {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper}>
      <Title color="white" align="center">Documente</Title>
      <DndList data={data} />
      <br></br><br></br>
      <Title color="white" align="center">Adauga document</Title>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload
                size={50}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={50}
                color={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text color="white" align="center" weight={700} size="lg" mt="xl">
            <Dropzone.Accept>Adauga fisiere aici</Dropzone.Accept>
            <Dropzone.Reject>fisiere PDF</Dropzone.Reject>
          </Text>
          <Text align="center" size="xs" mt="xs" color="dimmed">
          Adauga fisiere aici. Doar fisiere{" "}
            <i>.pdf</i> .
          </Text>
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size="sm"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Selecteaza fisier
      </Button>
    </div>
  );
};

export default UploadContent;
