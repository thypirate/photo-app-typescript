export interface Photo {
  id: number;
  width: number;
  height: number;
  urls: urls;
  photographer: string;
}

interface urls {
  small: string;
  thumb: string;
}

export interface PhotoSearchAPIResult {
  total: number;
  total_pages: number;
  results: Photo[];
}
