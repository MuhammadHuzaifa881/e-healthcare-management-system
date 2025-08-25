import { Badge } from "@/components/ui/badge";

export  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600 text-white">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-500 hover:bg-gray-600 text-white">Inactive</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
