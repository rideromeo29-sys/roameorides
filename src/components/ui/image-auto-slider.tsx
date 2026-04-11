interface ImageAutoSliderProps {
  images: { src: string; alt: string }[];
}

const ImageAutoSlider = ({ images }: ImageAutoSliderProps) => {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="flex gap-4 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:running] w-max">
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAutoSlider;
