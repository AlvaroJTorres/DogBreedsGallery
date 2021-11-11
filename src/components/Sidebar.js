import styled from "@emotion/styled";
import { Text } from "./Text";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1em;
  height: 54vh;
  overflow-y: auto;
  li {
    padding: 0.5em;
    border-bottom: 1px solid #1e9b9e;
  }
`;

export default function Sidebar({ items, setQuery }) {
  function handleClick(e) {
    setQuery(e.target.outerText);
  }
  return (
    <div>
      <Text size="1.5em">Type one of these</Text>
      <List>
        {items.map((item) => (
          <li key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </List>
      <Text size="1.2em">This is a list, scroll down!</Text>
    </div>
  );
}
