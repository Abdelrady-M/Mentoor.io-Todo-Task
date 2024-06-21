import { Badge, Table, Checkbox  } from '@mantine/core';
import { ITodo } from '../../interfaces';
import { useState } from 'react';
import TodosTableActions from '../TodoTableActions/TodosTableActions';

/**
 * Renders a table component displaying a list of todos.
 * @param {Object} props - The component props.
 * @param {ITodo[]} props.todos - The array of todos to be displayed.
 * @return {JSX.Element} The rendered table component.
 */
export function TableField({todos}:{todos:ITodo[]}) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = todos.map((element) => (
    
    <Table.Tr key={element.id} bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}>
         <Table.Td>
            <Checkbox
              aria-label="Select row"
              checked={selectedRows.includes(element.id)}
              onChange={(event) =>
                setSelectedRows(
                  event.currentTarget.checked
                    ? [...selectedRows, element.id]
                    : selectedRows.filter((position) => position !== element.id)
                )
              }
            />

      </Table.Td>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td>
        {element.completed? <Badge color="green">Completed</Badge> : <Badge color="red">Not Completed</Badge>}
        </Table.Td>
      <Table.Td>
        <TodosTableActions/>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table  captionSide="top" withRowBorders={false} highlightOnHover >
      <Table.Caption>A list of your recent Todos.</Table.Caption>
      <Table.Thead>
        <Table.Tr>
        <Table.Th />
          <Table.Th>ID</Table.Th>
          <Table.Th>Title</Table.Th>
          <Table.Th>Completed</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}