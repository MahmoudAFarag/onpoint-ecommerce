import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Components
import SimpleMessage from "../../../components/SimpleMessage";
import Add from "../../../components/admin/brands/Add";
import List from "../../../components/admin/brands/List";

// Firebase
import checkUserIsAdmin from "../../../lib/checkUserIsAdmin";
import brandsSnapshot from "../../../lib/brandsSnapshot";

// State Management
import useStore from "../../../store/useStore";
import useCreateBrandsSlice from "../../../store/createBrandsSlice";

const Index = () => {
  const auth = useStore((state) => state.currentUser);
  const brandsStore = useCreateBrandsSlice();
  const [userMessage, setUserMessage] = useState({ show: false, message: "" });
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const [filterdBrands, setFilterBrands] = useState([]);

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

        const unSub = brandsSnapshot(
          brandsStore.add,
          brandsStore.update,
          brandsStore.delete,
          brandsStore.finishLoading
        );

        return unSub;
      }
    } else {
      setUserMessage({ show: true, message: "You are not logged in" });
    }
  };

  const handleBrandsFilter = (e) => {
    const value = e.target.value.trim();
    setFilter(value);

    if (!value) {
      setFilter("");
      setFilterBrands(brandsStore.value.brands);
      return;
    }

    const filteredBrands = brandsStore.value.brands.filter((brand) =>
      brand.name.match(new RegExp(value, "i"))
    );

    setFilterBrands(filteredBrands);
  };

  useEffect(() => {
    const unSub = checkAdmin();

    return () => {
      unSub.then((unSubs) => {
        if (typeof unSubs === "function") {
          unSubs();
          console.log("unSub");
        }
      });
    };
  }, [auth]);

  useEffect(() => {
    if (!brandsStore.value.loading) {
      handleBrandsFilter({ target: { value: filter } });
    }
  }, [brandsStore]);

  if (brandsStore.value.loading) return <SimpleMessage txt="Loading..." />;

  if (userMessage.show) return <SimpleMessage txt={userMessage.message} />;

  return (
    <main className="container mx-auto py-6 px-9 lg:px-0">
      <h2 className="mb-6 text-2xl font-semibold text-shark">Brandss</h2>

      <div className="mb-6">
        <h4 className="font-medium text-shark">Search :</h4>
        <input
          type="text"
          autoComplete="off"
          value={filter}
          onChange={handleBrandsFilter}
          className="block w-full rounded bg-mystic p-2.5 py-2 px-2 text-mystic-dark outline-none"
          placeholder="Search"
        />
      </div>

      <Add />

      <List list={filterdBrands} />
    </main>
  );
};

export default Index;
