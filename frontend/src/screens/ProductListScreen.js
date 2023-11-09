import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { LinkContainer } from "react-router-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "CREATE_REQUEST":
      return { ...state, loadingCreate: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreate: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreate: false };
    default:
      return state;
  }
};

const ProductListScreen = () => {
  const [{ loading, error, products, pages, loadingCreate }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get("page") || 1;

  const { state } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, [page, userInfo]);

  const createProductHandler = async () => {
    if (window.confirm("Are you sure to create Product?")) {
      try {
        dispatch({ type: "CREATE_REQUEST" });
        const { data } = await axios.post(
          "/api/products",
          {},
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        toast.success("product create successfully");
        dispatch({ type: "CREATE_SUCCESS" });
        navigate(`/admin/product/${data.product._id}`);
      } catch (error) {
        toast.error(getError(error));
        dispatch({ type: "CREATE_FAIL" });
      }
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="col text-end">
          <div>
            <Button type="button" onClick={createProductHandler}>
              Create Product
            </Button>
          </div>
        </Col>
      </Row>
      {loadingCreate && <LoadingBox></LoadingBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE($AUD)</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      type="submit"
                      variant="light"
                      onClick={() => navigate(`/admin/products/${product._id}`)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === Number(page) ? "btn text-bold" : "btn"}
                key={x + 1}
                to={`/admin/products?page=${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListScreen;
