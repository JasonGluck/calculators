const initialState = {
  initial: 10000,
  rate: 3.00,
  monthlyPayment: 1000,
  monthlyExpenditure: 500
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INITIAL':
      return {
        ...state,
        initial: action.val
      };
    case 'SET_RATE':
      return {
        ...state,
        rate: action.val
      };
    case 'SET_MONTHLY_PAYMENT':
      return {
        ...state,
        years: action.val
      };
    case 'SET_MONTHLY_EXPENDITURE':
      return {
        ...state,
        monthlyOverpayment: action.val
      };
    default:
      return state;
  }
}

export const setInitial = val => ({ type: 'SET_INITIAL', val });
export const setRate = val => ({ type: 'SET_RATE', val });
export const setMonthlyPayment = val => ({ type: 'SET_MONTHLY_PAYMENT', val });
export const setMonthlyExpenditure = val => ({ type: 'SET_MONTHLY_EXPENDITURE', val });
