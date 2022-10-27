import { useState, useEffect, useLayoutEffect } from "react";
const dataURL = "./data.json";

const Technology = () => {
  let type = window.innerWidth > 991 ? "portrait" : "landscape";
  const [imgType, setImgType] = useState(type);
  const [data, setData] = useState([]);
  const [name, setName] = useState("Launch vehicle");
  const [images, setImages] = useState({
    portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
    landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
  });
  const [image, setImage] = useState(images[imgType]);
  const [description, setDescription] = useState(
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  );

  const getInfo = (tech) => {
    const obj = data.find((ele) => {
      return ele["name"] === tech ? ele : undefined;
    });

    const { name, images, description } = obj;
    setName(name);
    setImages(images);
    setImage(images[imgType]);
    setDescription(description);
  };

  useLayoutEffect(() => {
    function updateSize() {
      setImgType(window.innerWidth > 991 ? "portrait" : "landscape");
      setImage(images[imgType]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [window.innerWidth]);

  useEffect(() => {
    fetch(dataURL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ technology }) => {
        setData(technology);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-content technology-page">
      <h1 className="main-heading size-5 white text-uppercase spacing-1 text-center text-sm-start">
        <span className="order fw-bold">03</span>Space launch 101
      </h1>
      <div className="info-holder d-flex flex-column-reverse flex-lg-row justify-content-between">
        <div className="info d-flex flex-column flex-lg-row ">
          <ul className="btns mb-0 list-unstyled d-flex flex-row flex-lg-column justify-content-center justify-content-lg-start">
            {data.map((obj) => {
              return (
                <li key={obj.id}>
                  <button
                    className={`nav-btn btn size-4 serif rounded-circle ${
                      obj.name === name ? "active" : ""
                    }`}
                    onClick={() => getInfo(obj.name)}
                  >
                    {obj.id}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="text text-center text-lg-start mx-auto">
            <p className="heading size-7 text-uppercase grey">
              The terminology...
            </p>
            <p className="name size-3 serif white text-uppercase">{name}</p>
            <p className="description size-6 barlow grey mb-0">{description}</p>
          </div>
        </div>
        <div className="image-holder">
          <img src={image} alt={name} className={`image`} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
