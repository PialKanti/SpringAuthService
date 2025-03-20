'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface Props {
  url: string;
  height?: string | number;
  width?: string | number;
}

export function VideoPlayer({ url, width, height }: Props) {
  return (
    <ReactPlayer
      url={url}
      controls={true}
      width={width}
      height={height}
      className="aspect-video"
    />
  );
}
