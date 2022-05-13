import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword, pageNumber = 1 } = useParams();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <h1>Latest Products</h1>
        </>
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back{" "}
        </Link>
      )}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row xs={1} md={4} className="g-4">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
