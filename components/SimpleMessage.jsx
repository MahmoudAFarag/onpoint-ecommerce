import { useEffect } from "react";

const SimpleMessage = ({ txt, status = false, clear = false }) => {
  const classes =
    status == "success"
      ? "bg-success text-white rounded-t"
      : "bg-error text-white rounded-t";

  useEffect(() => {
    if (clear) {
      const remove = setTimeout(() => {
        clear();
        clearTimeout(remove);
      }, 5000);
    }
  }, [clear]);
  return (
    <div
      className={`w-full px-3 py-2.5 text-center font-bold  ${
        status ? classes : "rounded bg-mystic text-mystic-dark"
      }`}
    >
      {txt}
    </div>
  );
};

export default SimpleMessage;
