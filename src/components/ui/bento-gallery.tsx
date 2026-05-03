"use client"

import React, { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string
  span: string 
}

interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[]
  title: string
  description: string
}

const ImageModal = ({ item, onClose }: { item: ImageItem; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.url} alt={item.title} className="h-auto max-h-[85vh] w-full rounded-xl object-contain shadow-2xl" />
        <div className="mt-4 text-center">
          <h3 className="text-white text-2xl font-serif italic">{item.title}</h3>
          <p className="text-stone-400 mt-2">{item.desc}</p>
        </div>
      </motion.div>
      <button onClick={onClose} className="absolute right-6 top-6 text-white/50 hover:text-white transition-colors">
        <X size={32} />
      </button>
    </motion.div>
  )
}

const InteractiveImageBentoGallery: React.FC<InteractiveImageBentoGalleryProps> = ({ imageItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      const scrollTo = direction === "left" 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16">
      {/* Header Section */}
      <div className="container mx-auto px-6 text-left mb-12">
        <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl uppercase">{title}</h2>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4">
          <p className="max-w-2xl text-stone-400">{description}</p>
          
          {/* Interaction Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-orange-500/80"
          >
            <Maximize2 size={14} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
              Click any image to expand
            </span>
          </motion.div>
        </div>
      </div>

      {/* Gallery Wrapper for Absolute Arrows */}
      <div className="relative group/gallery">
        
        {/* Middle-Left Arrow (Desktop Only) */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover/gallery:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Middle-Right Arrow (Desktop Only) */}
        <button 
          onClick={() => scroll("right")}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover/gallery:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
        >
          <ChevronRight size={32} />
        </button>

        {/* Bento Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 pb-8 touch-pan-x"
          style={{ scrollbarWidth: 'none' }}
        >
          {imageItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedItem(item)}
              className={cn(
                "snap-center shrink-0 relative h-[450px] md:h-[500px] w-[75vw] md:w-[450px] overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900 group cursor-pointer",
                item.span
              )}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay with subtle instruction hint on hover (Desktop) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-500 text-[10px] uppercase tracking-[0.3em] font-bold">Inner Sanctuary</span>
                  <h3 className="text-2xl font-serif italic text-white mt-2">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery