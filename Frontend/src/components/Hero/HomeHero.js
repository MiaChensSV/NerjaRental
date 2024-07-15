import "./HomeHeroStyles.css";

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
