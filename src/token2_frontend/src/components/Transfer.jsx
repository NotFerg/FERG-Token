import React,{useState} from "react";
import { Principal} from "@dfinity/principal";
import { token2_backend } from "../../../declarations/token2_backend";

function Transfer() {

  const [recipientID, setRecipientID] = useState("");
  const [amount,setAmount] = useState("");
  const [text,setText] = useState("");
  const [isHidden,setIsHidden]= useState(true);
  const [isDisabled, setDisabled] = useState(false);
  
  async function handleClick() {
    setIsHidden(true);
    setDisabled(true);
    const recipient = Principal.fromText(recipientID);
    const amountToTransfer = Number(amount);
    const result = await token2_backend.transfer(recipient, amountToTransfer);
    setText(result);
    setIsHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientID}
                onChange={(e) => setRecipientID(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{text}</p>
      </div>
    </div>
  );
}

export default Transfer;
