import { useEffect, useState } from "react";
import { getBreed } from "../services/breeds_service";

export default function useSearchBreed() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (query.length < 3) return;

    const searchBreeds = async () => {
      setError(null);
      setLoading(true);
      const breedImagesData = await getBreed(query);
      setLoading(false);
      if (breedImagesData.status === "error") {
        setError(breedImagesData.message);
      } else {
        setImages(breedImagesData.message);
      }
    };

    const timerId = setTimeout(searchBreeds, 500);
    return () => clearTimeout(timerId);
  }, [query]);

  return [query, setQuery, images, loading, error];
}
