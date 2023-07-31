export default function DevCard(props) {
  return (
    <>
      <div
        className="container"
        // style={{ backgroundColor: props.backColor, color: props.fontColor }}
      >
        <h1>
          <b>Developer</b>
        </h1>
        <div className="image">
          <img src={props.image} alt="developers image" />
        </div>
        <p className="desc">{props.description}</p>
      </div>
    </>
  );
}
