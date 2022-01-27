import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: props.mode === "dark" ? "#051727" : "white" }}
      >
        <h2
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          About Us
        </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#051727" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                What is TextDocs?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#051727" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}>
                <strong>What Is TextDocs? TextDocs (TD) is a technique used to automatically extract valuable insights from unstructured text data. Companies use text analysis tools to quickly digest online data and documents, and transform them into actionable insights.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "#051727" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Why use TextDocs?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#051727" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>The Benefits of Text Analytics :
                <li>Work with Verbatim Comments in Many Types of Media or Language</li>
                <li>Improve Experiences for Customers, Employees, and Other Stakeholders</li>
                <li>Increase Your Company's Revenue</li>
                <li>Gain Better Control Over Your Costs</li>
                <li>Boost Efficiency of Working with Unstructured Data</li>
                <li>Make More Data-driven Decisions.</li></strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#051727" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                Who can use it?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#051727" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>It is aimed at any type of writer (author, journalist, student, etc.) who writes texts that are limited to a minimum and/or maximum number of words. It helps writers to identify unnecessary repetitions of words and promotes better harmonisation of the terminology being used. In addition, translators can easily calculate the price of a text based on their word rates.,<br /> <br />

                This tool is also intended for teachers, who can use it to assess the level of difficulty and skill required to understand a text. They can also easily extract a list of vocabulary to study. <br /> <br />

                It is also useful for web page editors to optimise the content of a page by knowing in one click which expressions and keywords are the most used.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
