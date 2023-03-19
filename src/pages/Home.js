import React from "react";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/testProducts";
const Home = () => {
  const dispatch = useDispatch();
  const { input, test } = useSelector((state) => state);
  console.log(test);
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      {/* {test.loading && <h1 style={{ color: "red" }}>loading..</h1>} */}
      <h2 className="heading">Welcome to the Redux toolkit store</h2>
      <h1>Testing:{input.value}</h1>
      <input
        placeholder="Enter something"
        value={input.value}
        onChange={(e) =>
          dispatch({ type: "updateInputValue", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD" })}>Click</button>
      {input.list.map((l) => (
        <h1
          onClick={() => dispatch({ type: "updateFade", payload: l.elem })}
          key={l.elem}
          style={{ opacity: l.fade ? 0.5 : 1 }}
        >
          {l.elem}
        </h1>
      ))}
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
