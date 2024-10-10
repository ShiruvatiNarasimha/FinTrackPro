import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
      cardPurchaseSummary
    </div>
  );
};

export default CardPurchaseSummary;
