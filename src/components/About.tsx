import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Users, BookOpen, Trophy, Globe } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function About() {
  const features = [
    {
      icon: Users,
      title: "Đội ngũ giáo viên",
      description: "Những giáo viên tận tâm với nhiều năm kinh nghiệm và niềm đam mê giảng dạy."
    },
    {
      icon: BookOpen,
      title: "Chương trình đào tạo",
      description: "Phương pháp giảng dạy hiện đại kết hợp với các nguyên tắc giáo dục truyền thống."
    },
    {
      icon: Trophy,
      title: "Thành tích xuất sắc",
      description: "Liên tục được xếp hạng trong top các trường có thành tích học tập cao nhất."
    },
    {
      icon: Globe,
      title: "Tầm nhìn toàn cầu",
      description: "Chuẩn bị cho học sinh thành công trong thế giới kết nối toàn cầu."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="right">
            <div className="relative">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NTU0MjgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Học sinh học tập tại thư viện"
                    className="w-full h-96 lg:h-[450px] object-cover"
                  />
                </motion.div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full"
                animate={{ 
                  rotate: [360, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity }
                }}
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection>
              <div className="space-y-4">
                <motion.h2 
                  className="text-3xl lg:text-4xl text-primary"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Về{" "}
                  <motion.span
                    className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Trường THPT Đức Linh
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Trong hơn 48 năm, Trường THPT Đức Linh đã đi đầu trong đổi mới giáo dục, 
                  nuôi dưỡng những tâm hồn trẻ và chuẩn bị cho các em những thách thức của tương lai.
                </motion.p>
                
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Phương pháp giáo dục toàn diện của chúng tôi kết hợp tính nghiêm túc trong học thuật 
                  với việc phát triển nhân cách, đảm bảo rằng học sinh tốt nghiệp không chỉ có kiến thức 
                  mà còn là những nhà lãnh đạo có tấm lòng nhân ái, sẵn sàng tạo ra tác động tích cực cho thế giới.
                </motion.p>
              </div>
            </AnimatedSection>

            {/* Features Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <motion.div 
                            className="bg-primary/10 p-2 rounded-lg shrink-0"
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5,
                              backgroundColor: "var(--primary)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ color: "white" }}
                              transition={{ duration: 0.2 }}
                            >
                              <feature.icon className="h-5 w-5 text-primary" />
                            </motion.div>
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="font-medium mb-2"
                              whileHover={{ color: "var(--primary)" }}
                              transition={{ duration: 0.2 }}
                            >
                              {feature.title}
                            </motion.h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}