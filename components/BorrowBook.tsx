"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { borrow } from "@/lib/actions/book";

interface Props {
  bookId: string;
  userId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  bookId,
  userId,
  borrowingEligibility: { isEligible, message },
}: Props) => {
  const router = useRouter();

  const [borrowing, setBorrowing] = useState(false);

  const handleBorrow = async () => {
    if (!isEligible) {
      toast({
        title: "Erorr",
        description: message,
        variant: "destructive",
      });
    }

    setBorrowing(true);

    try {
      const result = await borrow({ bookId, userId });
      if (result.success) {
        toast({
          title: "Success",
          description: "Book borrowed successfully",
        });
        router.push("/my-profile");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while borrowing the book",
        variant: "destructive",
      });
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button
      className="book-overview_btn"
      onClick={handleBorrow}
      disabled={!isEligible || borrowing}
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">
        {borrowing ? "Borrowing" : "Borrow Book"}
      </p>
    </Button>
  );
};
export default BorrowBook;
