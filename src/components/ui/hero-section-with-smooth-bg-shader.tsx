import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  // Legacy text/button API
  title?: string
  highlightText?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void

  // Raftra-style hero API (from animated-shader-hero)
  trustBadge?: {
    text: string
    icons?: string[]
  }
  heroHeadline?: {
    line1: string
    line2: string
  }
  heroSubtitle?: string
  heroButtons?: {
    primary?: {
      text: string
      onClick?: () => void
    }
    secondary?: {
      text: string
      onClick?: () => void
    }
  }

  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
  maxWidth?: string
  veilOpacity?: string
  fontFamily?: string
  fontWeight?: number
}

export function HeroSection({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  onButtonClick,
  trustBadge,
  heroHeadline,
  heroSubtitle,
  heroButtons,
  colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-white/20 dark:bg-black/25",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 500,
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}>
      {/* Local animation keyframes and helper classes for hero content */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
        {heroHeadline ? (
          <div className="flex flex-col items-center justify-center text-white">
            {/* Trust Badge from animated-shader-hero */}
            {trustBadge && (
              <div className="mt-12 mb-8 animate-fade-in-down">
                <div className="flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm">
                  {trustBadge.icons && (
                    <div className="flex">
                      {trustBadge.icons.map((icon, index) => (
                        <span
                          key={index}
                          className={`text-${
                            index === 0 ? "yellow" : index === 1 ? "orange" : "amber"
                          }-300`}
                        >
                          {icon}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="text-orange-800 font-semibold">{trustBadge.text}</span>
                </div>
              </div>
            )}

            <div className="text-center space-y-6 max-w-5xl mx-auto px-4">
              <div className="space-y-2">
                <h1
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-500 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up animation-delay-200 ${titleClassName}`}
                  style={{ fontFamily, fontWeight }}
                >
                  {heroHeadline.line1}
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-500 via-emerald-700 to-teal-700 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-up animation-delay-400">
                  {heroHeadline.line2}
                </h1>
              </div>

              {heroSubtitle && (
                <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
                  <p
                    className={`text-lg md:text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed drop-shadow-sm ${descriptionClassName}`}
                  >
                    {heroSubtitle}
                  </p>
                </div>
              )}

              {heroButtons && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800">
                  {heroButtons.primary && (
                    <button
                      onClick={heroButtons.primary.onClick}
                      className={`px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 ${buttonClassName}`}
                    >
                      {heroButtons.primary.text}
                    </button>
                  )}
                  {heroButtons.secondary && (
                    <button
                      onClick={heroButtons.secondary.onClick}
                      className="px-8 py-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      {heroButtons.secondary.text}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1
              className={`font-bold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl ${titleClassName}`}
              style={{ fontFamily, fontWeight }}
            >
              {title} <span className="text-primary">{highlightText}</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-white text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}
            >
              {description}
            </p>
            <button
              onClick={onButtonClick}
              className={`px-6 py-4 sm:px-8 sm:py-6 rounded-full border-4 bg-[rgba(63,63,63,1)] border-card text-sm sm:text-base text-white hover:bg-[rgba(63,63,63,0.9)] transition-colors ${buttonClassName}`}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}