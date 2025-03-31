"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Restore scrolling
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft")
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    if (e.key === "ArrowRight")
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="space-y-4">
        <div
          className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={`${alt} - main image`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-black/50 p-3 rounded-full">
              <ZoomIn className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-md cursor-pointer",
                  index === 0 && "ring-2 ring-red-600"
                )}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${alt} - image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 33vw, 150px"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 h-screen flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${alt} - fullscreen image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
