import React,{useState} from "react";
import { Principal} from "@dfinity/principal";
import {token2_backend} from "../../../declarations/token2_backend";


function Balance() {

  const [inputValue,setInputValue] = useState("");
  const [balanceResult,setBalanceResult] = useState("");
  const [symb,setSymb] = useState("");
  const [isHiddden,setIsHidden] = useState(true);
  
  async function handleClick() {
    // console.log("Balance Button Clicked");
    const principal = Principal.fromText(inputValue);
    const balance = await token2_backend.balanceOf(principal);
    setBalanceResult(balance.toLocaleString());
    const symbol = await token2_backend.getSymbol();
    setSymb(symbol);
    setIsHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHiddden}>This account has a balance of {balanceResult} {symb}.</p>
    </div>
  );
}

export default Balance;
