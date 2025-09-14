
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import './BackButton.css';

export function BackButton() {
  const router = useRouter();

  return (
    <div className="button-wrap">
      <button onClick={() => router.back()}>
        <span>Back</span>
      </button>
      <div className="button-shadow"></div>
    </div>
  );
}
