import { useState } from "react";

export const CreateItem = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    setNewItem({
      ...newItem,
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
        },
        body: JSON.stringify(newItem),
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
      <form onSubmit={handleSubmit}>
        <input
          value={newItem.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="アイテム名"
          required
        />
        <input
          value={newItem.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="画像"
          required
        />
        <input
          value={newItem.price}
          onChange={handleChange}
          type="text"
          name="price"
          placeholder="価格"
          required
        />
        <textarea
          value={newItem.description}
          onChange={handleChange}
          typeof="text"
          name="description"
          rows="15"
          placeholder="商品説明"
          required
        ></textarea>
        <button>作成</button>
      </form>
    </div>
  );
};
