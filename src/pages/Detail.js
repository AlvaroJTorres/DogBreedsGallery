/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "../components/Text";

export default function Detail({ match }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef();
  const placeholderRef = useRef();

  useEffect(() => {
    if (!placeholderRef.current) return;
    gsap.fromTo(
      placeholderRef.current,
      { opacity: 0.25 },
      { opacity: 1, repeat: -1, repeatDelay: 0, yoyo: true }
    );
  }, []);

  useEffect(() => {
    if (!imageRef.current || !imageLoaded) return;
    gsap.from(imageRef.current, {
      rotate: 0,
      scale: 2,
      y: -50,
      ease: "out",
      duration: 0.3,
    });
  }, [imageLoaded]);

  return (
    <section>
      <Link to="/">
        <Title>Breedable</Title>
      </Link>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-top: 2em;
          h2 {
            color: #9e4106;
            font-size: 2em;
            text-transform: capitalize;
            text-align: center;
          }
          img {
            width: 70%;
            margin: 0 auto;
            border: 20px solid black;
            border-radius: 15px;
            transform: rotate(-5deg);
          }
          .placeholder {
            width: 70%;
            margin: 0 auto;
            border-radius: 15px;
            height: 400px;
            background-color: #eee;
          }
        `}
      >
        <h2>{match.params.breed}</h2>
        {!imageLoaded && (
          <div ref={placeholderRef} className="placeholder"></div>
        )}
        <img
          ref={imageRef}
          css={{ display: imageLoaded ? "block" : "none" }}
          src={"https://images.dog.ceo" + match.url}
          alt={match.params.breed}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </section>
  );
}
