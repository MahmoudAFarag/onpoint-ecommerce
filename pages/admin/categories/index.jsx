import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Components
import Add from "../../../components/admin/categories/Add";
import List from "../../../components/admin/categories/List";
import SimpleMessage from "../../../components/SimpleMessage";

// Firebase
import checkUserIsAdmin from "../../../lib/checkUserIsAdmin";
import categoriesSnapshot from "../../../lib/categoriesSnapshot";

// State Management
import useStore from "../../../store/useStore";
import useCreateCategoriesSlice from "../../../store/createCategoriesSlice.js";

const Index = () => {
  const auth = useStore((state) => state.currentUser);
  const categoriesStore = useCreateCategoriesSlice();
  const [userMessage, setUserMessage] = useState({ show: false, message: "" });
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const [filterdCategories, setFilterCategories] = useState([]);

  const checkAdmin = async () => {
    if (auth) {
      const isAdmin = await checkUserIsAdmin(auth.uid);

      if (!isAdmin.done) {
        router.push("/");
        return;
      }

      if (isAdmin.done && !isAdmin.isAdmin) {
        setUserMessage({
          show: true,
          message: "You are not authorized to view this page",
        });
      } else {
        setUserMessage({
          show: false,
          message: "",
        });

        const unSub = categoriesSnapshot(
          categoriesStore.add,
          categoriesStore.update,
          categoriesStore.delete,
          categoriesStore.finishLoading
        );

        return unSub;
      }
    } else {
      setUserMessage({ show: true, message: "You are not logged in" });
    }
  };

  const handleCategoriesFilter = (e) => {
    const value = e.target.value.trim();
    setFilter(value);

    if (!value) {
      setFilter("");
      setFilterCategories(categoriesStore.value.categories);
      return;
    }

    const filteredCategories = categoriesStore.value.categories.filter(
      (category) => category.name.match(new RegExp(value, "i"))
    );

    setFilterCategories(filteredCategories);
  };

  useEffect(() => {
    const unSub = checkAdmin();

    return () => {
      unSub.then((unSubs) => {
        if (typeof unSubs === "function") {
          unSubs();
        }
      });
    };
  }, [auth]);

  useEffect(() => {
    if (!categoriesStore.value.loading) {
      handleCategoriesFilter({ target: { value: filter } });
    }
  }, [categoriesStore]);

  if (categoriesStore.value.loading) return <SimpleMessage txt="Loading..." />;
  if (userMessage.show) return <SimpleMessage txt={userMessage.message} />;
  return (
    <main className="container mx-auto py-6 px-9 lg:px-0">
      <h2 className="mb-6 text-2xl font-semibold text-shark">Categoryies</h2>

      <div className="mb-6">
        <h4 className="font-medium text-shark">Search :</h4>
        <input
          type="text"
          autoComplete="off"
          value={filter}
          onChange={handleCategoriesFilter}
          className="block w-full rounded bg-mystic p-2.5 py-2 px-2 text-mystic-dark outline-none"
          placeholder="Search"
        />
      </div>

      <Add />

      <List list={filterdCategories} />
    </main>
  );
};

export default Index;
