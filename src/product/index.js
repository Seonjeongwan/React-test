import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://54ad73c7-016e-4b63-b760-801d385fbc3d.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(product);
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다....</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
