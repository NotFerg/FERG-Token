import React, { useState } from "react";
import { token2_backend } from "../../../declarations/token2_backend";

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
    const result = await token2_backend.payOut();
    console.log("payout: " + result);
    setText(result);
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
        Get your free DAngela token2_backends here! Claim 10,000 DANG token2_backends to 2vxsx-fae
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
