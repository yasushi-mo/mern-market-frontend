export const ItemDisplay = ({ item }) => {
  return (
    <div>
      <div>
        {item.image && (
          <img src={require(`../../images/${item.image}.jpg`)} alt="item" />
        )}
      </div>
      <div>
        <h1 className="page-title">{item.title}</h1>
        <h2>¥{item.price}</h2>
        <hr />
        <p>{item.description}</p>
      </div>
    </div>
  );
};
