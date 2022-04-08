import { useEffect } from "react";

const SimpleCountdown = ({ current, change }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      change((oldState) => oldState - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-success p-1 text-center font-serif text-sm text-white">
      You Can Re-Send Email in {current} Seconds
    </div>
  );
};

export default SimpleCountdown;
