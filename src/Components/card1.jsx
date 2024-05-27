import React from "react";
import Navbar from './Navigation';

function card1() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
      <h1 className="heading flex justify-center items-center">LeaderBoards</h1></div>
      <div className="mainGrid">
        <div className="box">
      <div className="card">
        <div className="p-2">
          <div className="row">
            <div className="col-md-10">
              <p style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: "normal", color: "rgb(45, 55, 72)" }}>
                Basic Backtest
              </p>
            </div>
            <div className="col">
              <div className="mb-2 input-group">
                <span className="input-group-text">Slippage</span>
                <select className="form-select">
                  <option value="0">0%</option>
                  <option value="0.5">0.5%</option>
                  <option value="1">1%</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          className="body"
          style={{ maxHeight: "500px", maxWidth: "100%", overflowY: "auto", paddingTop: "0px" }}
        >
          <table>
            <thead className="thead">
              <tr className="tr">
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win %(Day)</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Based on premium and</td>
                <td>
                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="green"
                      className="w-5 h-5 mr-1"
                      style={{ width: "20px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    2.02
                  </span>
                </td>
                <td>194096.05</td>
                <td>158.45</td>
                <td>0.62</td>
                <td>-</td>
                <td>
                  <button style={{ background: "white", color: "blue" }}>
                    <a
                      href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0.5_1708020432643_224339&amp;h=t"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "blue" }}
                    >
                      View
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>strategy_name</td>
                <td>
                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="green"
                      className="w-5 h-5 mr-1"
                      style={{ width: "20px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    1.98
                  </span>
                </td>
                <td>171862.74</td>
                <td>138.26</td>
                <td>0.6</td>
                <td>500</td>
                <td>
                  <button style={{ background: "white", color: "blue" }}>
                    <span>Buy</span>
                  </button>
                  <div className="Toastify"></div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>strategy_name</td>
                <td>
                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="green"
                      className="w-5 h-5 mr-1"
                      style={{ width: "20px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    1.75
                  </span>
                </td>
                <td>264090.37</td>
                <td>216.11</td>
                <td>0.64</td>
                <td>-</td>
                <td>
                  <button style={{ background: "white", color: "blue" }}>
                    <a
                      href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0.5_1709565616248_816433&amp;h=t"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "blue" }}
                    >
                      View
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>strategy_name</td>
                <td>
                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="green"
                      className="w-5 h-5 mr-1"
                      style={{ width: "20px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    1.75
                  </span>
                </td>
                <td>264090.37</td>
                <td>216.11</td>
                <td>0.64</td>
                <td>-</td>
                <td>
                  <button style={{ background: "white", color: "blue" }}>
                    <a
                      href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0.5_1709565300515_86849&amp;h=t"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "blue" }}
                    >
                      View
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Wait and trade_Save</td>
                <td>
                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="green"
                      className="w-5 h-5 mr-1"
                      style={{ width: "20px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                    1.75
                  </span>
                </td>
                <td>264090.37</td>
                <td>216.11</td>
                <td>0.64</td>
                <td>-</td>
                <td>
                  <button style={{ background: "white", color: "blue" }}>
                    <a
                      href="https://unfluke.in/BasicBackTest?tab=strategy-view&amp;filename=0.5_1709565565276_686189&amp;h=t"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "blue" }}
                    >
                      View
                    </a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default card1;
