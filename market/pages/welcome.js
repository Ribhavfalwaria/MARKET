import React from "react";
import styles from "../styles/welcome.module.css";
import { useFormik } from "formik";
import Link from "next/link";

export default function Welcome() {
  const initialValues = {
    name: "",
    description: "",
    username: "",
    password: "",
    apikey: "",
    apisecret: "",
    code: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    }

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.apikey) {
      errors.apikey = "Required";
    }

    if (!values.apisecret) {
      errors.apisecret = "Required";
    }

    if (!values.code) {
      errors.code = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
  });
  console.log("Form errors", formik.touched);

  function submit(event) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formik.values),
    };
    fetch("http://localhost:9000/partners", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("User Saved successfully...");
      });
  }

  function audit() {}
  function test() {}

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.heading}>Welcome Partner</div>
        <form id={styles.register}>
          <label id={styles.label}>Name</label>
          &nbsp; &nbsp;
          <div className={styles.i}>
            <input
              type="text"
              placeholder="Enter Your Name"
              className={styles.name}
              id="name"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.err}>{formik.errors.name}</div>
            ) : null}
          </div>
          <br />
          <label id={styles.label}>Description</label>
          &nbsp;&nbsp;
          <div className={styles.i}>
            <input
              type="text"
              placeholder="Description"
              className={styles.desc}
              id="description"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
            ></input>
            {formik.touched.description && formik.errors.description ? (
              <div className={styles.err}>{formik.errors.description}</div>
            ) : null}
          </div>
          <br />
          <label id={styles.label}>Username</label>
          &nbsp;&nbsp;
          <div className={styles.i}>
            <input
              type="text"
              placeholder="Enter Your Username"
              className={styles.username}
              id="username"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
            ></input>
            {formik.touched.username && formik.errors.username ? (
              <div className={styles.err}>{formik.errors.username}</div>
            ) : null}
          </div>
          <br />
          <label id={styles.label}>Password</label>
          &nbsp;&nbsp;
          <div className={styles.i}>
            <input
              type="password"
              placeholder="Enter Your Password"
              className={styles.password}
              id="password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
            {formik.touched.password && formik.errors.password ? (
              <div className={styles.err}>{formik.errors.password}</div>
            ) : null}
          </div>
          <br />
          <label id={styles.label}>API Key</label>
          &nbsp;&nbsp;
          <div className={styles.i}>
            <input
              type="text"
              placeholder="Enter Your API key"
              className={styles.apikey}
              name="apikey"
              id="apikey"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.apikey}
            ></input>
            {formik.touched.apikey && formik.errors.apikey ? (
              <div className={styles.err}>{formik.errors.apikey}</div>
            ) : null}
          </div>
          <br />
          <label id={styles.label}>API Secret</label>
          &nbsp;&nbsp;
          <div className={styles.i}>
            <input
              type="text"
              placeholder="Enter Your API Secret"
              className={styles.apisecret}
              id="apisecret"
              name="apisecret"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.apisecret}
            ></input>
            {formik.touched.apisecret && formik.errors.apisecret ? (
              <div className={styles.err}>{formik.errors.apisecret}</div>
            ) : null}
          </div>
          <br />
          <label id={styles.label}>Code</label>&nbsp;&nbsp;
          <div className={styles.i}>
            <input
              type="text"
              placeholder="Enter Your code"
              className={styles.code}
              id="code"
              name="code"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.code}
            ></input>
            {formik.touched.code && formik.errors.code ? (
              <div className={styles.err}>{formik.errors.code}</div>
            ) : null}
          </div>
          <br />
          <button className={styles.save} onClick={submit}>
            Save
          </button>
          <Link href="/Audit" >
            <button className={styles.audit} onClick={audit}>
              Audit
            </button>
          </Link>
          <Link href="/" passHref>
            <button className={styles.test} onClick={audit}>Test</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
