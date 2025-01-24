/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

export default function Alert(props) {
  return (
    <>
      <section
        className={`alert-background ${!props.show ? "hidden" : null}`}
      ></section>
      <section className={`alert-holder ${!props.show ? "hidden" : null}`}>
        <div className={`alert ${props.type == "error" ? "error" : ""}`}>
          <h3 className="alert-head">{props.heading}</h3>
          <p className="">{props.text}</p>
        </div>
      </section>
    </>
  );
}
