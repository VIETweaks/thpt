import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "./animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      details: ["--", "Xã Đức Linh, Lâm Đồng"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      details: ["(024) 3821 1234", "(024) 3821 5678"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@duclinh.edu.vn", "tuyensinh@duclinh.edu.vn"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      details: ["Thứ 2 - Thứ 6: 7:00 - 17:00", "Thứ 7: 8:00 - 12:00"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity }
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4 mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl text-primary font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Liên hệ{" "}
            <motion.span
              className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-bold"
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              với chúng tôi
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Có thắc mắc về chương trình học hoặc quy trình tuyển sinh? Chúng tôi sẵn sàng hỗ trợ.
            Liên hệ ngay hôm nay để tìm hiểu thêm về Trường THPT Đức Linh.
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedSection>
              <h3 className="text-2xl text-primary mb-6">Thông tin liên hệ</h3>
            </AnimatedSection>
            
            <StaggerContainer className="space-y-6">
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -2
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div 
                            className={`p-3 rounded-lg shrink-0 ${info.color}`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <info.icon className="h-5 w-5" />
                          </motion.div>
                          <div>
                            <motion.h4 
                              className="font-medium mb-2"
                              whileHover={{ color: "var(--primary)" }}
                              transition={{ duration: 0.2 }}
                            >
                              {info.title}
                            </motion.h4>
                            {info.details.map((detail, idx) => (
                              <motion.p 
                                key={idx} 
                                className="text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * idx }}
                                whileHover={{ x: 5, color: "var(--foreground)" }}
                              >
                                {detail}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Map Placeholder */}
            <AnimatedSection delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <motion.div 
                    className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="text-center space-y-2">
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MapPin className="h-8 w-8 text-primary mx-auto" />
                      </motion.div>
                      <p className="text-muted-foreground">Bản đồ tương tác</p>
                      <p className="text-sm text-muted-foreground">Tìm chúng tôi trên bản đồ</p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection direction="left" delay={0.4}>
            <Card className="relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <CardContent className="p-8 relative">
                <motion.h3 
                  className="text-2xl text-primary mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Gửi tin nhắn cho chúng tôi
                </motion.h3>
                
                <form className="space-y-6">
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="space-y-2">
                      <label htmlFor="firstName">Họ</label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Input id="firstName" placeholder="Nguyễn" />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName">Tên</label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Input id="lastName" placeholder="Văn An" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {[
                    { id: "email", label: "Email", placeholder: "nguyen.van.an@example.com", type: "email" },
                    { id: "phone", label: "Số điện thoại", placeholder: "0123 456 789", type: "tel" }
                  ].map((field, index) => (
                    <motion.div 
                      key={field.id}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <label htmlFor={field.id}>{field.label}</label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Input id={field.id} type={field.type} placeholder={field.placeholder} />
                      </motion.div>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="inquiry">Loại yêu cầu</label>
                    <motion.select
                      id="inquiry" 
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <option value="">Chọn một tùy chọn</option>
                      <option value="admissions">Tuyển sinh</option>
                      <option value="programs">Chương trình học</option>
                      <option value="financial">Học phí</option>
                      <option value="general">Thông tin chung</option>
                    </motion.select>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="message">Tin nhắn</label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Textarea 
                        id="message" 
                        placeholder="Vui lòng chia sẻ câu hỏi hoặc ý kiến của bạn..."
                        rows={5}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full" size="lg">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        Gửi tin nhắn
                      </motion.span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}