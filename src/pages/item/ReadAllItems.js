import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ReadAllItems = () => {
  const [allItems, setAllItems] = useState();

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const response = await fetch("http://localhost:5000");
        const jsonResponse = await response.json();
        setAllItems(jsonResponse);
      } catch (error) {}
    };
    getAllItems();
  }, []);

  return (
    <div>
      {allItems &&
        allItems.allItems.map((item) => (
          <Link key={item._id} to={`/item/${item._id}`}>
            <img src={require(`../../images/${item.image}.jpg`)} alt="item" />
            <h2>¥{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 80)}...</p>
          </Link>
        ))}
    </div>
  );
};
