export interface CashState {
    currentBalance: number;
    overdraft: number;
}

export const initialCashState: CashState = {
    currentBalance: 0,
    overdraft: 0
};
