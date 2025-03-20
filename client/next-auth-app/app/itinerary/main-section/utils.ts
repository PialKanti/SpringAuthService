import { DayItinerary } from './interface';

export function getMergeItineraries(data: DayItinerary[]): DayItinerary[] {
  const mergedData: Record<number, DayItinerary> = {};

  data.forEach((dayItinerary) => {
    if (!mergedData[dayItinerary.day]) {
      mergedData[dayItinerary.day] = { day: dayItinerary.day, itinerary: [] };
    }

    mergedData[dayItinerary.day].itinerary.push(...dayItinerary.itinerary);
  });

  return Object.values(mergedData);
}
