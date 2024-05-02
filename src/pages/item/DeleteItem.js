import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDisplay } from "../../components/item/ItemDisplay";
import { LOCAL_STORAGE_TOKEN_KEY } from "../../utils/constants";

export const DeleteItem = () => {
  const params = useParams();

  const [item, setItem] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/item/delete/${params.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
          },
        }
      );
      const jsonResponse = await response.json();
      alert(jsonResponse.message);
    } catch (error) {
      alert("アイテム削除失敗");
    }
  };

  useEffect(() => {
    const getSingleItem = async () => {
      const response = await fetch(`http://localhost:5000/item/${params.id}`);
      const jsonResponse = await response.json();
      setItem(jsonResponse.singleItem);
    };
    getSingleItem();
  }, [params.id]);

  return (
    <div>
      <h1>アイテム削除</h1>
      <form onSubmit={handleSubmit}>
        <ItemDisplay item={item} />
        <button>削除</button>
      </form>
    </div>
  );
};
