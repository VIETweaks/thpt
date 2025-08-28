import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "../utils/router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/programs", label: "Chương trình" },
    { href: "/admissions", label: "Tuyển sinh" },
    { href: "/news", label: "Tin tức" },
    { href: "/contact", label: "Liên hệ" }
  ];

  return (
    <motion.header 
      className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <motion.div 
                className="text-primary-foreground rounded-lg p-2 mr-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
               <img
      src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/536282635_1343338554464484_213278174255735243_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-1iC2kNqYTlomkdyZgWACI6ePIIWMUWgjp48ghYxRaA8ITLZHB4yP2HFt6mKUNrqUoNrJf_n27Y5AlZAtES4K&_nc_ohc=bKOxaCQiujMQ7kNvwHGjzi_&_nc_oc=AdlkpZzN_vJPgsgyWeiDCXNNLhq8w0xf6LH3d_SzC6_qvGH8QCv-i-XwiukX7dAR7gU&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=RCzI456QdP-yTzhHu0p2TA&oh=00_AfX6mm8ZsTV26f282DLoA-zYiot9h7iOd4I9IJYYTPJZKw&oe=68B49125"
      alt="Logo THPT Đức Linh"
      className="h-10 w-10 rounded-full object-cover"
    />
              </motion.div>
              <span className="text-6xl font-bold text-lg" >Trường THPT Đức Linh</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
  href="https://www.facebook.com/doantruongthptduclinh/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>FanPage</Button>
</a>

            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-border"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
            >
              <motion.nav 
                className="flex flex-col space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {navigationItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { x: -20, opacity: 0 },
                      visible: { x: 0, opacity: 1 }
                    }}
                  >
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                  }}
                >
                  <Link to="https://www.facebook.com/doantruongthptduclinh/" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full mt-4">FanPage</Button>
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}