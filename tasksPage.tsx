import { AppShell } from "@mantine/core";
import { Navbar } from "../components";
import TaskComponent from "../components/taskComponent";

const data = [
  {
    description: "Sa relizez meniul",
    name: "Task1",
    job: "",
    task_name: "Meniu",
    role: "",
  },
  {
    description: "Sa populez baza de date",
    name: "Task2",
    job: "",
    task_name: "DB",
    role: "",
  },
  {
    description: "Sa scriu abstractul si introducerea temei de licenta",
    name: "Task4",
    job: "",
    task_name: "Partea Scrisa",
    role: "",
  },
  {
    description: "Sa caut aplicatii similare si sa fac o comparatie intre acestea si aplicatia mea.",
    name: "Task5",
    job: "",
    task_name: "Comparatie",
    role: "",
  },
  
];

const TaskPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      styles={(theme) => ({
        main: {
          maxWidth: "85%",
          position: "absolute",
          right: 0,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <TaskComponent data={data}></TaskComponent>
    </AppShell>
  );
};

export default TaskPage;
