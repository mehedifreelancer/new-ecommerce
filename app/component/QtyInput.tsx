import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface QtyInputProps {
  height: string;
}

const QtyInput = ({ height }: QtyInputProps) => {
  const [count, setCount] = useState(1);

  const handleCount = (type: string) => {
    if (type === "add") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 1) {
        return;
      }
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div
      className={`w-[120px] h-[${height}]  border-[1px] border-solid border-[#eee] overflow-hidden m-[5px] relative flex items-center justify-between rounded-[5px]`}
    >
      <button
        onClick={() => handleCount("add")}
        className={`bg bg-[#5caf90] p-[7px] text-white`}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <input
        className="qty-input w-full text-center"
        type="text"
        name="ms_qtybtn"
        value={count}
        readOnly
      />
      <button
        onClick={() => handleCount("substract")}
        className={`bg bg-[#5caf90] p-[7px] text-white`}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
};

export default QtyInput;
