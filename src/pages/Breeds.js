/** @jsxImportSource @emotion/react*/
import { css } from "@emotion/react";
import Gallery from "../components/Gallery";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { Title } from "../components/Text";
import useBreeds from "../hooks/useBreeds";
import useSearchBreed from "../hooks/useSearchBreed";

export default function Breeds() {
  const breeds = useBreeds();
  const [query, setQuery, images, loading, error] = useSearchBreed();

  return (
    <main>
      <Title>Breedable</Title>
      <Search
        query={query}
        setQuery={setQuery}
        loading={loading}
        error={error}
      />
      <div
        css={css`
          display: flex;
          margin-top: 2em;
        `}
      >
        <Sidebar items={breeds} setQuery={setQuery} />
        <Gallery images={images} />
      </div>
    </main>
  );
}
