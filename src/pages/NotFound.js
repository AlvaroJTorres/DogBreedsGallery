/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "../components/Text";

export default function NotFound() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(({ message }) => setImage(message));
  }, []);

  return (
    <>
      <Link to="/">
        <Title>Breedable</Title>
      </Link>
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h1 {
            font-size: 5em;
            margin: 0;
          }
          img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            margin: 1em;
          }
        `}
      >
        <h1>404</h1>
        <p>Oops! Nothing Here!</p>
        <img alt="random dog" src={image} />
      </div>
    </>
  );
}
