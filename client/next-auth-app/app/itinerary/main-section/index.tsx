'use client';

import { useState } from 'react';
import { mockData } from './data';
import { getMergeItineraries } from './utils';
import { cn } from '@/lib/shadcn/utils';
import { Typography } from '@/components/typography';

export function MainSection() {
  const [selectedDay, setSelectedDay] = useState<string | number>('all');

  const mergedItineraries = getMergeItineraries(mockData);

  return (
    <div className="bg-slate-100 py-20">
      <div className="container">
        <div className="flex flex-wrap gap-4">
          <div
            onClick={() => setSelectedDay('all')}
            className={cn(
              'rounded bg-gray-300 px-6 py-2 text-lg',
              selectedDay == 'all' && 'bg-blue-500'
            )}
          >
            All
          </div>

          {mergedItineraries.map((dayItinerary) => (
            <div
              key={dayItinerary.day}
              className={cn(
                'rounded bg-gray-300 px-6 py-2 text-lg',
                selectedDay == dayItinerary.day && 'bg-blue-500'
              )}
              onClick={() => setSelectedDay(dayItinerary.day)}
            >
              Day {dayItinerary.day}
            </div>
          ))}
        </div>

        {mergedItineraries.map((dayItinerary) => (
          <div key={dayItinerary.day}>
            <Typography size="p1">{dayItinerary.day}</Typography>

            {dayItinerary.itinerary.map((item) => (
              <div key={item.id}>
                {item.itineraryTitle}

                {item.elements.map((element, index) => (
                  <div key={index}>{element.elementName}</div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
