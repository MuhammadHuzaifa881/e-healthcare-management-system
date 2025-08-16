import React, { useState } from "react";

import InvoiceHeader from "@/components/page-sections/billing-and-payments/invoices/invoice-header/invoice-cards";
import InvoiceCards from "@/components/page-sections/billing-and-payments/invoices/invoice-cards/invoice-cards";
import InvoiceTable from "@/components/page-sections/billing-and-payments/invoices/invoice-table/invoice-table";

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 8;

  // Sample invoice data for e-healthcare system
  const invoices = [
    {
      id: "INV-2023-001",
      patient: "John Doe",
      date: "2023-10-15",
      dueDate: "2023-11-15",
      amount: 250.75,
      status: "paid",
      services: ["Consultation", "Blood Test"],
    },
    {
      id: "INV-2023-002",
      patient: "Jane Smith",
      date: "2023-10-16",
      dueDate: "2023-11-16",
      amount: 420.5,
      status: "pending",
      services: ["MRI Scan", "Doctor Fee"],
    },
    {
      id: "INV-2023-003",
      patient: "Robert Johnson",
      date: "2023-10-17",
      dueDate: "2023-11-17",
      amount: 180.0,
      status: "paid",
      services: ["Consultation"],
    },
    {
      id: "INV-2023-004",
      patient: "Emily Davis",
      date: "2023-10-18",
      dueDate: "2023-11-18",
      amount: 375.25,
      status: "overdue",
      services: ["X-Ray", "Lab Tests"],
    },
    {
      id: "INV-2023-005",
      patient: "Michael Wilson",
      date: "2023-10-19",
      dueDate: "2023-11-19",
      amount: 150.0,
      status: "pending",
      services: ["Follow-up Visit"],
    },
    {
      id: "INV-2023-006",
      patient: "Sarah Brown",
      date: "2023-10-20",
      dueDate: "2023-11-20",
      amount: 295.5,
      status: "paid",
      services: ["Ultrasound", "Specialist Fee"],
    },
    {
      id: "INV-2023-007",
      patient: "David Miller",
      date: "2023-10-21",
      dueDate: "2023-11-21",
      amount: 210.75,
      status: "overdue",
      services: ["ECG", "Consultation"],
    },
    {
      id: "INV-2023-008",
      patient: "Lisa Taylor",
      date: "2023-10-22",
      dueDate: "2023-11-22",
      amount: 180.0,
      status: "pending",
      services: ["Vaccination"],
    },
    {
      id: "INV-2023-009",
      patient: "James Anderson",
      date: "2023-10-23",
      dueDate: "2023-11-23",
      amount: 320.0,
      status: "paid",
      services: ["Physical Therapy", "Massage"],
    },
    {
      id: "INV-2023-010",
      patient: "Patricia Thomas",
      date: "2023-10-24",
      dueDate: "2023-11-24",
      amount: 275.5,
      status: "paid",
      services: ["Dental Checkup", "Cleaning"],
    },
  ];

  // Filter invoices based on search term and status
  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.patient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );
  const totalPages = Math.ceil(filteredInvoices.length / invoicesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto px-4 py-8 bg-blue-100 min-h-screen rounded-lg">
      <InvoiceHeader />
      <InvoiceCards invoices={invoices} />
      
      <InvoiceTable
        paginate={paginate}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        currentInvoices={currentInvoices}
        totalPages={totalPages}
        statusFilter={statusFilter}
        filteredInvoices={filteredInvoices}
        setStatusFilter={setStatusFilter}
        currentPage={currentPage}
        invoicesPerPage={invoicesPerPage}
        indexOfFirstInvoice={indexOfFirstInvoice}
        indexOfLastInvoice={indexOfLastInvoice}
        invoices={invoices}
      />
    </div>
  );
};

export default Invoices;
