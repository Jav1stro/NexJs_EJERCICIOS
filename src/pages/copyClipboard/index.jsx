import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const CopyClipboard = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <input value={value} onChange={({ target: { value } }) => setValue(value)} />

      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>

      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
};

export default CopyClipboard;
