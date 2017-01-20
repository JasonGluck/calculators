import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../ducks/creditCard';

export default connect(({ creditCard }) => ({ creditCard }))(
  ({ creditCard: { initial, rate, monthlyPayment, monthlyExpenditure}, className, dispatch }) => (
    <div className={ className }>
      <div>
        <label>Debt</label>
        <input type="text" maxLength="10" value={initial} onChange={e=>dispatch(actions.setInitial(e.target.value))} />
      </div>
      <div>
        <label>Rate</label>
        <input type="number" step="0.01" maxLength="10" value={rate} onChange={e=>dispatch(actions.setRate(e.target.value))} />
      </div>
      <div>
        <label>Monthly Payment</label>
        <input type="text" value={monthlyPayment} onChange={e=>dispatch(actions.setMonthlyPayment(e.target.value))} />
      </div>
      <div>
        <label>Monthly Expenditure</label>
        <input type="text" value={monthlyExpenditure} onChange={e=>dispatch(actions.setMonthlyExpenditure(e.target.value))} />
      </div>
    </div>
));
