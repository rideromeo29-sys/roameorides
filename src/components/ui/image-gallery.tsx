'use client'

import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

interface ImageGalleryProps {
  images: { img: string; label: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <section className="w-full py-12 bg-[#0a0a0a]">
      {/* 
        Container height is calculated based on your 1448:1086 ratio.
        To show the "full length" without cuts, we use aspect-video or a fixed height 
        that matches that 4:3ish ratio.
      */}
      <div className="flex gap-2 h-[500px] w-full max-w-7xl mx-auto px-6 overflow-hidden">
        {images.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "relative rounded-2xl overflow-hidden cursor-pointer",
              "transition-all duration-500 ease-in-out",
              // Default state: small even width
              "flex-[1] min-w-[100px]", 
              // Hover state: expands while others shrink smoothly
              "hover:flex-[5]" 
            )}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={item.img}
              alt={item.label}
              // This prevents the image from "jumping" during the flex transition
              loading="lazy"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
               <p className="text-orange-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                Luxury Detail
              </p>
              <h3 className="text-white text-xl font-medium">{item.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}