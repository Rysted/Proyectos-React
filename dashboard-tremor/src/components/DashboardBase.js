import { Title, Text, TabList, Tab, Card, ColGrid, Block } from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut";
import TableBase from "./TableBase";

const DashboardBase = () => {
  const [selectedView, setSelectedView] = useState(1);

  return (
    <main className="bg-slate-200 p-6 sm:p-10">
      <Title>Dashboard</Title>
      <Text>Ejemplo de Dashboard con Tremor y React </Text>
      <TabList
        handleSelect={(value) => setSelectedView(value)}
        defaultValue={selectedView}
        marginTop="mt-6"
      >
        <Tab value={1} text="Principal" />
        <Tab value={2} text="Detalles" />
      </TabList>
      {selectedView === 1 ? (
        <>
          <CardGridMap />
          <Block marginTop="mt-6">
            <ChartDonut />
          </Block>
        </>
      ) : (
        <TableBase/>
      )}
    </main>
  );
};

export default DashboardBase;
