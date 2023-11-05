import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RentManagement = () => {
  const invoices = [
    {
      id: "1",
      status: "Paid",
      method: "Credit Card",
      date: "1/1/2023",
      amount: "15800",
    },
    {
      id: "2",
      status: "Paid",
      method: "Credit Card",
      date: "1/2/2023",
      amount: "16200",
    },
    {
      id: "3",
      status: "Paid",
      method: "Credit Card",
      date: "1/3/2023",
      amount: "16500",
    },
    {
      id: "4",
      status: "DUE",
      method: "PAY",
      date: "1/4/2023",
      amount: "17100",
    },
    {
      id: "5",
      status: "DUE",
      method: "PAY",
      date: "1/5/2023",
      amount: "17600",
    },
  ];

  return (
    <div className="container-sm mx-auto min-h-[80vh] space-y-5">
      <h1 className="text-3xl font-semibold text-center">Rent Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices?.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{invoice?.status}</TableCell>
              <TableCell>
                {invoice?.method === "PAY" ? (
                  <button className="w-20 h-8 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
                    Pay
                  </button>
                ) : (
                  invoice?.method
                )}
              </TableCell>
              <TableCell className="text-right">{invoice?.date}</TableCell>
              <TableCell className="text-right">{invoice?.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RentManagement;
