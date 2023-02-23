import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

const Home = lazy(() => import("./pages/Home"));
const Ogpa = lazy(() => import("./pages/Ogpa"));
const Login = lazy(() => import("./pages/Login"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const OgpaForm = lazy(() => import("./pages/OgpaForm"));
const OgpaReg = lazy(() => import("./pages/OgpaReg"));
const OgpaPay = lazy(() => import("./pages/OgpaPay"));
const Training = lazy(() => import("./pages/training/Training"));
const FreeRegister = lazy(() => import("./pages/training/FreeRegister"));
const CheckRegister = lazy(() => import("./pages/training/CheckRegister"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="col text-center p-5">
            __ Preparing the Page
            <LoadingOutlined />
            RE. Kindly wait... __
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ogpa" element={<Ogpa />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/thankyou" element={<ThankYou />} />
          <Route exact path="/ogpaform" element={<OgpaForm />} />
          <Route exact path="/ogpareg" element={<OgpaReg />} />
          <Route exact path="/ogpapay" element={<OgpaPay />} />
          <Route exact path="/training" element={<Training />} />
          <Route exact path="/freeregister" element={<FreeRegister />} />
          <Route exact path="/checkregister" element={<CheckRegister />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
