import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiPrinter,
  FiMail,
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
} from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const InvoiceTable = ({
  paginate,
  setSearchTerm,
  searchTerm,
  currentInvoices,
  totalPages,
  statusFilter,
  filteredInvoices,
  invoicesPerPage,
  indexOfFirstInvoice,
  indexOfLastInvoice,
  setStatusFilter,
  currentPage,
  setCurrentPage,
}) => {
  // Enhanced Status badge component with custom colors
  const StatusBadge = ({ status }) => {
    const statusMap = {
      paid: { 
        text: "Paid", 
        className: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200" 
      },
      pending: { 
        text: "Pending", 
        className: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200" 
      },
      overdue: { 
        text: "Overdue", 
        className: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200" 
      },
    };

    return (
      <Badge variant="outline" className={statusMap[status].className}>
        {statusMap[status].text}
      </Badge>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      {/* Header with title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Invoices</h2>
        <p className="text-gray-500 mt-1">Manage and review all invoices</p>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by invoice ID, patient, or services..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FiFilter className="h-4 w-4" />
                {statusFilter === "all"
                  ? "All Status"
                  : statusFilter.charAt(0).toUpperCase() +
                    statusFilter.slice(1)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("all")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                All
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("paid")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Paid
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("pending")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("overdue")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                Overdue
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="flex items-center gap-2">
                <FiDownload className="h-4 w-4" />
                Export
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <FiPrinter className="h-4 w-4" />
                Print
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <FiMail className="h-4 w-4" />
                Email Selected
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[120px]">Invoice ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentInvoices.length > 0 ? (
              currentInvoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell className="font-medium">{invoice.patient}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {invoice.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-gray-100">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <StatusBadge status={invoice.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          •••
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                          <FiFileText className="h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                          <FiDownload className="h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                          <FiMail className="h-4 w-4" />
                          Send Reminder
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-12">
                  <div className="flex flex-col items-center justify-center">
                    <FiFileText className="h-12 w-12 text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium">No invoices found</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {filteredInvoices.length > invoicesPerPage && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstInvoice + 1} to{" "}
            {Math.min(indexOfLastInvoice, filteredInvoices.length)} of{" "}
            {filteredInvoices.length} invoices
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <FiChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <Button
                  key={number}
                  variant={currentPage === number ? "default" : "outline"}
                  size="sm"
                  onClick={() => paginate(number)}
                  className="h-8 w-8 p-0"
                >
                  {number}
                </Button>
              )
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <FiChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceTable;