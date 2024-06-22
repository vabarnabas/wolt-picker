import { Image } from "./common.types";

type Filters = {
  id: string;
  values: string[];
}[];

type Sortables = {
  id: string;
  value: number;
}[];

type Rating = {
  rating: number;
  score: number;
};

type Badge = {
  text: string;
  variant: string;
};

type Venue = {
  address: string;
  badges: Badge[];
  categories: string[];
  city: string;
  country: string;
  currency: string;
  delivers: boolean;
  delivery_price: string;
  delivery_price_highlight: boolean;
  delivery_price_int: number;
  estimate: number;
  estimate_range: string;
  franchise: string;
  id: string;
  location: [number, number];
  name: string;
  online: boolean;
  price_range: number;
  product_line: string;
  promotions: any[];
  rating: Rating;
  short_description: string;
  show_wolt_plus: boolean;
  slug: string;
  tags: string[];
};

type Link = {
  target: string;
  target_sort: string;
  target_title: string;
  title: string;
  type: string;
  venue_mainimage_blurhash: string;
};

export type Restaurant = {
  filtering: {
    filters: Filters;
  };
  image: Image;
  link: Link;
  sorting: {
    sortables: Sortables;
  };
  template: string;
  title: string;
  track_id: string;
  venue: Venue;
};
