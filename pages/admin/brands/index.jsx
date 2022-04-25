import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Components
import Add from "../../../components/categories/Add";
import List from "../../../components/categories/List";
import SimpleMessage from "../../../components/SimpleMessage";

// Firebase
import checkUserIsAdmin from "../../../lib/checkUserIsAdmin";
import brandsSnapshot from "../../../lib/brandsSnapshot";

// State Management
import useStore from "../../../store/useStore";
import useCreateBrandSlice from "../../../store/useCreateBrandSlice";

const Index = () => {
  const auth = useStore((state) => state.currentUser);
  const brandsStore = useCreateBrandSlice();
  const [userMessage, setUserMessage] = useState({ show: false, message: "" });
  const router = useRouter();
  return <div>Index</div>;
};

export default Index;

// Todo
// 1- create brands snapshot
// 2- create brands store
