"use client"
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "@/Components/Breadcrum";
import { getFaq } from "@/Redux/ActionCreators/FaqActionCreators";

export default function FaqPage() {

  const FaqStateData = useSelector((state) => state.FaqStateData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaq());
  }, [dispatch]);

  return (
    <>
      <Breadcrumb title="Faqs" />

      <div className="container my-5">
        <div className="accordion my-5" id="accordionExample">

          {FaqStateData &&
            FaqStateData.filter((x) => x.status).map((item, index) => {
              return (
                <div className="accordion-item" key={item.id}>
                  
                  {/* Question */}
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.question}
                    </button>
                  </h2>

                  {/* Answer */}
                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>{item.answer}</strong>
                    </div>
                  </div>

                </div>
              );
            })}

        </div>
      </div>
    </>
  );
}