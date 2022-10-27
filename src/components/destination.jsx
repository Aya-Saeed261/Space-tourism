import { useState, useEffect } from "react";
const dataURL = "./data.json";

const Destination = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("Moon");
  const [image, setImage] = useState("./assets/destination/image-moon.png");
  const [description, setDescription] = useState(
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  );
  const [distance, setDistance] = useState("384,400 km");
  const [travel, setTravel] = useState("3 days");

  const getInfo = (destination) => {
    const obj = data.find((ele) => {
      return ele["name"] === destination ? ele : undefined;
    });
    const { name, images, description, distance, travel } = obj;
    setName(name);
    setImage(images.png);
    setDescription(description);
    setDistance(distance);
    setTravel(travel);
  };

  useEffect(() => {
    fetch(dataURL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ destinations }) => {
        setData(destinations);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-content destination-page">
      <h1 className="main-heading size-5 white text-uppercase spacing-1 text-center text-sm-start">
        <span className="order fw-bold">01</span>Pick your destination
      </h1>
      <div className="content d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-end">
        <img className="image" src={image} alt={name} />
        <div className="info-holder">
          <ul className="btns d-flex justify-content-center justify-content-lg-start list-unstyled">
            {data.map((obj) => {
              return (
                <li key={obj.id}>
                  <button
                    className={`btn rounded-0 size-7 px-0 pt-0 text-uppercase ${
                      obj.name === name ? "active white" : "grey"
                    }`}
                    onClick={() => getInfo(obj.name)}
                  >
                    {obj.name}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="info text-center text-lg-start">
            <p className="white size-2 text-uppercase serif heading lh-1">
              {name}
            </p>
            <p className="grey description size-6 barlow">{description}</p>
            <div className="numbers row">
              <div className="col-sm-6">
                <p className="grey size-8 mini-title text-uppercase">
                  Avg. distance
                </p>
                <p className="mb-0 white size-5 serif text-uppercase">
                  {distance}
                </p>
              </div>
              <div className="col-sm-6">
                <p className="grey size-8 mini-title text-uppercase">
                  Est. travel time
                </p>
                <p className="mb-0 white size-5 serif text-uppercase">
                  {travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
