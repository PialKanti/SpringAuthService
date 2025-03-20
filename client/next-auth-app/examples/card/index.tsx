import React from 'react';
import { EXAMPLE_CARD_IMAGE_DIMENSION_1_1, ICard } from './interface';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Card component representing a blog post with image,
 * title, author, date, and content.
 *
 *
 * Card Component Guidelines:
 * When creating a new Card component, adhere to the following guidelines:
 *  - **Width and Max-Width**: Avoid setting width or max-width within the Card
 * component, as these values will be determined by the parent component or section
 * for better flexibility in layout design.
 *  - **Semantic HTML**: Use semantic HTML elements to enhance accessibility and
 * provide a clear structure to the content within the Card component.
 *  - **Responsiveness**: Ensure that the Card component is responsive, adapting to
 * various screen sizes and devices for a seamless user experience.
 *  - **Theme Compatibility**: If the application has theme configurations, ensure
 * that the styles in the Card component are compatible with different themes,
 * maintaining a consistent and visually appealing design.
 *
 * Use Case Stories:
 *  - **Single Card View**: Utilize the Card component to display a single blog
 * post in a full-width container, emphasizing the content's importance.
 *  - **Grid Card View**: Arrange multiple Card components in a responsive grid
 * layout, providing an organized and visually appealing presentation of blog posts.
 *  - **Carousel View**: Implement a carousel or slider to showcase multiple Card
 * components in a rotating manner, offering a dynamic and engaging user experience.
 */
export const Card = ({ image, title, author, date, content }: ICard) => {
  return (
    <article className="overflow-hidden rounded-xl border-2 bg-white">
      <div>
        <Image
          className="w-full object-cover"
          src={image.src}
          alt={image.alt || title}
          blurDataURL={image.lqip}
          placeholder="blur"
          width={EXAMPLE_CARD_IMAGE_DIMENSION_1_1.width}
          height={EXAMPLE_CARD_IMAGE_DIMENSION_1_1.height}
        />
        <div className="p-8">
          <header>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {author}
            </h3>
            <Link
              href="#"
              className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
            >
              {title}
            </Link>
          </header>
          <p className="mt-2 text-gray-600">{content}</p>
          {/* Display the date */}
          <time className="mt-4 text-sm text-gray-600">
            Published on {date}
          </time>
        </div>
      </div>
    </article>
  );
};
