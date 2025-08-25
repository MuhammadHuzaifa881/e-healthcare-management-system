import { useState } from "react";

import InvoiceHeader from "@/components/page-sections/hospital/billing-and-payments/invoices/invoice-header/invoice-cards";
import InvoiceCards from "@/components/page-sections/hospital/billing-and-payments/invoices/invoice-cards/invoice-cards";
import InvoiceTable from "@/components/page-sections/hospital/billing-and-payments/invoices/invoice-table/invoice-table";
import { invoices } from "@/constants/hospital/billing-and-payments/billing-and-payments";

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 10;


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
