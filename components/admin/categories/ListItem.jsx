import { useState } from "react";

// Firebase
import { updateBrand } from "../../../lib/brands";

// Icons
import { AiFillEdit } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

const ListItem = ({ id, name, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleBrandUpdate = async () => {
    setEdit(false);
    if (!newName.trim()) {
      setNewName(name);
      return;
    }
    const update = await updateBrand(id, name, newName.trim());

    // here should show message some how
  };

  return (
    <li className="col-span-4">
      <div className="flex cursor-pointer gap-1 rounded bg-white px-2.5 py-2 shadow-sm hover:shadow-md">
        {!edit ? (
          <p className="flex-auto text-mystic-dark">{newName}</p>
        ) : (
          <>
            <input
              type="text"
              className="flex-auto rounded bg-mystic pl-1 text-mystic-dark focus-within:outline-none"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <button
              className="rounded bg-shark px-2 text-white hover:bg-shark-dark"
              onClick={handleBrandUpdate}
            >
              <BsCheck />
            </button>
          </>
        )}

        {!edit && (
          <button
            className="rounded bg-error px-2 text-white hover:bg-red-500"
            onClick={() => handleDelete(id)}
          >
            <BiTrash />
          </button>
        )}

        <button
          className="rounded bg-shark px-2 text-white hover:bg-shark-dark"
          onClick={() => setEdit(!edit)}
        >
          {edit ? <IoIosClose /> : <AiFillEdit />}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
