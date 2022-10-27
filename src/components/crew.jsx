import { useState, useEffect } from "react";
const dataURL = "./data.json";

const Crew = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("Douglas Hurley");
  const [image, setImage] = useState("./assets/crew/image-douglas-hurley.png");
  const [role, setRole] = useState("Commander");
  const [bio, setBio] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );

  const getInfo = (member) => {
    const obj = data.find((ele) => {
      return ele["name"] === member ? ele : undefined;
    });
    const { name, images, role, bio } = obj;
    setName(name);
    setImage(images.png);
    setRole(role);
    setBio(bio);
  };

  useEffect(() => {
    fetch(dataURL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ crew }) => {
        setData(crew);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-content crew-page">
      <h1 className="main-heading size-5 white text-uppercase spacing-1 text-center text-sm-start">
        <span className="order fw-bold">02</span>Meet your crew
      </h1>
      <div className="info-holder d-flex flex-column-reverse flex-md-column flex-lg-row justify-content-between">
        <div className="info d-flex flex-column-reverse flex-md-column justify-content-between">
          <div className="text text-center text-lg-start mx-auto">
            <p className="role size-4 serif white text-uppercase">{role}</p>
            <p className="name size-3 serif white text-uppercase">{name}</p>
            <p className="bio size-6 barlow grey">{bio}</p>
          </div>
          <ul className="btns mb-0 d-flex justify-content-center justify-content-lg-start list-unstyled">
            {data.map((obj) => {
              return (
                <li key={obj.id}>
                  <button
                    className={`slider border-0 rounded-circle btn p-0 ${
                      obj.name === name ? "active" : ""
                    }`}
                    onClick={() => getInfo(obj.name)}
                  ></button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="image-holder d-flex justify-content-center align-items-end">
          <img
            src={image}
            alt={name}
            className={`image ${name === "Douglas Hurley" ? "douglas" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
