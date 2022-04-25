import { useState } from "react";

// Components
import SimpleMessage from "../SimpleMessage";

// Firebase
import { addCategory } from "../../lib/categories";

// Icons
import { BsPlus } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Add = () => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [userMessage, setUserMessage] = useState({
    show: false,
    message: "",
    status: "error",
  });
  const [showForm, setShowForm] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleCategoryChange = (e) => {
    setName(e.target.value);

    if (!e.target.value.trim()) {
      setDisabled(true);
      return;
    }

    setDisabled(false);
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setAdding(true);

    if (!name.trim()) {
      setDisabled(true);
      setAdding(false);
      return;
    }

    const add = await addCategory(name);
    setUserMessage({
      show: true,
      message: add.message,
      status: add.done ? "success" : "error",
    });

    setName("");
    setUserMessage({ ...userMessage, show: false });
    setShowForm(false);
    setAdding(false);
  };

  if (adding)
    return (
      <div className="ml-auto max-w-max rounded bg-shark p-1.5 text-white hover:bg-shark-dark">
        <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin" />
      </div>
    );

  if (!showForm)
    return (
      <div className="mb-6 flex justify-end">
        <button
          className="rounded bg-shark p-1.5 text-white hover:bg-shark-dark"
          onClick={() => setShowForm(true)}
        >
          <BsPlus className="h-8 w-8" />
        </button>
      </div>
    );
  return (
    <div className="mb-6 flex justify-end">
      <div className="relative">
        <div className="absolute left-0 -top-full w-full">
          {userMessage.show && (
            <>
              <SimpleMessage
                txt={userMessage.message}
                status={userMessage.status}
                clear={() => setUserMessage({ ...userMessage, show: false })}
              />
            </>
          )}
        </div>
        <div className="flex">
          <button
            className="rounded-l bg-shark px-3 py-2 text-white hover:bg-shark-dark"
            onClick={() => setShowForm(false)}
          >
            <IoIosClose className="h-6 w-6" />
          </button>

          <form onSubmit={handleAddCategory}>
            <input
              type="text"
              placeholder="Category name"
              value={name}
              onChange={handleCategoryChange}
              className="rounded-l rounded-r-none px-3 py-2.5 focus-within:outline-none"
            />

            <button
              className="rounded-r bg-shark px-3 py-2 text-white hover:bg-shark-dark disabled:bg-mystic disabled:text-shark"
              type="submit"
              disabled={disabled}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
