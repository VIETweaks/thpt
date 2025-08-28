import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Clock, Eye, ArrowRight, User, MessageCircle, Share2, Heart } from "lucide-react";
import { ParticleEffect, SparkleEffect } from "../components/animations/ParticleEffect";
import { AnimatedSection } from "../components/animations/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../components/animations/StaggerContainer";

const newsData = [
  {
    id: 1,
    title: "Lễ khai giảng năm học 2024-2025 đầy cảm xúc",
    summary: "Buổi lễ khai giảng năm học mới diễn ra trong không khí trang trọng với sự tham gia của hơn 1,200 học sinh, phụ huynh và toàn thể giáo viên.",
    content: "Sáng ngày 5/9/2024, trường THPT Việt Nam đã tổ chức lễ khai giảng năm học mới với chủ đề 'Khát vọng vươn xa - Ước mơ thành hiện thực'. Buổi lễ có sự tham gia của đại diện lãnh đạo Sở Giáo dục và Đào tạo...",
    image: "https://images.unsplash.com/photo-1663247454628-512fd688043f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBvcGVuaW5nJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYyNjIwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sự kiện",
    date: "2024-09-05",
    author: "Ban Biên tập",
    readTime: "3 phút",
    views: 1250,
    likes: 89,
    comments: 24,
    featured: true
  },
  {
    id: 2,
    title: "Học sinh trường đạt giải Nhất cuộc thi Khoa học Kỹ thuật toàn quốc",
    summary: "Đội tuyển học sinh của trường đã xuất sắc giành giải Nhất trong cuộc thi Khoa học Kỹ thuật dành cho học sinh THPT với dự án về môi trường.",
    content: "Với dự án 'Hệ thống giám sát chất lượng không khí thông minh', đội tuyển gồm 3 học sinh lớp 12A1 đã vượt qua 156 đội thi khác để giành giải Nhất cuộc thi Khoa học Kỹ thuật cấp quốc gia.",
    image: "https://images.unsplash.com/photo-1663247454628-512fd688043f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwY29tcGV0aXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYyNjIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Thành tích",
    date: "2024-08-28",
    author: "Phòng Học thuật",
    readTime: "5 phút",
    views: 890,
    likes: 156,
    comments: 32,
    featured: false
  },
  {
    id: 3,
    title: "Lễ tốt nghiệp khóa 2021-2024: Chào tương lai với hy vọng",
    summary: "325 học sinh khóa 2021-2024 đã chính thức tốt nghiệp và bước vào giai đoạn mới của cuộc đời với những ký ức đẹp về mái trường.",
    content: "Buổi lễ tốt nghiệp diễn ra trong không khí xúc động khi 325 học sinh khóa 2021-2024 nhận bằng tốt nghiệp. Với tỷ lệ đỗ đại học 95%, đây là khóa học sinh có thành tích xuất sắc nhất của trường.",
    image: "https://images.unsplash.com/photo-1660795307991-8a7ebbef311c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTYyNjIwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sự kiện",
    date: "2024-06-15",
    author: "Ban Giám hiệu",
    readTime: "4 phút",
    views: 2100,
    likes: 234,
    comments: 67,
    featured: false
  },
  {
    id: 4,
    title: "Giải bóng đá học sinh THPT: Chiến thắng ấn tượng",
    summary: "Đội bóng đá nam của trường đã giành chức vô địch giải bóng đá học sinh THPT cấp thành phố sau trận chung kết đầy kịch tính.",
    content: "Trong trận chung kết diễn ra tại sân vận động thành phố, đội bóng đá nam của trường đã thắng 2-1 sau hiệp phụ để giành chức vô địch. Đây là lần thứ 3 trong 5 năm gần đây đội bóng của trường đạt được thành tích này.",
    image: "https://images.unsplash.com/photo-1548077880-656c402b344e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmb290YmFsbCUyMHRlYW18ZW58MXx8fHwxNzU2MjYyMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Thể thao",
    date: "2024-07-20",
    author: "CLB Thể thao",
    readTime: "3 phút",
    views: 756,
    likes: 98,
    comments: 18,
    featured: false
  },
  {
    id: 5,
    title: "Triển lãm nghệ thuật học sinh: Sắc màu tuổi trẻ",
    summary: "Triển lãm nghệ thuật thường niên của trường với hơn 200 tác phẩm từ các học sinh khối 10, 11, 12 thu hút đông đảo người tham quan.",
    content: "Triển lãm năm nay có chủ đề 'Sắc màu tuổi trẻ' với sự tham gia của hơn 150 học sinh. Các tác phẩm được trưng bày bao gồm tranh vẽ, điêu khắc, nhiếp ảnh và các tác phẩm nghệ thuật số.",
    image: "https://images.unsplash.com/photo-1570638935065-a4836c72d442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnQlMjBleGhpYml0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU2MjYyMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Văn hóa",
    date: "2024-05-10",
    author: "CLB Nghệ thuật",
    readTime: "4 phút",
    views: 543,
    likes: 112,
    comments: 28,
    featured: false
  },
  {
    id: 6,
    title: "Thư viện số hiện đại: Không gian học tập mới",
    summary: "Thư viện trường vừa được nâng cấp với hệ thống số hóa hiện đại, mang đến trải nghiệm học tập hoàn toàn mới cho học sinh.",
    content: "Với đầu tư hơn 2 tỷ đồng, thư viện số mới có hơn 50,000 đầu sách điện tử, 20 phòng học nhóm và khu vực nghiên cứu riêng. Học sinh có thể truy cập tài liệu 24/7 thông qua ứng dụng di động.",
    image: "https://images.unsplash.com/photo-1634951401794-6c84f593db82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZHklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYyNjIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Cơ sở vật chất",
    date: "2024-04-15",
    author: "Phòng Thiết bị",
    readTime: "3 phút",
    views: 1890,
    likes: 201,
    comments: 45,
    featured: false
  }
];

export function NewsPage() {
  const featuredNews = newsData.find(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Thành tích': return 'bg-emerald-500 text-white';
      case 'Sự kiện': return 'bg-blue-500 text-white';
      case 'Thể thao': return 'bg-orange-500 text-white';
      case 'Văn hóa': return 'bg-purple-500 text-white';
      case 'Cơ sở vật chất': return 'bg-indigo-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <ParticleEffect 
        count={40}
        colors={["rgba(59,130,246,0.3)", "rgba(147,197,253,0.2)", "rgba(219,234,254,0.15)"]}
        size={[1, 4]}
        speed={[6, 12]}
        opacity={[0.1, 0.5]}
      />
      <SparkleEffect count={20} />

      <div className="relative z-10">
        {/* Header Section */}
        <AnimatedSection className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tin tức & Sự kiện
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cập nhật những tin tức mới nhất về hoạt động học tập, thành tích và các sự kiện 
                đặc sắc của trường.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Featured News */}
        {featuredNews && (
          <AnimatedSection className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
                  <div className="lg:grid lg:grid-cols-5 lg:gap-0">
                    <div className="lg:col-span-3 relative h-80 lg:h-auto overflow-hidden">
                      <ImageWithFallback
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-red-500 text-white font-bold px-4 py-2 text-sm shadow-lg">
                          TIN NỔI BẬT
                        </Badge>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-6 right-6">
                        <Badge className={`${getCategoryColor(featuredNews.category)} px-3 py-1`}>
                          {featuredNews.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredNews.date).toLocaleDateString('vi-VN')}
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {featuredNews.author}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl lg:text-4xl text-gray-900 leading-tight">
                          {featuredNews.title}
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {featuredNews.summary}
                        </p>
                        
                        {/* Stats Row */}
                        <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredNews.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {featuredNews.views.toLocaleString()} lượt xem
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {featuredNews.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {featuredNews.comments}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                              Đọc tiếp
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" className="px-6 py-3">
                              <Share2 className="h-4 w-4 mr-2" />
                              Chia sẻ
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          </AnimatedSection>
        )}

        {/* Regular News Grid */}
        <AnimatedSection className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl text-gray-800 text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tin tức khác
            </motion.h2>
            
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularNews.map((news, index) => (
                <StaggerItem key={news.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm group">
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className={`${getCategoryColor(news.category)} text-xs`}>
                            {news.category}
                          </Badge>
                        </div>

                        {/* Stats overlay */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {news.likes}
                          </div>
                          <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {news.comments}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="space-y-4 flex-grow">
                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(news.date).toLocaleDateString('vi-VN')}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {news.readTime}
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-lg text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {news.title}
                          </h3>
                          
                          {/* Summary */}
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {news.summary}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <User className="h-3 w-3" />
                            {news.author}
                          </div>
                          
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Eye className="h-3 w-3" />
                            {news.views}
                          </div>
                        </div>

                        {/* Read More Button */}
                        <motion.div 
                          className="mt-4"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            variant="ghost" 
                            className="w-full group/btn text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                          >
                            Đọc tiếp
                            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

       
      </div>
    </div>
  );
}