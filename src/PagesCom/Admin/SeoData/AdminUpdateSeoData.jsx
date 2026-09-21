"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Breadcrum from "@/Components/Breadcrum";
import AdminSidebar from "@/Components/AdminSidebar";

import FormValidator from "@/Validators/FormValidator";

import {
  getSeoData,
  updateSeoData,
} from "@/Redux/ActionCreators/SeoDataActionCreators";
export default function AdminUpdateSeoData() {
  let { id } = useParams();
  let [data, setData] = useState({
    url: "",
    title: "",
    description: "",
    keywords: "",
    status: true,
  });
  let [errorMessage, setErrorMessage] = useState({
    url: "",
    title: "",
    description: "",
    keywords: "",
  });
  let [show, setShow] = useState(false);

  let SeoDataStateData = useSelector((state) => state.SeoDataStateData);
  let dispatch = useDispatch();

  let navigate = useRouter();

  function getInputData(e) {
    let { name, value } = e.target;

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: FormValidator(e),
      };
    });

    setData((old) => {
      return {
        ...old,
        [name]: name === "status" ? (value === "1" ? true : false) : value,
      };
    });
  }

  function postData(e) {
    e.preventDefault();
    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error) setShow(true);
    else {
      let item = SeoDataStateData.find(
        (x) =>
          x.id !== id &&
          x.url.toLocaleLowerCase() === data.url.toLocaleLowerCase(),
      );
      if (item) {
        setShow(true);
        setErrorMessage((old) => {
          return {
            ...old,
            url: "SeoData With This URL Already Exist",
          };
        });
      } else {
        dispatch(updateSeoData({ ...data }));
        navigate.push("/admin/seodata");
      }
    }
  }

  useEffect(() => {
    (() => {
      dispatch(getSeoData());
      if (SeoDataStateData.length) {
        let item = SeoDataStateData.find((x) => x.id == id);
        if (item) setData({ ...data, ...item });
        else navigate.push("/admin/seodata");
      }
    })();
  }, [SeoDataStateData.length]);
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h5 className="border p-2 text-center">
              Update SeoData{" "}
              <Link href="/admin/seodata">
                {" "}
                <i className="fa fa-arrow-left float-end"></i>
              </Link>
            </h5>

            <form onSubmit={postData}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label>Url*</label>
                  <input
                    type="text"
                    name="url"
                    value={data.url}
                    onChange={getInputData}
                    placeholder="Url"
                    className={`${show && errorMessage.url ? "border-danger" : ""} form-control`}
                  />
                  {show && errorMessage.url ? (
                    <p className="text-danger">{errorMessage.url}</p>
                  ) : null}
                </div>

                <div className="col-12 mb-3">
                  <label>Title*</label>
                  <textarea
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={getInputData}
                    placeholder="Title"
                    rows={3}
                    className={`${show && errorMessage.title ? "border-danger" : ""} form-control`}
                  ></textarea>
                  {show && errorMessage.title ? (
                    <p className="text-danger">{errorMessage.title}</p>
                  ) : null}
                </div>

                <div className="col-12 mb-3">
                  <label>Description*</label>
                  <textarea
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={getInputData}
                    placeholder="Description"
                    rows={3}
                    className={`${show && errorMessage.description ? "border-danger" : ""} form-control`}
                  ></textarea>
                  {show && errorMessage.description ? (
                    <p className="text-danger">{errorMessage.description}</p>
                  ) : null}
                </div>

                <div className="col-12 mb-3">
                  <label>Keywords*</label>
                  <textarea
                    type="text"
                    name="keywords"
                    value={data.keywords}
                    onChange={getInputData}
                    placeholder="Keywords"
                    rows={3}
                    className={`${show && errorMessage.keywords ? "border-danger" : ""} form-control`}
                  ></textarea>
                  {show && errorMessage.keywords ? (
                    <p className="text-danger">{errorMessage.keywords}</p>
                  ) : null}
                </div>

                <div className="col-lg-6 mb-3">
                  <label>Status*</label>
                  <select
                    name="status"
                    onChange={getInputData}
                    value={data.status ? "1" : "0"}
                    className="form-select"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inctive</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
