import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function News() {
  const news = [
    {
      category: "Thành tích",
      title: "Trường THPT Đức Linh đoạt thư viện cấp 2 của Tỉnh",
      excerpt: "Học sinh của chúng tôi đã giành được vị trí đầu tiên trong cuộc thi Khoa học Kỹ thuật cấp quốc gia với dự án năng lượng tái tạo sáng tạo.",
      date: "15 tháng 3, 2024",
      readTime: "3 phút đọc"
    },
    {
      category: "Sự kiện",
      title: "Đêm nhạc Mùa xuân thường niên cuối tuần này",
      excerpt: "Tham gia cùng chúng tôi trong đêm nhạc mùa xuân thường niên với các tiết mục của dàn hợp xướng và dàn nhạc từng đoạt giải thưởng.",
      date: "12 tháng 3, 2024",
      readTime: "2 phút đọc"
    },
    {
      category: "Thông báo",
      title: "Phòng thí nghiệm sạch sẽ - khoáng đảng",
      excerpt: "Thiết bị phòng thí nghiệm hiện đại sẽ nâng cao chương trình khoa học và công nghệ của chúng tôi từ tháng 4/2024.",
      date: "10 tháng 3, 2024",
      readTime: "4 phút đọc"
    },
    {
      category: "Thể thao",
      title: "Đội bóng rổ vào chung kết khu vực",
      excerpt: "Đội bóng rổ của trường đã tiến vào chung kết khu vực sau chiến thắng kịch tính trong trận bán kết.",
      date: "8 tháng 3, 2024",
      readTime: "2 phút đọc"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Thành tích": return "bg-green-100 text-green-800";
      case "Sự kiện": return "bg-blue-100 text-blue-800";
      case "Thông báo": return "bg-orange-100 text-orange-800";
      case "Thể thao": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="news" className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(45deg, var(--primary), var(--secondary), var(--primary))",
          backgroundSize: "200% 200%"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl text-primary"
            initial={{ opacity: 0, rotateX: -15 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tin tức &{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cập nhật
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cập nhật thông tin mới nhất về các hoạt động, thành tích và thông báo 
            từ cộng đồng trường học của chúng tôi.
          </motion.p>
        </AnimatedSection>

        {/* News Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  rotateY: 2
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{ perspective: 1000 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-xl group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {article.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      {article.excerpt}
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center justify-between pt-4 border-t border-border"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <motion.span 
                        className="text-sm text-muted-foreground"
                        whileHover={{ scale: 1.05, color: "var(--primary)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {article.readTime}
                      </motion.span>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                          <motion.span
                            className="flex items-center"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                             <a
  href="./news"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center group"
>
                            Đọc thêm ➡️
                            </a>
                            
                          </motion.span>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.8}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="relative overflow-hidden group">
              <motion.span
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
  href="./news"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center group"
>
               Xem tất cả tin tức ➡️
                </a>
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}