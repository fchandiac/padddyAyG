import AppDataGrid from "@/components/appDataGrid/AppDataGrid";
import React from "react";

interface Transaction {
  id: number;
  date: Date;
  description: string;
  amount: number;
  balance: number;
  type: ["openAccount" | "Anticipo" | "Descuento" | "Pago" | "Cierre"];
}

const transactionsList = [
  {
    id: 1,
    date: new Date(),
    description: "Apertura de cuenta",
    amount: 0,
    balance: 0,
    type: "openAccount",
  },
  {
    id: 2,
    date: new Date(),
    description: "Anticipo",
    amount: 100,
    balance: 100,
    type: "Anticipo",
  },
  {
    id: 3,
    date: new Date(),
    description: "Descuento",
    amount: 10,
    balance: 90,
    type: "Descuento",
  },
  {
    id: 4,
    date: new Date(),
    description: "Pago",
    amount: 50,
    balance: 40,
    type: "Pago",
  },
  {
    id: 5,
    date: new Date(),
    description: "Cierre",
    amount: 40,
    balance: 0,
    type: "Cierre",
  },
];

export default function page() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "date", headerName: "Fecha", width: 200 },
    { field: "description", headerName: "Descripción", width: 200 },
    { field: "amount", headerName: "Monto", width: 200 },
    { field: "balance", headerName: "Saldo", width: 200 },
    { field: "type", headerName: "Tipo", width: 200 },
  ];
  return (
    <>
      <AppDataGrid rows={transactionsList} columns={columns} />
    </>
  );
}
