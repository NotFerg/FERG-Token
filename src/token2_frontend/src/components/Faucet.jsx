import React, { useState } from "react";
import { token2_backend } from "../../../declarations/token2_backend";

function Faucet() {
  const [isDisabled, setDisabled] = useState(false);
  const [buttonText,setButtonText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisabled(true);
    const result = await token2_backend.payOut();
    setButtonText(result);
    //setDisabled(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
        Get your free FERG tokens here! Claim 10,000 FERG tokens to your
        account.
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
