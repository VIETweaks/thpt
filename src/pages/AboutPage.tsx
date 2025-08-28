import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, BookOpen, Trophy, Globe, Award, Target, Heart, FlaskConical, Library, Activity, Monitor } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/animations/StaggerContainer";

export function AboutPage() {
  const stats = [
    { number: "1,400+", label: "Học sinh", icon: Users },
    { number: "95%", label: "Tỷ lệ đỗ đại học", icon: Trophy },
    { number: "50+", label: "Chương trình học", icon: BookOpen },
    { number: "60+", label: "Giáo viên", icon: Users },
    { number: "48", label: "Năm kinh nghiệm", icon: Award },
    { number: "--", label: "Giải thưởng quốc gia", icon: Trophy }
  ];

  const values = [
    {
      icon: Target,
      title: "Tầm nhìn",
      description: "Trở thành trường trung học phổ thông hàng đầu Việt Nam, được công nhận quốc tế về chất lượng giáo dục toàn diện.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverBg: "rgb(37, 99, 235)"
    },
    {
      icon: Heart,
      title: "Sứ mệnh", 
      description: "Nuôi dưỡng những công dân toàn cầu có trách nhiệm, sáng tạo và có năng lực cạnh tranh trong thế kỷ 21.",
      color: "text-red-600",
      bgColor: "bg-red-100",
      hoverBg: "rgb(220, 38, 38)"
    },
    {
      icon: Globe,
      title: "Giá trị cốt lõi",
      description: "Tôn trọng, Trách nhiệm, Sáng tạo, Xuất sắc - bốn trụ cột định hướng mọi hoạt động giáo dục của chúng tôi.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      hoverBg: "rgb(22, 163, 74)"
    }
  ];

  const history = [
    { year: "1977", event: "Thành lập trường với 200 học sinh đầu tiên", image: "https://images.unsplash.com/photo-1574438041772-09c77dc8c1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBoaXN0b3J5JTIwdGltZWxpbmUlMjBldmVudHN8ZW58MXx8fHwxNzU2MzQ5MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { year: "2000", event: "Được công nhận đạt chuẩn quốc gia", image: "https://images.unsplash.com/photo-1585495299625-a70394b57b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjI4OTM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { year: "2005", event: "Khánh thành cơ sở mới với trang thiết bị hiện đại", image: "https://images.unsplash.com/photo-1630959302862-82cec6653d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVEVNJTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYzNDkyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { year: "2010", event: "Đạt giải Nhất cuộc thi Khoa học Kỹ thuật toàn quốc", image: "https://images.unsplash.com/photo-1581929430054-760e30fe5c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwbXVzaWMlMjBjbGFzcyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1NjM0OTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { year: "2015", event: "Ra mắt chương trình giáo dục quốc tế", image: "https://images.unsplash.com/photo-1629019324504-2e1fdf96e5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwcHJvZ3JhbSUyMHN0dWRlbnRzJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc1NjM0OTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { year: "2020", event: "Ứng dụng công nghệ số trong giảng dạy", image: "https://images.unsplash.com/photo-1574438041772-09c77dc8c1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBoaXN0b3J5JTIwdGltZWxpbmUlMjBldmVudHN8ZW58MXx8fHwxNzU2MzQ5MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { year: "2024", event: "Đạt chuẩn kiểm định chất lượng giáo dục quốc tế", image: "https://images.unsplash.com/photo-1585495299625-a70394b57b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjI4OTM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
  ];

  const facilities = [
    {
      icon: FlaskConical,
      title: "Phòng thí nghiệm khoa học",
      description: "Trang thiết bị hiện đại cho các môn Hóa học, Vật lý và Sinh học",
      image: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBsYWJvcmF0b3J5JTIwY2hlbWlzdHJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU2MzQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Library,
      title: "Thư viện hiện đại",
      description: "Không gian học tập yên tĩnh với hơn 50,000 đầu sách và tài liệu",
      image: "https://images.unsplash.com/photo-1589872880544-76e896b0592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZHklMjBzcGFjZSUyMHN0dWRlbnRzfGVufDF8fHx8MTc1NjM0OTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Activity,
      title: "Nhà thể chất đa năng",
      description: "Cơ sở vật chất thể thao đầy đủ cho mọi hoạt động thể dục thể thao",
      image: "https://images.unsplash.com/photo-1647686897464-556f132efe4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBneW1uYXNpdW0lMjBzcG9ydHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU2MzQ5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Monitor,
      title: "Phòng máy tính hiện đại",
      description: "Hệ thống máy tính tiên tiến hỗ trợ học tập và nghiên cứu",
      image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc1NjM0OTg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const leaders = [
    { 
      name: "Thầy Pháp", 
      position: "Hiệu trưởng", 
      experience: "20 năm kinh nghiệm",
      image: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/536282635_1343338554464484_213278174255735243_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-1iC2kNqYTlomkdyZgWACI6ePIIWMUWgjp48ghYxRaA8ITLZHB4yP2HFt6mKUNrqUoNrJf_n27Y5AlZAtES4K&_nc_ohc=An82g0CPBH4Q7kNvwGTeXE7&_nc_oc=AdkAyKKDmwR7kDdrqDuG8yEDrRysVXu6NRg6XjSA0XufzGP4pQPfegwpd9hpd6fCcmI&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=bXoWiZqPlw7eizR12LQYhg&oh=00_AfVQF84JXUA5OMQI4608e33tHzJZ_9o-WkQgEdw1jcB-7w&oe=68B5AA65"
    },
    { 
      name: "Cô --", 
      position: "Phó Hiệu trưởng", 
      experience: "15 năm kinh nghiệm",
      image: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/536282635_1343338554464484_213278174255735243_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-1iC2kNqYTlomkdyZgWACI6ePIIWMUWgjp48ghYxRaA8ITLZHB4yP2HFt6mKUNrqUoNrJf_n27Y5AlZAtES4K&_nc_ohc=An82g0CPBH4Q7kNvwGTeXE7&_nc_oc=AdkAyKKDmwR7kDdrqDuG8yEDrRysVXu6NRg6XjSA0XufzGP4pQPfegwpd9hpd6fCcmI&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=bXoWiZqPlw7eizR12LQYhg&oh=00_AfVQF84JXUA5OMQI4608e33tHzJZ_9o-WkQgEdw1jcB-7w&oe=68B5AA65"
    },
    { 
      name: "Cô --", 
      position: "Phó Hiệu trưởng", 
      experience: "18 năm kinh nghiệm",
      image: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/536282635_1343338554464484_213278174255735243_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-1iC2kNqYTlomkdyZgWACI6ePIIWMUWgjp48ghYxRaA8ITLZHB4yP2HFt6mKUNrqUoNrJf_n27Y5AlZAtES4K&_nc_ohc=An82g0CPBH4Q7kNvwGTeXE7&_nc_oc=AdkAyKKDmwR7kDdrqDuG8yEDrRysVXu6NRg6XjSA0XufzGP4pQPfegwpd9hpd6fCcmI&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=bXoWiZqPlw7eizR12LQYhg&oh=00_AfVQF84JXUA5OMQI4608e33tHzJZ_9o-WkQgEdw1jcB-7w&oe=68B5AA65"
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
          className="absolute inset-0 opacity-10 z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center space-y-8">
            <AnimatedSection>
              <motion.h1 
                className="text-4xl lg:text-6xl text-primary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Về{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Trường THPT Đức Linh
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hành trình 48 năm xây dựng và phát triển một ngôi trường mang tầm vóc quốc gia, 
                nơi ươm mầm những thế hệ học sinh xuất sắc của Việt Nam.
              </motion.p>
            </AnimatedSection>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0 space-y-2">
                        <stat.icon className="h-8 w-8 text-primary mx-auto" />
                        <motion.div 
                          className="text-2xl text-primary"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-primary mb-4">
              Tầm nhìn & Sứ mệnh
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những giá trị cốt lõi định hướng mọi hoạt động giáo dục của chúng tôi
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center space-y-4">
                      <motion.div
                        className={`p-4 rounded-full ${value.bgColor} mx-auto w-fit`}
                        whileHover={{ 
                          rotate: 5, 
                          scale: 1.1
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <value.icon className={`h-12 w-12 ${value.color}`} />
                      </motion.div>
                      <h3 className="text-xl text-primary">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-primary mb-4">
              Lịch sử phát triển
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những cột mốc quan trọng trong hành trình 48 năm xây dựng và phát triển
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            <StaggerContainer className="space-y-12">
              {history.map((item, index) => (
                <StaggerItem key={index}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                          <div className="aspect-video relative overflow-hidden">
                            <ImageWithFallback
                              src={item.image}
                              alt={`${item.year} - ${item.event}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                          <CardContent className="p-6">
                            <Badge className="mb-3">{item.year}</Badge>
                            <p className="text-muted-foreground">{item.event}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.5 }}
                    />
                    
                    <div className="w-1/2" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-primary mb-4">
              Cơ sở vật chất
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hệ thống cơ sở vật chất hiện đại tạo môi trường học tập tốt nhất cho học sinh
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="aspect-square relative overflow-hidden">
                      <ImageWithFallback
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <CardContent className="p-6 text-center space-y-4">
                      <motion.div
                        className={`p-3 rounded-full ${facility.bgColor} mx-auto w-fit`}
                        whileHover={{ 
                          rotate: 5, 
                          scale: 1.1
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <facility.icon className={`h-8 w-8 ${facility.color}`} />
                      </motion.div>
                      <h3 className="text-lg text-primary">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-primary mb-4">
              Ban lãnh đạo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Đội ngũ lãnh đạo giàu kinh nghiệm với tầm nhìn và sứ mệnh rõ ràng
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-square relative overflow-hidden">
                      <ImageWithFallback
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-medium text-primary mb-1">{leader.name}</h3>
                      <p className="text-muted-foreground mb-2">{leader.position}</p>
                      <Badge variant="secondary">{leader.experience}</Badge>
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