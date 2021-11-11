import styled from "@emotion/styled";

const PageList = styled.div`
  display: flex;
  list-style: none;
  gap: 10px;
  li {
    font-size: 20px;
    color: #1e9b9e;
  }
`;

export default function Pagination({ total, limit, page, onSelectPage }) {
  const totalPages = Math.ceil(total / limit);
  const listItems = [];
  if (totalPages > 1 && page > 1) {
    listItems.push(
      <li key="left" onClick={() => onSelectPage(page - 1)}>
        <i>&lt;</i>
      </li>
    );
  } else {
    listItems.push(<li key="left" />);
  }
  for (let i = 1; i <= totalPages; i++) {
    const className = i === page ? "selected" : "";
    listItems.push(
      <li key={i} onClick={() => onSelectPage(i)} className={className}>
        {i}
      </li>
    );
  }
  if (totalPages > 1 && page < totalPages) {
    listItems.push(
      <li key="right" onClick={() => onSelectPage(page + 1)}>
        <i>&gt;</i>
      </li>
    );
  } else {
    listItems.push(<li key="right" />);
  }
  return <PageList>{listItems}</PageList>;
}
