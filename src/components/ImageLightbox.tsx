import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: { src: string; caption: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox = ({ images, isOpen, currentIndex, onClose, onNavigate }: ImageLightboxProps) => {
  if (!isOpen) return null;

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          className="max-h-[75vh] max-w-full object-contain rounded-lg"
        />
        <p className="text-white text-center mt-4 text-lg font-medium">
          {images[currentIndex].caption}
        </p>
        <p className="text-white/60 text-sm mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default ImageLightbox;
