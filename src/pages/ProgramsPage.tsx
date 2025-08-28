import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Clock, Users, Award, Book, Star, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/animations/StaggerContainer";

export function ProgramsPage() {
  const programs = [
    {
      id: "stem",
      title: "Khoa học Tự Nhiên",
      description: "Chương trình STEM tiên tiến chuẩn bị học sinh cho nghề nghiệp trong lĩnh vực khoa học, công nghệ, kỹ thuật và toán học.",
      image: "https://images.unsplash.com/photo-1630959302862-82cec6653d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVEVNJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYzNDkyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3 Năm",
      students: "320",
      achievements: "15 Giải thưởng",
      
      features: ["Thí nghiệm thực hành", "Dự án nghiên cứu", "Công nghệ AI", "Robotics"],
      subjects: ["Toán học nâng cao", "Vật lý thí nghiệm", "Hóa học ứng dụng", "Sinh học phân tử", "Tin học chuyên sâu"]
    },
    {
      id: "social-sciences",
      title: "Khoa học Xã hội",
      description: "Chương trình toàn diện thúc đẩy tư duy phản biện, sáng tạo và kỹ năng giao tiếp qua nhiều lĩnh vực khác nhau.",
      image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU1NDU1NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Năm", 
      students: "280",
      achievements: "12 Giải thưởng",
     
      features: ["Nghiên cứu xã hội", "Thuyết trình", "Tranh luận", "Viết học thuật"],
      subjects: ["Văn học Việt Nam", "Lịch sử thế giới", "Địa lý kinh tế", "Giáo dục công dân", "Ngoại ngữ"]
    },
    {
      id: "international",
      title: "Chương trình Quốc tế",
      description: "Chương trình được công nhận toàn cầu phát triển những con người ham học hỏi, có kiến thức và quan tâm.",
      image: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NTU0MjgzODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "2 Năm",
      students: "150", 
      achievements: "8 Giải thưởng",
     
      features: ["Chứng chỉ quốc tế", "Học bổng du học", "Trao đổi văn hóa", "Thực tập quốc tế"],
      subjects: ["English Literature", "Mathematics HL", "Business Studies", "Global Perspectives", "Arts & Design"]
    }
  ];

  const facilities = [
    { name: "Phòng thí nghiệm", description: "Trang thiết bị hiện đại cho thí nghiệm khoa học" },
    { name: "Thư viện số", description: "Hơn 50,000 tài liệu và sách điện tử" },
    { name: "Phòng tin học", description: "100 máy tính với phần mềm chuyên nghiệp" },
    { name: "Phòng đa năng", description: "Không gian học tập linh hoạt và sáng tạo" },
    { name: "Studio nghệ thuật", description: "Phòng học dành cho các môn nghệ thuật" },
    { name: "Sân thể thao", description: "Khu vực thể dục thể thao đầy đủ tiện nghi" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/521678215_1323407669790906_1216453298793442665_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpY94uMnL2zkGRtwbiF1ig8xY7s6TAjwLzFjuzpMCPAkSiZUXvzSyityEQKpBYXz2iUeWp-hW1v4naTvKYF4nA&_nc_ohc=xl3XsZaSOhwQ7kNvwFvlcHG&_nc_oc=AdmzE4x30xAZm1_QkyhLR4j8VZF9DJmx1jf9a07XNu4CTZMhzCWh9tfPk-5-eJztG8Q&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=VNbPXchfn6rKUN1IgYhK6A&oh=00_AfWhoYa7SfT--10IeKEIZUQtXPYnnLKq8A8C-Y4B5_bSmQ&oe=68B5B658"
            alt="Chương trình học tập"
            className="w-full h-full object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br" />
        </div>
        
        <motion.div
          className="absolute inset-0 opacity-10 z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection className="text-center space-y-8">
            <motion.h1 
              className="lg:text-7xl font-bold text-4xl  lg:text-6xl text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Chương trình{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                học tập
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl font-bold text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Khám phá các chương trình học tập toàn diện được thiết kế để phát triển 
              toàn diện năng lực học sinh, chuẩn bị tốt nhất cho tương lai.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <motion.div 
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={program.image}
                          alt={program.title}
                          className="w-full h-96 object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-0 hover:opacity-60 transition-opacity duration-300`}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <motion.h2
  className="text-4xl lg:text-5xl font-bold lg:text-4xl text-primary mb-4"
  whileHover={{ scale: 1.05 }} // Phóng to nhẹ khi hover
  transition={{ duration: 0.3 }}
>


                        {program.title}
                      </motion.h2>
                      <p className="text-lg text-muted-foreground mb-6">{program.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Clock, label: "Thời gian", value: program.duration },
                        { icon: Users, label: "Học sinh", value: program.students },
                        { icon: Award, label: "Giải thưởng", value: program.achievements }
                      ].map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Card className="text-center p-4">
                            <CardContent className="p-0">
                              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                              <div className="text-sm font-medium">{stat.value}</div>
                              <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-medium mb-3">Điểm nổi bật:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h3 className="text-lg font-medium mb-3">Môn học chính:</h3>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, subjectIndex) => (
                          <motion.div
                            key={subjectIndex}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Badge variant="secondary">{subject}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="group">
                        <span className="flex items-center">
                          Tìm hiểu chi tiết
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-primary mb-4">
              Cơ sở vật chất
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trang thiết bị hiện đại và môi trường học tập lý tưởng
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Star className="h-6 w-6 text-primary shrink-0 mt-1" />
                        </motion.div>
                        <div>
                          <h3 className="font-medium mb-2">{facility.name}</h3>
                          <p className="text-sm text-muted-foreground">{facility.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}