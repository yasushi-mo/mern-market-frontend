import { useEffect, useState } from "react";
import { ItemForm } from "../../components/item/ItemForm";
import { useParams } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN_KEY } from "../../utils/constants";
import { useAuth } from "../../utils/useAuth";

export const UpdateItem = () => {
  const params = useParams();
  const loginUser = useAuth();

  const [item, setItem] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    email: "",
  });

  const handleChange = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/item/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
          },
          body: JSON.stringify(item),
        }
      );
      const jsonResponse = await response.json();
      alert(jsonResponse.message);
    } catch (error) {
      alert("アイテム編集失敗");
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

  if (loginUser !== item.email)
    return <h1 className="page-title">権限がありません</h1>;

  return (
    <div>
      <h1 className="page-title">アイテム編集</h1>
      <ItemForm
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonLabel="編集"
      />
    </div>
  );
};
