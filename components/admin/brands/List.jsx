import { useState } from "react";

// Components
import SimpleMessage from "../../SimpleMessage";
import ListItem from "./ListItem";

// Firebase
import { deleteBrand } from "../../../lib/brands";

const List = ({ list }) => {
  const [deleting, setDeleting] = useState(false);

  const handleBrandDelete = async (id) => {
    setDeleting(true);
    const deleteAction = await deleteBrand(id);
    setDeleting(false);
  };

  if (deleting) return <SimpleMessage txt="working on it" />;

  if (list.length <= 0) return <SimpleMessage txt="No Brands yet!" />;

  return (
    <ul className="grid grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
      {list.map((item) => (
        <ListItem
          id={item.id}
          name={item.name}
          key={item.name}
          handleDelete={handleBrandDelete}
        />
      ))}
    </ul>
  );
};

export default List;
