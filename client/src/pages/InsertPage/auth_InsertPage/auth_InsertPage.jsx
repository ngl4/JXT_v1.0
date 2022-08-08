import React, { useState } from "react";
import Input from "../../../components/Input/input";

function SecretEnterPage() {
  const [companyName, setCompanyName] = useState("");
  const [jobURL, setJobURL] = useState("");
  const [checkNew, setCheckNew] = useState(false);
  const [checkApplied, setCheckApplied] = useState(false);
  const [checkPhoneCalled, setCheckPhoneCalled] = useState(false);
  const [checkInterviewed, setCheckInterviewed] = useState(false);
  const [status, setStatus] = useState("");
  const [statusVerbiage, setStatusVerbiage] = useState("");
  const [statusDate, setStatusDate] = useState("");
  const [disable, setDisable] = useState(false);
  const [response, setResponse] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    switch (name) {
      case "companyName":
        setCompanyName(value);
        break;
      case "jobURL":
        setJobURL(value);
        break;
      case "new":
        if (checkNew) {
          setCheckNew(false);
          setStatus("");
          setDisable(false);
        } else {
          setCheckNew(true);
          setStatus(value);
          setStatusVerbiage("Date to Apply");
          setDisable(true);
        }
        break;
      case "applied":
        if (checkApplied) {
          setCheckApplied(false);
          setStatus("");
          setDisable(false);
        } else {
          setCheckApplied(true);
          setStatus(value);
          setStatusVerbiage("Applied Date");
          setDisable(true);
        }
        break;
      case "phoneCalled":
        if (checkPhoneCalled) {
          setCheckPhoneCalled(false);
          setStatus("");
          setDisable(false);
        } else {
          setCheckPhoneCalled(true);
          setStatus(value);
          setStatusVerbiage("Phone Call Date");
          setDisable(true);
        }
        break;
      case "interviewed":
        if (checkInterviewed) {
          setCheckInterviewed(false);
          setStatus("");
          setDisable(false);
        } else {
          setCheckInterviewed(true);
          setStatus(value);
          setStatusVerbiage("Interview Date");
          setDisable(true);
        }
        break;
      case "applyDate":
      case "appliedDate":
      case "phoneCallDate":
      case "interviewDate":
        setStatusDate(value);
        break;
      default:
        console.log("Unidentified input field found in the insertPage form");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (companyName === "" || jobURL === "" || status === "") {
      setResponse({
        verbiage:
          "Missing field(s): please make sure all fields are filled out! Thanks!",
        textColor: "text-danger",
      });
    } else if (status) {
      if (statusDate === "") {
        setResponse({
          verbiage:
            "Missing field: please make sure the Date is filled out! Thanks!",
          textColor: "text-danger",
        });
      } else {
        saveToDB();
      }
    } else {
      saveToDB();
    }
  }

  const saveToDB = () => {
    fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: companyName,
        jobURL: jobURL,
        status: status,
        statusVerbiage: statusVerbiage,
        statusDate: statusDate,
        levelOfImp: "",
        levelOfImpOrderNum: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse({
          verbiage: data.message,
          textColor: "text-success",
        });

        //clear fields
        setCompanyName("");
        setJobURL("");
        setStatus("");
        setStatusVerbiage("");
        setStatusDate("");
        setCheckNew(false);
        setCheckApplied(false);
        setCheckPhoneCalled(false);
        setCheckInterviewed(false);
        setDisable(false);
      });
  };
  return (
    <div className="container">
      <div className="mt-5 pt-3">
        <form onSubmit={handleSubmit}>
          {/* Input Company Name */}
          <div className="row mb-3 d-flex justify-content-center">
            <label className="col-6 col-form-label text-end">
              Company Name
            </label>
            <div className="col-6">
              <Input
                name="companyName"
                type="text"
                onChange={handleChange}
                placeholder="Enter Name"
                value={companyName}
              />
            </div>
          </div>
          {/* Input Job Title */}
          <div className="row mb-3 d-flex justify-content-center">
            <label className="col-6 col-form-label text-end">Job Title</label>
            <div className="col-sm-2">
              <Input
                name="jobTitle"
                type="title"
                onChange={handleChange}
                placeholder="Enter Title"
                // value = {jobTitle}
              />
            </div>
          </div>
          {/* Input Job Source */}
          <div className="row mb-3 d-flex justify-content-center">
            <label className="col-6 col-form-label text-end">Job Source</label>
            <div className="col-6">
              <Input
                name="jobSource"
                type="source"
                onChange={handleChange}
                placeholder="Enter Source"
                // value = {jobSource}
              />
            </div>
          </div>
          {/* Input Job Type */}
          <div className="row mb-3 d-flex justify-content-center">
            <label className="col-6 col-form-label text-end">Job Type</label>
            <div className="col-6">
              <Input
                name="jobType"
                type="type"
                onChange={handleChange}
                placeholder="Enter Type"
                // value = {jobType}
              />
            </div>
          </div>
          {/* Input Job Location */}
          <div className="row mb-3 d-flex justify-content-center">
            <label className="col-6 col-form-label text-end">
              Job Location
            </label>
            <div className="col-6">
              <Input
                name="jobLocation"
                type="location"
                onChange={handleChange}
                placeholder="Enter Location"
                // value = {jobLocation}
              />
            </div>
          </div>
          {/* Input Job Post URL */}
          <div className="row mb-3 d-flex justify-content-center">
            <label className="col-6 col-form-label text-end">
              Job Post URL
            </label>
            <div className="col-6">
              <Input
                name="jobURL"
                type="url"
                onChange={handleChange}
                placeholder="Enter URL"
                value={jobURL}
              />
            </div>
          </div>
          {/*Checkbox Status - New, Applied, Phone-Called, Interviewed */}
          <div className="column mt-4 mb-4 d-flex justify-content-center">
            <div className="form-check form-check-inline">
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                name="new"
                value="New"
                onChange={handleChange}
                disabled={status === "New" ? null : disable}
                checked={checkNew ? true : false}
              />
              <label className="form-check-label" for="inlineCheckbox1">
                New
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                name="applied"
                value="Applied"
                onChange={handleChange}
                disabled={status === "Applied" ? null : disable}
                checked={checkApplied ? true : false}
              />
              <label className="form-check-label" for="inlineCheckbox2">
                Applied
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                name="phoneCalled"
                value="Phone Call"
                onChange={handleChange}
                disabled={status === "Phone Call" ? null : disable}
                checked={checkPhoneCalled ? true : false}
              />
              <label className="form-check-label" for="inlineCheckbox3">
                Phone-Called
              </label>
            </div>
            <div className="form-check form-check-inline">
              <Input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                name="interviewed"
                value="Interview"
                onChange={handleChange}
                disabled={status === "Interview" ? null : disable}
                checked={checkInterviewed ? true : false}
              />
              <label className="form-check-label" for="inlineCheckbox4">
                Interviewed
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-5">
            {/* Checkbox Specific - New */}
            {checkNew ? (
              <div className="row mb-3 d-flex justify-content-center">
                <label className="col-sm-5 col-form-label">
                  {statusVerbiage}:
                </label>
                <div className="col-sm-5">
                  <Input
                    name="applyDate"
                    type="date"
                    onChange={handleChange}
                    placeholder="Enter Date"
                    value={statusDate}
                  />
                </div>
              </div>
            ) : null}
            {/* Checkbox Specific - Applied */}
            {checkApplied ? (
              <div className="row mb-3 d-flex justify-content-center">
                <label className="col-sm-5 col-form-label">
                  {statusVerbiage}:
                </label>
                <div className="col-sm-5">
                  <Input
                    name="appliedDate"
                    type="date"
                    onChange={handleChange}
                    placeholder="Enter Date"
                    value={statusDate}
                  />
                </div>
              </div>
            ) : null}
            {/* Checkbox Specific - Phone Called */}
            {checkPhoneCalled ? (
              <div className="row mb-3 d-flex justify-content-center">
                <label className="col-sm-6 col-form-label">
                  {statusVerbiage}:
                </label>
                <div className="col-sm-6">
                  <Input
                    name="phoneCallDate"
                    type="date"
                    onChange={handleChange}
                    placeholder="Enter Date"
                    value={statusDate}
                  />
                </div>
              </div>
            ) : null}
            {/* Checkbox Specific - Interviewed */}
            {checkInterviewed ? (
              <div className="row mb-3 d-flex justify-content-center">
                <label className="col-sm-6 col-form-label">
                  {statusVerbiage}:
                </label>
                <div className="col-sm-6">
                  <Input
                    name="interviewDate"
                    type="date"
                    onChange={handleChange}
                    placeholder="Enter Date"
                    value={statusDate}
                  />
                </div>
              </div>
            ) : null}
          </div>
          {/* Response - if submit successfully or not */}
          {response ? (
            <div className="d-flex justify-content-center">
              <p className={response.textColor + " fw-normal fs-6"}>
                {response.verbiage}
              </p>
            </div>
          ) : null}
          {/* Submit Button - Add Job to Database */}
          <div className="d-flex justify-content-center mt-3 mb-5">
            <Input type="submit" value="Add Job" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecretEnterPage;
