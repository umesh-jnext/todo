import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./component/Home";
import App2 from "./component/App2";
import Multiplevaluecheckbox from "./component/Multiplevaluecheckbox";
import Changekeyvalue from "./component/Changekeyvalue";
import SlickSlider from "./component/SlickSlider";
import Axiosapi from "./component/Axiosapi";
// import NoPage from "./component/NoPage";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axiosrestful from "./component/Axiosrestful";
import Datetimepicker from "./component/Datetimepicker";
import Stepperform from "./component/Stepperform";
import Dropzone from "./component/Dropzone";
import store from "./store";
import { Provider } from "react-redux";
import Quiz from "./component/Quiz";
import Formikform from "./component/Formikform";
import LocationSearchInput from "./component/LocationSearchInput";
import Arraytable from "./component/Arraytable";
import SignIn from "./component/Signin";
import Privatecomponent from "./component/Privatecomponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<SignIn />} />

            <Route path="*" element={<Privatecomponent />}>
              <Route path="Changekeyvalue" element={<Changekeyvalue />} />
              <Route path="slickslider" element={<SlickSlider />} />
              <Route path="axiosapi" element={<Axiosapi />} />
              <Route path="axiosrestful" element={<Axiosrestful />} />
              <Route path="datetimepicker" element={<Datetimepicker />} />
              <Route path="stepperform" element={<Stepperform />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="dropzone" element={<Dropzone />} />
              <Route path="formikform" element={<Formikform />} />
              <Route
                path="locationsearchinput"
                element={<LocationSearchInput />}
              />
              <Route path="arraytable" element={<Arraytable />} />
              <Route path="classcomponent" element={<App2 />} />
              <Route
                path="Multiplevaluecheckbox"
                element={<Multiplevaluecheckbox />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
