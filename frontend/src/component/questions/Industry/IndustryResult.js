import React, { useEffect, useState } from "react";
// import logo from '../';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const IndustryResult = ({
  setToggleQuestion,
  eBill,
  gBill,
  oBill,
  carMileage,
  flight,
  flight2,
  newspaper,
  tin,
  toggleResult,
  finalInArr,
  opArrIndustry,
}) => {
  // useEffect(() => {
  //   inArr.push(eBill);
  //   inArr.push(gBill);
  //   inArr.push(oBill);
  //   inArr.push(carMileage);
  //   inArr.push(flight);
  //   inArr.push(flight2);
  //   inArr.push(newspaper);
  //   inArr.push(tin);
  //   inArr = inArr.slice(0, 8);
  //   finalInArr = inArr;
  //   // console.log(finalInArr);
  // }, []);

  return (
    <div className="resultDiv">
      <ArrowBackIosIcon onClick={() => setToggleQuestion(4)} />
      {/* <img className="resultLogo" src={logo} alt="React Logo" /> */}
      <div className="resultSubDiv">
        <div className="resultLeft">
          <h2
            style={{
              padding: "5%",
              marginTop: "6%",
              marginLeft: "5%",
              color: "white",
            }}
          >
            Result
          </h2>
          <div
            className="resultInputInfo"
            style={{ marginLeft: "10%", color: "white" }}
          >
            <p className="resultInputEachInfo">
              Your monthly Electricity Bill :{" "}
            </p>

            <p className="resultInputEachInfo">Your monthly Gas Bill : 2.0</p>
            <p className="resultInputEachInfo">Your monthly Oil Bill :</p>
            <p className="resultInputEachInfo">Your yearly Car Mileage :</p>
            <p className="resultInputEachInfo">
              Your Your Past year number of flights travels for 4hrs or less
              duration :
            </p>
            <p className="resultInputEachInfo">
              Your Your Past year number of flights travels for 4hrs or more
              duration :
            </p>
            <p className="resultInputEachInfo">
              Recycled newspapers past year :
            </p>
            <p className="resultInputEachInfo">
              Recycled Aluminium & Tin past year :
            </p>
          </div>
        </div>
        <div className="resultRight">
          <div className="carbonEmissionResult">
            <div style={{marginTop:"59%"}}>
            <p>Your Average Carbon Emission is :</p>
            <h1> {opArrIndustry[0]}K.Tonnes</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndustryResult;
