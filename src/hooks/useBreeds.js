import { useEffect, useState } from "react";
import { getAllBreeds } from "../services/breeds_service";

export default function useBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const savedBreeds = JSON.parse(sessionStorage.getItem("breeds"));
    if (savedBreeds) {
      setBreeds(savedBreeds);
      return;
    }

    getAllBreeds().then((breedsArray) => {
      setBreeds(breedsArray);
      sessionStorage.setItem("breeds", JSON.stringify(breedsArray));
    });

    // async function fetchBreeds() {
    //   const breedsData = await getAllBreeds();
    //   setBreeds(Object.keys(breedsData.message));
    // }
    // fetchBreeds();
  }, []);

  return breeds;
}
