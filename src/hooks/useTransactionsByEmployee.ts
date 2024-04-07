import { useCallback, useState } from "react";
import { Transaction } from "../utils/types";
import { TransactionsByEmployeeResult } from "./types";
import { useCustomFetch } from "./useCustomFetch";

export function useTransactionsByEmployee(): TransactionsByEmployeeResult {
  console.log("Inside useTransactionsByEmployee hook");

  const { fetchWithCache, loading } = useCustomFetch();
  const [transactionsByEmployee, setTransactionsByEmployee] = useState<Transaction[] | null>(null);

  const fetchById = useCallback(
    async (employeeId: string | null) => {
      if (employeeId === null) {

        // If "All employees" option is selected, load all transactions without filtering by employee
        console.log("All employees option selected. Loading all transactions...");
        const allTransactions = await fetchWithCache<Transaction[]>("allTransactions");
        console.log("Fetched transactions:", allTransactions);

        setTransactionsByEmployee(allTransactions);
        return Promise.resolve(); ; // Return early to avoid further execution
      }

      // Fetch transactions by employee
      const data = await fetchWithCache<Transaction[]>( "transactionsByEmployee", { employeeId });

      setTransactionsByEmployee(data);
    },
    [fetchWithCache]
  );

  const invalidateData = useCallback(() => {
    setTransactionsByEmployee(null);
  }, []);

  return { data: transactionsByEmployee, loading, fetchById, invalidateData };
}
