import { Router, Routes, Route, useRouter } from "./utils/router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { NewsPage } from "./pages/NewsPage";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

// Contact page component
function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <motion.h1 
              className="text-4xl lg:text-6xl text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Liên hệ{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                với chúng tôi
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi 
              để biết thêm thông tin về trường học và các chương trình giáo dục.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-primary mb-6">Thông tin liên hệ</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "MapPin",
                    title: "Địa chỉ",
                    details: ["123 Đường Giáo dục", "Quận Đống Đa, Hà Nội"],
                    color: "bg-blue-100 text-blue-600"
                  },
                  {
                    icon: "Phone", 
                    title: "Điện thoại",
                    details: ["(024) 3821 1234", "(024) 3821 5678"],
                    color: "bg-green-100 text-green-600"
                  },
                  {
                    icon: "Mail",
                    title: "Email", 
                    details: ["info@thanglong.edu.vn", "tuyensinh@thanglong.edu.vn"],
                    color: "bg-purple-100 text-purple-600"
                  },
                  {
                    icon: "Clock",
                    title: "Giờ làm việc",
                    details: ["Thứ 2 - Thứ 6: 7:00 - 17:00", "Thứ 7: 8:00 - 12:00"],
                    color: "bg-orange-100 text-orange-600"
                  }
                ].map((info, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg shrink-0 ${info.color}`}>
                          {info.icon === "MapPin" && <MapPin className="h-5 w-5" />}
                          {info.icon === "Phone" && <Phone className="h-5 w-5" />}
                          {info.icon === "Mail" && <Mail className="h-5 w-5" />}
                          {info.icon === "Clock" && <Clock className="h-5 w-5" />}
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-8 w-8 text-primary mx-auto" />
                    <p className="text-muted-foreground">Bản đồ tương tác</p>
                    <p className="text-sm text-muted-foreground">Tìm chúng tôi trên bản đồ</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl text-primary mb-6">Gửi tin nhắn cho chúng tôi</h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName">Họ</label>
                      <Input id="firstName" placeholder="Nguyễn" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName">Tên</label>
                      <Input id="lastName" placeholder="Văn An" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="nguyen.van.an@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone">Số điện thoại</label>
                    <Input id="phone" type="tel" placeholder="0123 456 789" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="inquiry">Loại yêu cầu</label>
                    <select id="inquiry" className="w-full px-3 py-2 border border-border rounded-md bg-background">
                      <option value="">Chọn một tùy chọn</option>
                      <option value="admissions">Tuyển sinh</option>
                      <option value="programs">Chương trình học</option>
                      <option value="financial">Học phí</option>
                      <option value="general">Thông tin chung</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message">Tin nhắn</label>
                    <Textarea 
                      id="message" 
                      placeholder="Vui lòng chia sẻ câu hỏi hoặc ý kiến của bạn..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component to handle default routing to home page
function DefaultRoute() {
  const { currentPath, navigate } = useRouter();
  
  useEffect(() => {
    // List of valid paths
    const validPaths = ['/', '/about', '/programs', '/admissions', '/news', '/contact'];
    
    // If current path is not in valid paths, redirect to home
    if (!validPaths.includes(currentPath)) {
      navigate('/');
    }
  }, [currentPath, navigate]);
  
  // If path is not valid, show home page
  const validPaths = ['/', '/about', '/programs', '/admissions', '/news', '/contact'];
  if (!validPaths.includes(currentPath)) {
    return <Home />;
  }
  
  return null;
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/about" component={<AboutPage />} />
          <Route path="/programs" component={<ProgramsPage />} />
          <Route path="/admissions" component={<AdmissionsPage />} />
          <Route path="/news" component={<NewsPage />} />
          <Route path="/contact" component={<ContactPage />} />
        </Routes>
        {/* Default route component to handle invalid paths */}
        <DefaultRoute />
      </Layout>
    </Router>
  );
}