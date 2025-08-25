import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiEdit2,
  FiTrash2,
  FiTool,
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiDownload,
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
import DeleteModal from "@/components/modals/common/delete-modal";

const EquipmentTable = ({
  paginate,
  totalPages,
  currentEquipment,
  indexOfFirstEquipment,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  filteredEquipment,
  equipmentPerPage,
  currentPage,
  setCurrentPage,
  indexOfLastEquipment,
  onDeleteEquipment,
  setEditData,
  setAddEquipmentModalOpen
}) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Enhanced Status badge component with custom background colors
  const StatusBadge = ({ status }) => {
    const statusMap = {
      operational: {
        text: "Operational",
        className: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
        icon: <FiCheckCircle className="h-3 w-3" />,
      },
      maintenance: {
        text: "Maintenance",
        className: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
        icon: <FiTool className="h-3 w-3" />,
      },
      needs_repair: {
        text: "Needs Repair",
        className: "bg-red-100 text-red-800 border-red-200 hover:bg-red-200",
        icon: <FiAlertCircle className="h-3 w-3" />,
      },
      out_of_service: {
        text: "Out of Service",
        className: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
        icon: <FiAlertCircle className="h-3 w-3" />,
      },
    };

    return (
      <Badge
        variant="outline"
        className={`flex items-center gap-1 ${statusMap[status].className}`}
      >
        {statusMap[status].icon}
        {statusMap[status].text}
      </Badge>
    );
  };

  // Maintenance status component
  const MaintenanceStatus = ({ last, next }) => {
    const today = new Date();
    const nextDate = new Date(next);
    const daysUntil = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
    const isOverdue = daysUntil <= 0;
    const isDueSoon = daysUntil <= 30 && daysUntil > 0;

    return (
      <div className="flex items-center gap-2">
        <FiCalendar className={`h-4 w-4 ${isOverdue ? "text-red-500" : isDueSoon ? "text-amber-500" : "text-gray-500"}`} />
        <span className={
          isOverdue ? "text-red-600 font-medium" : 
          isDueSoon ? "text-amber-600 font-medium" : ""
        }>
          {isOverdue ? "Overdue" : `${daysUntil}d`}
        </span>
      </div>
    );
  };

  // Handle delete confirmation
  const handleDeleteConfirm = async () => {
    if (!selectedEquipment) return;

    setIsDeleting(true);
    try {
      // await onDeleteEquipment(selectedEquipment.id);
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting equipment:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  // Open delete modal
  const openDeleteModal = (equipment) => {
    setSelectedEquipment(equipment);
    setDeleteModalOpen(true);
  };

  const handleEdit=(data)=>{
    console.log("hanlde edit data",data)
    setEditData(data);
    setAddEquipmentModalOpen(true);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header with title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Equipment Inventory</h2>
        <p className="text-gray-500 mt-1">Manage and track all medical equipment</p>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by equipment name, type, or serial number..."
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
                  : statusFilter
                      .split("_")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("all")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                All Status
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("operational")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Operational
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("maintenance")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                Maintenance
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("needs_repair")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                Needs Repair
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setStatusFilter("out_of_service")}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                Out of Service
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
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <FiDownload className="h-4 w-4" />
                Export Inventory
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <FiTool className="h-4 w-4" />
                Maintenance Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Equipment Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[120px]">Equipment ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Serial</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Maintenance</TableHead>
              <TableHead>Warranty</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEquipment.length > 0 ? (
              currentEquipment.map((item) => {
                const warranty = new Date(item.warranty);
                const today = new Date();
                const warrantyExpiring =
                  warranty - today < 180 * 24 * 60 * 60 * 1000;

                return (
                  <TableRow
                    key={item.id}
                    className={`hover:bg-gray-50/50 ${
                      item.status === "needs_repair" ? "bg-red-50" :
                      item.status === "maintenance" ? "bg-amber-50" :
                      item.status === "out_of_service" ? "bg-gray-50" : ""
                    }`}
                  >
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell className="font-semibold">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize bg-gray-100">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.serial}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>
                      <StatusBadge status={item.status} />
                    </TableCell>
                    <TableCell>
                      <MaintenanceStatus
                        last={item.lastMaintenance}
                        next={item.nextMaintenance}
                      />
                    </TableCell>
                    <TableCell
                      className={
                        warrantyExpiring ? "text-red-600 font-medium" : ""
                      }
                    >
                      {item.warranty}
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
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={()=>handleEdit(item)}>
                            <FiEdit2 className="h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer" onClick={()=>handleEdit(item)}>
                            <FiTool className="h-4 w-4" />
                            Log Maintenance
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="flex items-center gap-2 text-red-600 cursor-pointer"
                            onClick={() => openDeleteModal(item)}
                          >
                            <FiTrash2 className="h-4 w-4" />
                            Decommission
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-12">
                  <div className="flex flex-col items-center justify-center">
                    <FiTool className="h-12 w-12 text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium">No equipment found</p>
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
      {filteredEquipment.length > equipmentPerPage && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstEquipment + 1} to{" "}
            {Math.min(indexOfLastEquipment, filteredEquipment.length)} of{" "}
            {filteredEquipment.length} equipment
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

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Decommission Equipment"
        description={`Are you sure you want to decommission ${selectedEquipment?.name} (ID: ${selectedEquipment?.id})? This action cannot be undone.`}
        confirmText="Decommission"
        isLoading={isDeleting}
      />
    </div>
  );
};

export default EquipmentTable;