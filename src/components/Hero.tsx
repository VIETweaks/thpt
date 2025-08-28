import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import { ParticleEffect, FloatingOrbs, SparkleEffect } from "./animations/ParticleEffect";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Full Screen Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1572104410977-c46c791e5b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYmVhdXRpZnVsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjY0MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1f2937'
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </motion.div>

      {/* Floating Orbs Background */}
      <FloatingOrbs count={6} />

      {/* Particle Effects */}
      <ParticleEffect 
        count={60}
        colors={[
          "rgba(255,255,255,0.8)", 
          "rgba(59,130,246,0.6)", 
          "rgba(147,197,253,0.4)",
          "rgba(196,231,255,0.3)"
        ]}
        size={[2, 6]}
        speed={[4, 10]}
        opacity={[0.2, 0.9]}
      />

      {/* Sparkle Effect */}
      <SparkleEffect count={25} />

      {/* Advanced Particle Animation */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -80, -30],
              x: [
                0, 
                Math.sin(i * 0.5) * 30, 
                Math.cos(i * 0.3) * 20,
                0
              ],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div 
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-70"
                style={{
                  boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                }}
              />
              <motion.div
                className="absolute inset-0 w-2 h-2 rounded-full bg-white/30"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Centered Content */}
          <div className="text-center text-white max-w-5xl">
            <div className="space-y-8">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Nơi ươm mầm{" "}
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  tương lai
                </motion.span>{" "}
                từ năm 1977
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Trao quyền cho học sinh phát huy hết tiềm năng thông qua phương pháp giảng dạy 
                sáng tạo, công nghệ tiên tiến và môi trường học tập ấm áp, thân thiện.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  <motion.span
                    className="relative z-10 flex items-center"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                     <a
  href="./programs"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center group"
>
                    Khám phá chương trình
                 </a>   
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-blue-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-white/30 bg-white/90 !text-gray-900 hover:!bg-white hover:border-white px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a
  href="https://www.facebook.com/doantruongthptduclinh/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center group"
>
  <Play className="mr-2 h-5 w-5 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
  <span className="text-gray-900">Xem FanPage của trường</span>
</a>

                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/20 max-w-4xl mx-auto">
                {[
                  { number: "1,400+", label: "Học sinh" },
                  { number: "95%", label: "Tỷ lệ đỗ đại học" },
                  { number: "50+", label: "Chương trình học" }
                ].map((stat, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="text-center"
                    >
                      <motion.div 
                        className="text-4xl lg:text-5xl font-bold text-blue-300 mb-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 + index * 0.1, type: "spring" }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-300 text-xl">{stat.label}</div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ 
              scaleY: [1, 0.3, 1],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}