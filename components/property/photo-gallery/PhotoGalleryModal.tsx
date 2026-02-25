"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import type { GalleryImage } from "@/types";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex?: number;
}

export default function PhotoGalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: PhotoGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((p) => (p + 1) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [isOpen, onClose, goPrev, goNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos del apartamento"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        aria-label="Cerrar galería"
      >
        <IconX size={28} stroke={2} />
      </button>

      <div
        className="relative flex h-full w-full items-center justify-center p-4 pt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full max-w-5xl">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-4"
              aria-label="Foto anterior"
            >
              <IconChevronLeft size={32} stroke={2} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-4"
              aria-label="Foto siguiente"
            >
              <IconChevronRight size={32} stroke={2} />
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Ir a foto ${i + 1}`}
                  aria-current={i === currentIndex ? "true" : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
