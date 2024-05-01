import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ReadSingleItem = () => {
  const params = useParams();

  const [item, setItem] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

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
      <div>
        {item.image && (
          <img src={require(`../../images/${item.image}.jpg`)} alt="item" />
        )}
      </div>
      <div>
        <h1>{item.title}</h1>
        <h2>¥{item.price}</h2>
        <hr />
        <p>{item.description}</p>
      </div>
    </div>
  );
};
