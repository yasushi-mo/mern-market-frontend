import { useState } from "react";
import { ItemForm } from "../../components/ItemForm";

export const CreateItem = () => {
  const [item, setItem] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
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
      const response = await fetch("http://localhost:5000/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"), // TODO: use constant for key
        },
        body: JSON.stringify(item),
      });
      const jsonResponse = await response.json();
      alert(jsonResponse.message);
    } catch (error) {
      alert("アイテム作成失敗");
    }
  };

  return (
    <div>
      <h1>アイテム作成</h1>
      <ItemForm
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonLabel="作成"
      />
    </div>
  );
};
