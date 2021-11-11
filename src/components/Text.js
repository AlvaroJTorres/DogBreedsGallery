import styled from "@emotion/styled";

export const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  color: #1e9b9e;
  margin: 0;
`;

export const Text = styled.p`
  text-align: center;
  color: #1e9b9e;
  font-family: "Indie Flower", cursive;
  font-size: ${({ size }) => (size ? size : "1em")};
  margin: 0;
`;
