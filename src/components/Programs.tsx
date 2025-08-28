import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Clock, Users, Award, Target, TrendingUp, Globe } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function Programs() {
  const programs = [
    {
      title: "Khoa học & Công nghệ",
      description: "Chương trình tiên tiến chuẩn bị học sinh cho nghề nghiệp trong lĩnh vực khoa học, công nghệ, kỹ thuật và toán học.",
      image: "https://images.unsplash.com/photo-1630959302862-82cec6653d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVEVNJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYzNDkyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3 Năm",
      students: "320",
      achievements: "15 Giải thưởng",
      
      stats: [
        { icon: Target, label: "Phòng thí nghiệm", value: "1" },
        { icon: TrendingUp, label: "Dự án nghiên cứu", value: "45" },
        { icon: Award, label: "Tỷ lệ vào ĐH kỹ thuật", value: "98%" }
      ]
    },
    {
      title: "Nghệ thuật & Nhân văn",
      description: "Chương trình toàn diện thúc đẩy tư duy phản biện, sáng tạo và kỹ năng giao tiếp qua nhiều lĩnh vực nghệ thuật và văn học.",
      image: "https://images.unsplash.com/photo-1581929430054-760e30fe5c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwbXVzaWMlMjBjbGFzcyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1NjM0OTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3 Năm",
      students: "280",
      achievements: "12 Giải thưởng",
      
      stats: [
        { icon: Target, label: "Phòng học chuyên dụng", value: "1" },
        { icon: TrendingUp, label: "Triển lãm nghệ thuật", value: "24" },
        { icon: Award, label: "Giải thưởng nghệ thuật", value: "32" }
      ]
    },
    {
      title: "Chương trình Quốc tế",
      description: "Chương trình được công nhận toàn cầu phát triển những con người ham học hỏi, có kiến thức và quan tâm đến thế giới.",
      image: "https://images.unsplash.com/photo-1629019324504-2e1fdf96e5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwcHJvZ3JhbSUyMHN0dWRlbnRzJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc1NjM0OTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "2 Năm",
      students: "150",
      achievements: "8 Giải thưởng",
  
      stats: [
        { icon: Globe, label: "Đối tác quốc tế", value: "--" },
        { icon: Award, label: "Chứng chỉ quốc tế", value: "98%" },
        { icon: TrendingUp, label: "Học bổng du học", value: "65%" }
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Chương trình{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              học tập
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Khám phá các chương trình học tập toàn diện của chúng tôi được thiết kế để thách thức, 
            truyền cảm hứng và chuẩn bị cho học sinh những nỗ lực tương lai.
          </motion.p>
        </AnimatedSection>

        {/* Programs Grid */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Full-width Image */}
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      #{index + 1}
                    </motion.div>

                    {/* Title Overlay on Hover */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <h3 className="text-xl text-white drop-shadow-lg">{program.title}</h3>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Title and Description */}
                    <div className="space-y-3">
                      <motion.h3 
                        className="text-xl text-primary"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {program.title}
                      </motion.h3>
                      
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    </div>
                    
                    {/* Stats Grid */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    >
                      {program.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                          whileHover={{ 
                            scale: 1.02, 
                            backgroundColor: "var(--primary)",
                            color: "white"
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <div className="flex items-center space-x-2">
                            <stat.icon className="h-4 w-4" />
                            <span className="text-sm">{stat.label}</span>
                          </div>
                          <span className="font-medium">{stat.value}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Main Stats Row */}
                    <motion.div 
                      className="flex justify-between items-center pt-4 border-t border-border"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      {[
                        { icon: Clock, value: program.duration },
                        { icon: Users, value: program.students },
                        { icon: Award, value: program.achievements }
                      ].map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          className="flex items-center space-x-1 text-sm text-muted-foreground"
                          whileHover={{ scale: 1.1, color: "var(--primary)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <stat.icon className="h-4 w-4" />
                          <span>{stat.value}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <motion.span
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          Tìm hiểu thêm
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={1}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="relative overflow-hidden">
              <motion.span
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Xem tất cả chương trình
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white/10"
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