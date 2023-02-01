import { AppShell } from "@mantine/core";
import { Navbar, ProfessorContent } from "../components";

const ProfessorPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      styles={(theme) => ({
        main: {
          display: "flex",
          width:'100%',
          height:'100%',
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <ProfessorContent></ProfessorContent>
    </AppShell>
  );
};

export default ProfessorPage;
