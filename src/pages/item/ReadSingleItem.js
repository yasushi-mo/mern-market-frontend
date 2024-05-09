import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemDisplay } from "../../components/item/ItemDisplay";
import { Helmet } from "react-helmet-async";

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
    <div className="grid-container-si">
      <Helmet>
        <title>{item?.title}</title>
      </Helmet>
      <ItemDisplay item={item} />
      <div>
        <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
        <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
      </div>
    </div>
  );
};
