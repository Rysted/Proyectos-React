import React from "react";
import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9999,
  },
  {
    name: "London",
    sales: 7639,
  },
  {
    name: "Hong Kong",
    sales: 6249,
  },
  {
    name: "San Francisco",
    sales: 5139,
  },
  {
    name: "Singapore",
    sales: 9563,
  },
  {
    name: "Zurich",
    sales: 999,
  },
];

const ChartDonut = () => {
  return (
    <Card>
      <Title>Sales by City</Title>
      <DonutChart
        data={cities}
        category="sales"
        dataKey="name"
        marginTop="mt-6"
        colors={["yellow", "violet", "indigo", "rose", "cyan", "green"]}
      />
    </Card>
  );
};

export default ChartDonut;
