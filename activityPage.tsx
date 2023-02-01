import { AppShell } from "@mantine/core";
import { ActivityComponent, Navbar } from "../components";


const ActivityPage = () => {
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
        <ActivityComponent></ActivityComponent>
    </AppShell>
  );
};

export default ActivityPage;
