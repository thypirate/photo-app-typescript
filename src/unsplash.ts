import { PhotoSearchAPIResult } from "./interface";

const UNSPLASH_API_KEY = "Client-ID my super secret access key";

export const fetchImagesFromAPI = async (
  searchTerm: string,
  perPage: number
): Promise<PhotoSearchAPIResult> => {
  const result = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}`,
    {
      headers: {
        Authorization: UNSPLASH_API_KEY,
      },
    }
  );
  const json = (await result.json()) as PhotoSearchAPIResult;
  return json;
};
