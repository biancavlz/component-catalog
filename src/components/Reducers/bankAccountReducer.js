import { useReducer } from "react";

function accountReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.amount };
    case "withdraw":
      return { ...state, balance: state.balance - action.amount };
    case "reset":
      return { balance: 0 };
    default:
      throw new Error("Unknow action");
  }
}

const initialState = {
  balance: 0,
};

function BankAccountReducer() {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  return (
    <div>
      <p>Balance: ${state.balance}</p>
      <button onClick={() => dispatch({ type: "deposit", amount: 100 })}>
        Deposit
      </button>

      <button onClick={() => dispatch({ type: "withdraw", amount: 50 })}>
        Withdraw
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default BankAccountReducer;
