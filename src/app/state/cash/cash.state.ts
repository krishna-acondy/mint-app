export interface CashState {
    currentBalance: number;
    overdraft: number;
    hasErrored: boolean;
    error: {message: string, statusCode: number };
}

export const initialCashState: CashState = {
    currentBalance: 0,
    overdraft: 0,
    hasErrored: false,
    error: {message: '', statusCode: 200 }
};
