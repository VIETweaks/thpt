import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, FileText, UserCheck, GraduationCap, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/animations/StaggerContainer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AdmissionsPage() {
  const admissionSteps = [
    {
      step: 1,
      title: "Đăng ký trực tiếp",
      description: "Điền đầy đủ thông tin trong form đăng ký trực tiếp",
      icon: FileText,
      timeline: "Tháng 3-4",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      step: 2, 
      title: "Nộp hồ sơ",
      description: "Chuẩn bị và nộp các giấy tờ cần thiết theo quy định",
      icon: UserCheck,
      timeline: "Tháng 4-5",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      step: 3,
      title: "Kiểm tra năng lực",
      description: "Tham gia bài kiểm tra năng lực và phỏng vấn",
      icon: GraduationCap,
      timeline: "Tháng 5-6",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      step: 4,
      title: "Công bố kết quả",
      description: "Nhận thông báo kết quả và làm thủ tục nhập học",
      icon: CheckCircle,
      timeline: "Tháng 6-7",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const requirements = [
    {
      title: "Điểm số",
      items: [
        "Điểm trung bình tất cả các môn học lớp 9: từ 7.0 trở lên",
        "Không có môn nào dưới 6.0",
        "Ưu tiên học sinh có điểm Toán, Văn, Anh từ 8.0 trở lên"
      ]
    },
    {
      title: "Hồ sơ",
      items: [
        "Đơn đăng ký nhập học (theo mẫu của trường)",
        "Bản sao có chứng thực bằng tốt nghiệp THCS",
        "Bản sao có chứng thực học bạ THCS",
        "2 ảnh 3x4 chụp trong vòng 6 tháng"
      ]
    },
    {
      title: "Kiểm tra",
      items: [
        "Bài kiểm tra năng lực Toán, Văn, Anh (90 phút/môn)",
        "Phỏng vấn định hướng nghề nghiệp (15 phút)",
        "Kiểm tra sức khỏe tổng quát",
        "Chứng nhận hạnh kiểm tốt"
      ]
    }
  ];

  const programs = [
    {
      name: "Chương trình chuẩn",
      fee: "0 VNĐ/tháng",
      description: "Chương trình giáo dục chuẩn theo quy định Bộ GD&ĐT",
      features: ["Lớp học 35 học sinh", "Giáo viên có kinh nghiệm", "Sách giáo khoa chuẩn"]
    },
    {
      name: "Chương trình nâng cao (Dành cho học sinh học chuyên)",
      fee: "0 VNĐ VNĐ/tháng", 
      description: "Chương trình tăng cường các môn chuyên, lớp học nhỏ",
      features: ["Lớp học 25 học sinh", "Giáo viên chuyên môn cao", "Tài liệu bổ sung"]
    },
    {
      name: "Chương trình quốc tế (Dành cho học sinh học chuyên) ",
      fee: "0 VNĐ/tháng",
      description: "Chương trình song ngữ, chuẩn bị du học",
      features: ["Lớp học 20 học sinh", "Giáo viên bản ngữ", "Chứng chỉ quốc tế"]
    }
  ];

  const scholarships = [
    {
      name: "Học bổng Xuất sắc",
      amount: "100%",
      criteria: "Học sinh đạt điểm tuyển sinh cao nhất"
    },
    {
      name: "Học bổng Khuyến khích",
      amount: "50%",
      criteria: "Học sinh có hoàn cảnh khó khăn, học tập tốt"
    },
    {
      name: "Học bổng Tài năng",
      amount: "75%",
      criteria: "Học sinh có tài năng đặc biệt về thể thao, nghệ thuật"
    }
  ];

  return (
     <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
        {/* School Building Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/523347033_1323407596457580_2656640466952750589_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0IIUCxuT54UuvdRe4gLMNk6l2I7kFBN-TqXYjuQUE3xt-QxTrRvRkF_j2VugZasxb3jjpKNhQO3MdgbQ6TQkn&_nc_ohc=hL7s0m5FJi8Q7kNvwGhiwgX&_nc_oc=AdkQ75M9egD_6Wa3TeviasB6hs4iuCuNkmFibZpjtNLeDFHJcpoHW5J076F6q2LnCaM&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=vgkobHNdLFOcrJCRj0_mhQ&oh=00_AfVlCYyTKUxnth3IqQtQ2ZQivocRCFEe9zJmLJOiGLp8Lg&oe=68B5C178"
            alt="Trường THPT Đức Linh"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-br " />
        </div>
               
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center space-y-8">
            <motion.h1 
              className="text-5xl font-bold lg:text-6xl text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tuyển sinh{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                2024-2025
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cơ hội để con em bạn trở thành một phần của ngôi trường danh tiếng, 
              nơi ươm mầm những tài năng tương lai của đất nước.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg">Đăng ký ngay</Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline">Tải tài liệu</Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold lg:text-4xl text-primary mb-4">
              Quy trình tuyển sinh
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 bước đơn giản để trở thành học sinh của Trường THPT Đức Linh
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="relative h-full hover:shadow-xl transition-shadow overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    />
                    <CardContent className="p-6 text-center space-y-4">
                      <motion.div
                        className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      </motion.div>
                      
                      <motion.div
                        className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-sm font-medium"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                      >
                        {step.step}
                      </motion.div>
                      
                      <h3 className="text-lg font-medium text-primary">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      <Badge variant="secondary">{step.timeline}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold lg:text-4xl text-primary mb-4">
              Yêu cầu tuyển sinh
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Các điều kiện và yêu cầu cần thiết để đăng ký vào trường
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid lg:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-primary mb-4">{requirement.title}</h3>
                      <ul className="space-y-3">
                        {requirement.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tuition & Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold lg:text-4xl text-primary mb-4">
              Học phí & Chương trình
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Các chương trình học với mức học phí phù hợp
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className={`relative h-full hover:shadow-xl transition-shadow ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                    {index === 1 && (
                      <motion.div
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                      >
                        <Badge className="bg-primary text-primary-foreground">Phổ biến nhất</Badge>
                      </motion.div>
                    )}
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-medium text-primary">{program.name}</h3>
                      <motion.div 
                        className="text-2xl font-bold text-primary"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {program.fee}
                      </motion.div>
                      <p className="text-muted-foreground">{program.description}</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <motion.li
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
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                          Đăng ký ngay
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold lg:text-4xl text-primary mb-4">
              Học bổng
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cơ hội nhận học bổng cho học sinh xuất sắc và hoàn cảnh khó khăn
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <motion.div
                        className="text-3xl font-bold text-primary"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {scholarship.amount}
                      </motion.div>
                      <h3 className="text-lg font-medium">{scholarship.name}</h3>
                      <p className="text-sm text-muted-foreground">{scholarship.criteria}</p>
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