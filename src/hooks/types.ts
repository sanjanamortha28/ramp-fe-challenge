import { Employee, PaginatedResponse, Transaction } from "../utils/types";

export type UseTypeBaseResult<TValue> = {
  data: TValue | null;
  loading: boolean;
  invalidateData: () => void;
};

export type UseTypeBaseAllResult<TValue> = UseTypeBaseResult<TValue> & {
  fetchAll: () => Promise<void>;
};

export type UseTypeBaseByIdResult<TValue> = UseTypeBaseResult<TValue> & {
  fetchById: (id: string) => Promise<void>;
};

export type EmployeeResult = UseTypeBaseAllResult<Employee[] | null>;

export type PaginatedTransactionsResult = UseTypeBaseAllResult<PaginatedResponse<Transaction[]> | null>;

export type TransactionsByEmployeeResult = UseTypeBaseByIdResult<Transaction[] | null>;
