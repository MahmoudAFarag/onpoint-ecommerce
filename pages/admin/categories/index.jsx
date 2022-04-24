import { useEffect, useState } from "react";
// Components
import Add from "../../../components/categories/Add";
import List from "../../../components/categories/List";
import SimpleMessage from "../../../components/SimpleMessage";

// Firebase
import { getCategories } from "../../../lib/categories";
import checkUserIsAdmin from "../../../lib/checkUserIsAdmin";

// State Management
import useStore from "../../../store/useStore";

const Index = ({ categories }) => {
  const auth = useStore((state) => state.currentUser);
  const [userMessage, setUserMessage] = useState({ show: false, message: "" });

  const checkAdmin = async () => {
    if (auth) {
      const isAdmin = await checkUserIsAdmin(auth.uid);

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
      }
    } else {
      setUserMessage({ show: true, message: "You are not logged in" });
    }
  };

  useEffect(() => {
    checkAdmin();
  }, [auth]);

  if (userMessage.show) return <SimpleMessage txt={userMessage.message} />;
  return (
    <main className="container mx-auto py-6 px-9 lg:px-0">
      <h2 className="mb-6 text-2xl font-semibold text-shark">Categoryies</h2>

      <div className="mb-6">
        <h4 className="font-medium text-shark">Search :</h4>
        <input
          type="text"
          autoComplete="off"
          value=""
          onChange={() => {}}
          className="block w-full rounded bg-mystic p-2.5 py-2 px-2 text-mystic-dark outline-none"
          placeholder="Search"
        />
      </div>

      <Add />

      <List list={categories} />
    </main>
  );
};

export const getServerSideProps = async (ctx) => {
  const categories = await getCategories();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
};

export default Index;