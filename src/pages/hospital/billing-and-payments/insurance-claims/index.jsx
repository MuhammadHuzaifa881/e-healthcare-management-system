import React, { useState } from "react";
import InsuranceHeader from "@/components/page-sections/hospital/billing-and-payments/insurance-claims/insurance-header/insurance-header";
import InsuranceCards from "@/components/page-sections/hospital/billing-and-payments/insurance-claims/insurance-cards/insurance-cards";
import InsuranceTable from "@/components/page-sections/hospital/billing-and-payments/insurance-claims/insurance-table/insurance-table";
import AddInsuranceClaim from "@/components/modals/add-insurance-claim";
import { insuranceClaims } from "@/constants/hospital/billing-and-payments/invoices-claims";

const InsuranceClaims = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const claimsPerPage = 8;

  // Filter claims based on search term and status
  const filteredClaims = insuranceClaims.filter((claim) => {
    const matchesSearch =
      claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || claim.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const indexOfLastClaim = currentPage * claimsPerPage;
  const indexOfFirstClaim = indexOfLastClaim - claimsPerPage;
  const currentClaims = filteredClaims.slice(
    indexOfFirstClaim,
    indexOfLastClaim
  );
  const totalPages = Math.ceil(filteredClaims.length / claimsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 rounded-lg">
      <InsuranceHeader onNewClaimClick={() => setIsClaimModalOpen(true)} />
      <InsuranceCards claims={insuranceClaims} />
      <InsuranceTable
        currentClaims={currentClaims}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        paginate={paginate}
        filteredClaims={filteredClaims}
        claimsPerPage={claimsPerPage}
        indexOfFirstClaim={indexOfFirstClaim}
        indexOfLastClaim={indexOfLastClaim}
        setEditData={setEditData}
        editData={editData}
        setIsClaimModalOpen={setIsClaimModalOpen}
      />

      {/* add insurance claim modal */}
      <AddInsuranceClaim
        open={isClaimModalOpen}
        onOpenChange={setIsClaimModalOpen}
        setEditData={setEditData}
        editData={editData}
      />
    </div>
  );
};

export default InsuranceClaims;
