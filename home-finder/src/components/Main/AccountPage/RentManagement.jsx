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
      status: "Paid",
      method: "Credit Card",
      date: "1/4/2023",
      amount: "17100",
    },
    {
      id: "5",
      status: "Paid",
      method: "Credit Card",
      date: "1/5/2023",
      amount: "16900",
    },
    {
      id: "6",
      status: "Paid",
      method: "Credit Card",
      date: "1/6/2023",
      amount: "17100",
    },
    {
      id: "7",
      status: "Paid",
      method: "Credit Card",
      date: "1/5/2023",
      amount: "17250",
    },
    {
      id: "8",
      status: "Paid",
      method: "Credit Card",
      date: "1/8/2023",
      amount: "17600",
    },
    {
      id: "9",
      status: "DUE",
      method: "Credit Card",
      date: "1/9/2023",
      amount: "17500",
    },
    {
      id: "10",
      status: "DUE",
      method: "Credit Card",
      date: "1/10/2023",
      amount: "17350",
    },
    {
      id: "11",
      status: "DUE",
      method: "PAY",
      date: "1/11/2023",
      amount: "-",
    },
    {
      id: "12",
      status: "DUE",
      method: "PAY",
      date: "1/12/2023",
      amount: "-",
    },
  ];

  return (
    <div className="container-sm mx-auto min-h-[80vh] space-y-5">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-start">Rent Management</h1>
        <p>
          Manage your rent payments and invoices. You can pay your rent from
          here.
        </p>
      </div>

      <div>
        <div className="text-4xl font-bold">2023</div>
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
      <div>
        <div className="text-4xl font-bold">2022</div>
        <div className="flex flex-col">...</div>
      </div>
      <div>
        <div className="text-4xl font-bold">2021</div>
        <div className="flex flex-col">...</div>
      </div>
    </div>
  );
};

export default RentManagement;
