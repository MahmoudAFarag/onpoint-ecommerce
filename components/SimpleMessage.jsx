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

// Todos:
// 0. change addCategories function from run transaction to query
// 1. create Categories Slice
// 2. create function to start categories snapshots (addFromSnapshotToSliceFunction)
// 3. check if user role == admin
// 4. if user role == admin, start snapshot
// 5. if user role != admin, dont start snapshot
// 6. use categories slice to render categories in categories admin page
