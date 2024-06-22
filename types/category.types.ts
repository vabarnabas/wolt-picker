import { Image } from "./common.types";

export interface Category {
  content_id: string;
  description: string;
  image: Image;
  link: {
    target: string;
    target_sort: string;
    target_title: string;
    title: string;
    type: string;
  };
  quantity: number;
  quantity_str: string;
  template: string;
  title: string;
  track_id: string;
}
