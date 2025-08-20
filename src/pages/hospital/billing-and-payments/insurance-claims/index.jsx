import React, { useState } from "react";
import InsuranceHeader from "@/components/page-sections/hospital/billing-and-payments/insurance-claims/insurance-header/insurance-header";
import InsuranceCards from "@/components/page-sections/hospital/billing-and-payments/insurance-claims/insurance-cards/insurance-cards";
import InsuranceTable from "@/components/page-sections/hospital/billing-and-payments/insurance-claims/insurance-table/insurance-table";
import AddInsuranceClaim from "@/components/modals/add-insurance-claim";

const InsuranceClaims = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const claimsPerPage = 8;

  // Sample insurance claim data for e-healthcare system
  const claims = [
    {
      id: "CLM-2023-001",
      patient: "John Doe",
      provider: "MediCare Plus",
      date: "2023-10-15",
      serviceDate: "2023-10-10",
      amount: 1200.75,
      covered: 950.5,
      status: "approved",
      services: ["MRI Scan", "Consultation"],
    },
    {
      id: "CLM-2023-002",
      patient: "Jane Smith",
      provider: "HealthGuard",
      date: "2023-10-16",
      serviceDate: "2023-10-11",
      amount: 850.0,
      covered: 680.0,
      status: "pending",
      services: ["Blood Test", "Urinalysis"],
    },
    {
      id: "CLM-2023-003",
      patient: "Robert Johnson",
      provider: "BlueShield",
      date: "2023-10-17",
      serviceDate: "2023-10-12",
      amount: 450.0,
      covered: 360.0,
      status: "rejected",
      services: ["X-Ray"],
    },
    {
      id: "CLM-2023-004",
      patient: "Emily Davis",
      provider: "MediCare Plus",
      date: "2023-10-18",
      serviceDate: "2023-10-13",
      amount: 2200.25,
      covered: 1760.2,
      status: "approved",
      services: ["Surgery", "Anesthesia"],
    },
    {
      id: "CLM-2023-005",
      patient: "Michael Wilson",
      provider: "HealthGuard",
      date: "2023-10-19",
      serviceDate: "2023-10-14",
      amount: 350.0,
      covered: 280.0,
      status: "pending",
      services: ["Physical Therapy"],
    },
    {
      id: "CLM-2023-006",
      patient: "Sarah Brown",
      provider: "BlueShield",
      date: "2023-10-20",
      serviceDate: "2023-10-15",
      amount: 1800.5,
      covered: 1440.4,
      status: "approved",
      services: ["CT Scan", "Radiologist Fee"],
    },
    {
      id: "CLM-2023-007",
      patient: "David Miller",
      provider: "MediCare Plus",
      date: "2023-10-21",
      serviceDate: "2023-10-16",
      amount: 650.75,
      covered: 520.6,
      status: "rejected",
      services: ["ECG", "Stress Test"],
    },
    {
      id: "CLM-2023-008",
      patient: "Lisa Taylor",
      provider: "HealthGuard",
      date: "2023-10-22",
      serviceDate: "2023-10-17",
      amount: 420.0,
      covered: 336.0,
      status: "pending",
      services: ["Vaccination"],
    },
    {
      id: "CLM-2023-009",
      patient: "James Anderson",
      provider: "BlueShield",
      date: "2023-10-23",
      serviceDate: "2023-10-18",
      amount: 1500.0,
      covered: 1200.0,
      status: "approved",
      services: ["Colonoscopy", "Biopsy"],
    },
    {
      id: "CLM-2023-010",
      patient: "Patricia Thomas",
      provider: "MediCare Plus",
      date: "2023-10-24",
      serviceDate: "2023-10-19",
      amount: 750.5,
      covered: 600.4,
      status: "pending",
      services: ["Dental Surgery"],
    },
  ];

  // Filter claims based on search term and status
  const filteredClaims = claims.filter((claim) => {
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
  return (
    <div className="mx-auto px-4 py-8 bg-blue-300 rounded-lg">
      <InsuranceHeader onNewClaimClick={() => setIsClaimModalOpen(true)} />
      <InsuranceCards claims={claims} />
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
      />

      {/* add insurance claim modal */}
      <AddInsuranceClaim
        open={isClaimModalOpen}
        onOpenChange={setIsClaimModalOpen}
      />
    </div>
  );
};

export default InsuranceClaims;
