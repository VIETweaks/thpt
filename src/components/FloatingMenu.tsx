import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Home, Info, BookOpen, UserPlus, Newspaper, Phone } from "lucide-react";
import { Link, useRouter } from "../utils/router";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentPath } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const menuItems = [
    { href: "/", label: "Trang chủ", icon: Home, angle: -90 },
    { href: "/about", label: "Giới thiệu", icon: Info, angle: -45 },
    { href: "/programs", label: "Chương trình", icon: BookOpen, angle: 0 },
    { href: "/admissions", label: "Tuyển sinh", icon: UserPlus, angle: 45 },
    { href: "/news", label: "Tin tức", icon: Newspaper, angle: 90 },
    { href: "/contact", label: "Liên hệ", icon: Phone, angle: 135 }
  ];

  const radius = 65;

  const getPositionFromAngle = (angle: number) => {
    const radian = angle * (Math.PI / 180);
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <>
      {/* Show only on mobile - using block instead of md:hidden for better visibility */}
      <div className="block md:hidden">
        {/* Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Floating Container - Make sure it's always visible */}
        <div className="fixed bottom-6 left-6 z-50">
          {/* Menu Items */}
          <AnimatePresence>
            {isOpen && (
              <>
                {menuItems.map((item, index) => {
                  const position = getPositionFromAngle(item.angle);
                  const isActive = currentPath === item.href;
                  
                  return (
                    <motion.div
                      key={item.href}
                      className="absolute"
                      initial={{ 
                        scale: 0,
                        x: 0,
                        y: 0,
                        opacity: 0
                      }}
                      animate={{ 
                        scale: 1,
                        x: position.x,
                        y: position.y,
                        opacity: 1
                      }}
                      exit={{ 
                        scale: 0,
                        x: 0,
                        y: 0,
                        opacity: 0
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        delay: index * 0.02
                      }}
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      <Link to={item.href} onClick={() => setIsOpen(false)}>
                        <motion.div
                          className={`
                            relative w-12 h-12 rounded-2xl flex items-center justify-center
                            backdrop-blur-xl border shadow-lg cursor-pointer group
                            ${isActive 
                              ? "bg-white/95 border-white/30 text-primary shadow-xl" 
                              : "bg-white/10 border-white/20 text-white"
                            }
                          `}
                          whileHover={{ 
                            scale: 1.15,
                            y: -3,
                            backgroundColor: isActive ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.2)"
                          }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <item.icon className="w-5 h-5" strokeWidth={2} />
                          
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                        bg-gray-900 text-white text-xs px-2 py-1 rounded-lg 
                                        whitespace-nowrap opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-200 pointer-events-none
                                        shadow-lg border border-gray-700">
                            {item.label}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                                          w-2 h-2 bg-gray-900 border-r border-b border-gray-700
                                          rotate-45 -mt-1"></div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </>
            )}
          </AnimatePresence>

          {/* Main FAB - Always visible on mobile */}
          <motion.button
            className={`
              relative w-14 h-14 rounded-2xl flex items-center justify-center
              backdrop-blur-xl border shadow-2xl cursor-pointer overflow-hidden
              transition-all duration-300 ease-out
              ${isOpen 
                ? "bg-rose-500/90 border-rose-400/50 shadow-rose-500/25" 
                : "bg-blue-600/90 border-blue-500/50 shadow-blue-600/25"
              }
            `}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: isOpen 
                ? "0 20px 60px rgba(244, 63, 94, 0.4)" 
                : "0 10px 40px rgba(37, 99, 235, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Background shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
            
            {/* Icon */}
            <motion.div
              className="relative z-10 text-white"
              animate={{ 
                rotate: isOpen ? 45 : 0,
                scale: isOpen ? 1.1 : 1
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25 
              }}
            >
              <Plus className="w-6 h-6" strokeWidth={2.5} />
            </motion.div>

            {/* Ripple effect */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-current opacity-30"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.8, 2.5],
                    opacity: [0.3, 0.1, 0]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          </motion.button>

          {/* Breathing glow when closed */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
      </div>

     
    </>
  );
}