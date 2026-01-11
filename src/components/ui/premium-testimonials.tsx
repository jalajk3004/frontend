import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, ArrowLeft, ArrowRight,  Timer, Computer, ArrowUpNarrowWideIcon, Scale } from 'lucide-react';

const testimonials = [
  {
    name: "From Hours to Minutes",
    avatar: Timer,
    text: "Marketing teams spend 15+ hours weekly on repetitive tasks. Raftra automates creative production,ad fatigue detection, budget optimization, and commerce managemnet-freeing your team to focus on strategy and growth.",
    results: ["save 15+ hours/week"]
  },
  {
    name: "Multi-Platform Chaos, Simplified",
    avatar: Computer,
    text: "Managing Meta, Google, LinkedIn, Instagram separately is inefficient and error-prone. Raftra provides one unified dashboard to launch, monitor and optimize campaigns across all platform simultaneously.",
    results: ["4 platform, 1 dashboard"]
  },
  {
    name: "Stop guessing, Start growing",
    avatar: ArrowUpNarrowWideIcon,
    text: "Without AI-powered insights, brands waste ad spend on underperforming campaigns. Raftra’s ROAS prediction and financial insights ensure every rupee is invested strategically for maximum returns.",
    results: ["342% average ROI"]
  },
  {
    name: "Scale without Breaking",
    avatar: Scale,
    text: "Growing brands struggle to scale campaigns without increasing team size. Raftra’s AI handles creative refresh, fatigue detection, and optimization automatically—allowing you to 10x output with the same team.",
    results: ["10x campaign capacity"]
  }
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32  text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />

        {/* Moving light orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-rose-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${25 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.h2
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-emerald-900"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="bg-clip-text  text-center flex justify-center"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            The Growth OS Your Brand Needs
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl  max-w-3xl mx-auto leading-relaxed text-center m-2 text-black"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Traditional marketing tools are fragmented, manual, and time-consuming. Raftra unifies everything into one intelligent platform that works 24/7 for your brand's growth.
        </motion.p>



        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/[0.25] p-8 md:p-12">
                
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08] rounded-3xl"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '300% 300%'
                    }}
                  />
=
                  <motion.div
                    className="absolute top-8 right-8 opacity-20"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-16 h-16 text-white" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="justify-center flex text-center w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/20 relative">
                          {(() => {
                            const AvatarIcon = testimonials[currentIndex].avatar;
                            return (
                              <div className="w-24 h-24 mx-auto md:mx-0 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-rose-400/30 border border-white/30">
                                <AvatarIcon className="w-10 h-10 text-white" />
                              </div>
                            );
                          })()}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-rose-400/20"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>

                        {/* Floating ring animation */}
                        <motion.div
                          className="absolute inset-0 border-2 border-indigo-400/30 rounded-full"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                        {testimonials[currentIndex].name}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.blockquote
                        className="text-xl md:text-2xl text-white leading-relaxed mb-10 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.blockquote>

                      {/* Results */}
                      <div className="flex flex-wrap gap-3">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/[0.05] rounded-lg p-3 border border-white/[0.1] backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                          >
                            <span className="text-sm text-white/70 font-medium">
                              {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                    ? 'bg-indigo-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
