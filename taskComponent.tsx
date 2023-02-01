import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Select,
  ScrollArea,
  Checkbox,
} from "@mantine/core";

interface UsersTableProps {
  data: {
    description: string;
    name: string;
    task_name: string;
    role: string;
  }[];
}



const TaskComponent = ({ data }: UsersTableProps) => {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
        <Avatar color="green" radius="xl">
          C
        </Avatar>
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text size="sm" color="dimmed">
              {item.task_name}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Text>{item.description}</Text>
      </td>
     
      <td>
      <Checkbox />
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="md">
        <thead>
          <tr>
            <th><h2>Task-uri</h2></th>
            <th><h2>Descriere</h2></th>
            <th><h2>Stare</h2></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
export default TaskComponent;
