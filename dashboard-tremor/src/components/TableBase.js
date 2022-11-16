import { CheckCircleIcon } from '@heroicons/react/24/solid'
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import React from "react";
import data from "../data.json";

const TableBase = () => {
  // console.log(data);
  return (
    <Card marginTop="mt-6">
      <Title>List of data</Title>

      <Table marginTop="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Departament</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, k) => (
            <TableRow key={item.name + k}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Role}</TableCell>
              <TableCell>{item.departement}</TableCell>
              <TableCell>
                <Badge text={item.status} color="teal" icon={CheckCircleIcon}></Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableBase;
