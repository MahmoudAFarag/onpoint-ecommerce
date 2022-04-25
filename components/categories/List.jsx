import { useState } from "react";

// Components
import SimpleMessage from "../SimpleMessage";
import ListItem from "./ListItem";

// Firebase
import { deleteCategory } from "../../lib/categories";

const List = ({ list }) => {
  const [deleting, setDeleting] = useState(false);

  const handleCategoryDelete = async (id) => {
    setDeleting(true);
    const deleteAction = await deleteCategory(id);
    setDeleting(false);
  };

  if (deleting) return <SimpleMessage txt="working on it" />;

  if (list.length <= 0) return <SimpleMessage txt="No categories yet!" />;
  return (
    <ul className="grid grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
      {list.map((item) => (
        <ListItem
          id={item.id}
          name={item.name}
          key={item.name}
          handleDelete={handleCategoryDelete}
        />
      ))}
    </ul>
  );
};

export default List;
