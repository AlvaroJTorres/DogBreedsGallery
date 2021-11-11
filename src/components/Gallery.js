/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPathFromURL } from "../utils/getPathFromURL";
import Pagination from "./Pagination";

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  gap: 0.25em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Gallery({ images, itemsNumber = 12 }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
      `}
    >
      <Grid>
        {images
          .slice((currentPage - 1) * itemsNumber, currentPage * itemsNumber)
          .map((image) => (
            <Link
              key={image}
              to={getPathFromURL("https://images.dog.ceo", image)}
            >
              <img src={image} alt={image} />
            </Link>
          ))}
      </Grid>
      <Pagination
        total={images.length}
        limit={itemsNumber}
        page={currentPage}
        onSelectPage={(pageNum) => setCurrentPage(pageNum)}
      />
    </div>
  );
}
