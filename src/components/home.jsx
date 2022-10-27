import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="main-content home-page d-flex align-items-center align-items-lg-end justify-content-between flex-column flex-lg-row">
      <div className="intro text-center text-lg-start">
        <p className="grey size-5 text-uppercase spacing-1">
          So, you want to travel to
        </p>
        <h1 className="white size-1 text-uppercase serif heading">Space</h1>
        <p className="grey size-6 line-1 mb-0">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <NavLink
        className="explore text-decoration-none rounded-circle serif size-4 text-uppercase d-flex align-items-center justify-content-center"
        to="/destination"
      >
        explore
      </NavLink>
    </div>
  );
};

export default Home;
