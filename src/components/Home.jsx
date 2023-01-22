import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../app/store";
const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const navigate = useNavigate();

  const [date, setDate] = useState();
  const [expanse, setExpanse] = useState();
  const [category, setCategory] = useState();

  const incomeHandle = () => {
    let data = {
      date,
      expanse,
      category,
    };
    dispatch(action.addTotalIncome(data));
    console.log(selector);
  };
  const expanseHandle = () => {
    let data = {
      date,
      expanse,
      category,
    };
    dispatch(action.addTotalExpanse(data));
  };

  //   console.log(incomeData);
  return (
    <div className="home-container">
      <div className="bal-sec">
        <div
          className="bal"
          style={{ color: "green" }}
          onClick={() => navigate("/income")}
        >
          <span>Income</span>
          <span>${selector.expance.income}</span>
        </div>
        <div className="main-bal">
          <span>Balance</span>
          <span>${selector.expance.amount}</span>
        </div>
        <div
          className="bal"
          style={{ color: "red" }}
          onClick={() => navigate("expanse")}
        >
          <span>Expanse</span>
          <span>${selector.expance.expanse}</span>
        </div>
      </div>
      <div className="form-sec">
        <div className="head">
          <h3>Expanse Detail</h3>
        </div>
        <div className="form">
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Expense Category"
          />
          <input
            type="number"
            name="amount"
            onChange={(e) => setExpanse(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <div className="btn">
          <button onClick={incomeHandle}>Income</button>
          <button onClick={expanseHandle}>Expense</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
