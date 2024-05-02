export const ItemForm = ({ item, handleChange, handleSubmit, buttonLabel }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={item.title}
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="アイテム名"
        required
      />
      <input
        value={item.image}
        onChange={handleChange}
        type="text"
        name="image"
        placeholder="画像"
        required
      />
      <input
        value={item.price}
        onChange={handleChange}
        type="text"
        name="price"
        placeholder="価格"
        required
      />
      <textarea
        value={item.description}
        onChange={handleChange}
        typeof="text"
        name="description"
        rows="15"
        placeholder="商品説明"
        required
      ></textarea>
      <button>{buttonLabel}</button>
    </form>
  );
};
