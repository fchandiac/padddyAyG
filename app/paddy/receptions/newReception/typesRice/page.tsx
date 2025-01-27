import AppDataGrid from "@/components/appDataGrid/AppDataGrid";
import React from "react";



const typesRiceList = [
  {
    id: 1,
    name: "Arroz Blanco",
    description: "Arroz blanco de grano largo",
  },
  {
    id: 2,
    name: "Arroz Integral",
    description: "Arroz integral de grano largo",
  },
  {
    id: 3,
    name: "Arroz Parboilizado",
    description: "Arroz parboilizado de grano largo",
  },
  {
    id: 4,
    name: "Arroz Jazmín",
    description: "Arroz jazmín de grano largo",
  },
];

export default function Page() {
  // Definimos las columnas
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "description", headerName: "Descripción", width: 300 },
  ];

  return (
    <>
    <AppDataGrid  rows={typesRiceList} columns={columns} />

    </>
  );
}
