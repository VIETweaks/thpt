import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import { Link } from "../utils/router";

export function Footer() {
  const quickLinks = [
    { href: "/about", label: "Giới thiệu" },
    { href: "/programs", label: "Chương trình học" },
    { href: "/admissions", label: "Tuyển sinh" },
    { href: "/student-life", label: "Đời sống học sinh" },
    { href: "/teachers", label: "Đội ngũ giáo viên" },
    { href: "/news", label: "Tin tức & Sự kiện" }
  ];

  const academicLinks = [
    { href: "/programs", label: "Khoa học & Công nghệ" },
    { href: "/programs", label: "Khoa học Xã hội" },
    { href: "/programs", label: "Chương trình Quốc tế" },
    { href: "/summer-classes", label: "Lớp học hè" },
    { href: "/online-learning", label: "Học trực tuyến" },
    { href: "/schedule", label: "Lịch học" }
  ];

  const supportLinks = [
    { href: "/student-services", label: "Dịch vụ học sinh" },
    { href: "/admissions", label: "Học phí" },
    { href: "/library", label: "Thư viện" },
    { href: "/counseling", label: "Hướng nghiệp" },
    { href: "/health", label: "Y tế học đường" },
    { href: "/transport", label: "Xe đưa đón" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity }
        }}
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <AnimatedSection className="space-y-6">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
                <div className="bg-primary-foreground text-primary rounded-lg p-2 mr-3">
                  <img
      src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/536282635_1343338554464484_213278174255735243_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-1iC2kNqYTlomkdyZgWACI6ePIIWMUWgjp48ghYxRaA8ITLZHB4yP2HFt6mKUNrqUoNrJf_n27Y5AlZAtES4K&_nc_ohc=bKOxaCQiujMQ7kNvwHGjzi_&_nc_oc=AdlkpZzN_vJPgsgyWeiDCXNNLhq8w0xf6LH3d_SzC6_qvGH8QCv-i-XwiukX7dAR7gU&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=RCzI456QdP-yTzhHu0p2TA&oh=00_AfX6mm8ZsTV26f282DLoA-zYiot9h7iOd4I9IJYYTPJZKw&oe=68B49125"
      alt="Logo THPT Đức Linh"
      className="h-10 w-10 rounded-full object-cover"
    />
                </div>
                 <a
  href="https://www.facebook.com/doantruongthptduclinh/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center group"
>
                <span className="font-medium text-lg">Trường THPT Đức Linh</span>
                </a>
            
            </motion.div>
            
            <motion.p 
              className="text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trao quyền cho học sinh phát huy hết tiềm năng thông qua giáo dục sáng tạo 
              và phát triển nhân cách từ năm 1995.
            </motion.p>
            
            {/* Newsletter Signup */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-medium">Nhận thông tin mới nhất</h4>
              <div className="flex space-x-2">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1"
                >
                  <Input 
                    placeholder="Nhập email của bạn" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="secondary" size="sm">Đăng ký</Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Quick Links */}
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <h4 className="font-medium">Liên kết nhanh</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <StaggerItem key={index}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          {/* Academic Programs */}
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <h4 className="font-medium">Chương trình học</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <StaggerItem key={index}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          {/* Student Support */}
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <h4 className="font-medium">Hỗ trợ học sinh</h4>
            </StaggerItem>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <StaggerItem key={index}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="py-8 border-t border-primary-foreground/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div 
              className="text-primary-foreground/80 text-sm"
              whileHover={{ color: "var(--primary-foreground)" }}
              transition={{ duration: 0.2 }}
            >
              © 2025 Trường THPT Đức Linh. Bảo lưu mọi quyền.
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <motion.a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Chính sách bảo mật
              </motion.a>
              <motion.a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Điều khoản dịch vụ
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}