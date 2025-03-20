// Define the types and interfaces
export interface Image {
  path: string;
  position: number;
  contentType: number;
}

export interface Element {
  elementName: string;
  iconPath: string;
}

export interface Itinerary {
  id: number;
  itineraryTitle: string;
  elements: Element[];
  description: string | string;
  fromTime: string;
  toTime: string;
  image: Image[];
}

export interface DayItinerary {
  day: number;
  itinerary: Itinerary[];
}
