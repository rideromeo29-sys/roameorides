'use client'

/**
 * @author: @emerald-ui
 * @description: Shiny Button Component - A button with a shiny gradient effect
 */
import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Sparkles } from 'lucide-react'

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  showIcon?: boolean
}

export default function ShinyButton({
  className,
  children = 'Book Now',
  showIcon = true,
  ...props
}: ShinyButtonProps) {
  return (
    <button
      className={cn(
        // Base styles with the specific requested gradient
        'h-12 w-max rounded-full border-none bg-[linear-gradient(325deg,#E87722_0%,#ffbd8a_55%,#E87722_90%)] bg-[length:280%_auto] px-8 py-2 font-bold text-white shadow-xl transition-[background-position] duration-700 hover:bg-right-top focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center gap-2 uppercase tracking-widest text-[11px]',
        className
      )}
      type='button'
      {...props}
    >
      {showIcon && <Sparkles size={16} className="animate-pulse" />}
      {children}
    </button>
  )
}