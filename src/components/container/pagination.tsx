import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  setPage: (newPage: number) => void;
  totalPages: number;
  handleQueryParams?: (newPage: number) => void;
  className?: string;
}

const Pagination = ({
  page,
  setPage,
  totalPages,
  handleQueryParams,
  className,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (handleQueryParams) {
      handleQueryParams(newPage);
    }
  };

  return (
    <div className={cn("flex items-center space-x-2 font-poppins", className)}>
      {/* Button Previous */}
      <Button
        className="rounded-[5px] border border-secondary-blue-1 p-2.5 text-grayscale-dark-2 hover:bg-grayscale-gray-1"
        variant={"ghost"}
        size={"icon"}
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <IoIosArrowForward size={16} className="rotate-180" />
      </Button>

      {/* Page Information */}

      <span className="text-nowrap text-base text-grayscale-dark-2">
        Page <span className="font-medium">{page}</span> of{" "}
        <span className="font-medium">{totalPages}</span>
      </span>

      {/* Button Next */}
      <Button
        className="rounded-[5px] border border-secondary-blue-1 p-2.5 text-grayscale-dark-2 hover:bg-grayscale-gray-1"
        variant={"ghost"}
        size={"icon"}
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <IoIosArrowForward size={16} />
      </Button>
    </div>
  );
};

export default Pagination;
