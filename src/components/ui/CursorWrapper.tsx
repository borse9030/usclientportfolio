"use client";

import dynamic from 'next/dynamic';

const MagneticCursor = dynamic(() => import('@/components/ui/MagneticCursor'), { ssr: false });

export default function CursorWrapper() {
  return <MagneticCursor />;
}
