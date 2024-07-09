import { Badge, Table, Checkbox  } from '@mantine/core';
import { ITodo } from '../../types';
import { useState } from 'react';
import TodosTableActions from '../TodoTableActions/TodosTableActions';
import useMongez from '../../shared/hooks/useMongez';
import { trans } from '@mongez/localization';

/**
 * Renders a table component displaying a list of todos.
 * @param {Object} props - The component props.
 * @param {ITodo[]} props.todos - The array of todos to be displayed.
 * @return {JSX.Element} The rendered table component.
 */
export function TableField({todos}:{todos:ITodo[]}) {

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const { toggleTodo } = useMongez();

  const rows = todos.map((element) => (
    
    <Table.Tr key={element.id} bg={selectedRows.includes(element.id) ? 'var(--mantine-color-blue-light)' : undefined}>
         <Table.Td>
            <Checkbox
              aria-label="Select row"
              checked={selectedRows.includes(element.id)}
              onChange={()=>{
                setSelectedRows(
                  selectedRows.includes(element.id)
                   ? selectedRows.filter((position) => position!== element.id)
                    : [...selectedRows, element.id]
                );
                toggleTodo(element.id);
              }}
            />

      </Table.Td>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.title}</Table.Td>
      <Table.Td >
        {element.completed? <Badge color="green"  size="sm">{trans("completed")}</Badge > : <Badge color="red"  size="sm">{trans("incompleted")}</Badge>}
        </Table.Td>
      <Table.Td>
        <TodosTableActions todo={element}/>
      </Table.Td> 
    </Table.Tr>
  ));

  return (
    <Table  captionSide="top" withRowBorders={false} highlightOnHover  >
      <Table.Caption>{trans("tableTitle")}</Table.Caption>
      <Table.Thead>
        <Table.Tr>
        <Table.Th />
          <Table.Th>{trans("id")}</Table.Th>
          <Table.Th>{trans("title")}</Table.Th>
          <Table.Th>{trans("completed")}</Table.Th>
        <Table.Th>{trans("actions")}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{!rows.length? <Table.Tr><Table.Td colSpan={5}>{trans("todoWrong")}</Table.Td></Table.Tr>: rows}</Table.Tbody>
    </Table>
  );
}