import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c1tq5de",
        "template_vze5qk4",
        e.target,
        "TDKZFnvDldtL1jPfB"
      )
 /*      .then(result=>{
        console.log(result)
      }) */
      .then(
        (result) => {
          if (result.status === 200) {
            notify("ارسال پیام با موفقیت انجام شد", "success");
          }
        },
        (error) => {
          notify("ارسال پیام با خطا مواجه شد", "error");
          console.log(error);
        }
      );
  };

  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-center">
        <div className="col-md-4 bg-white p-5 mt-5 rounded-3">
          <h2 className="pb-5 text-center fw-bold">ارسال پیام به مدیریت</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control p-3  "
                placeholder="نام شما"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control p-3 "
                placeholder="ایمیل شما"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control p-3 "
                name="message"
                placeholder="پیام شما"
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success w-100 p-3 mt-5 fw-bold"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
