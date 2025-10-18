# Website Cải cách Ruộng đất Việt Nam 1953-1956

## Mô tả
Website tĩnh trình bày về lịch sử cải cách ruộng đất ở Việt Nam giai đoạn 1953-1956, được xây dựng theo yêu cầu nghiên cứu lịch sử.

## Cấu trúc dự án
```
Website2.0/
├── index.html          # Trang chủ
├── styles.css          # CSS styling
├── script.js           # JavaScript logic
├── assets/             # Hình ảnh tài liệu
├── content/            # Tài liệu gốc
└── README.md           # Hướng dẫn này
```

## Tính năng chính

### 🎯 Nội dung
- **8 mục chính**: Bối cảnh, 1953, 1954-55, Sai lầm 1956, Sửa sai, Bài học, Hiện nay, Kết luận
- **Nội dung HTML sạch**: Được trích xuất và chuẩn hóa từ file DOCX gốc
- **Highlight số liệu**: Tự động highlight các số liệu quan trọng (%, ha, triệu, người, hộ, năm...)

### 🧭 Điều hướng
- **Header sticky**: Menu điều hướng 8 mục chính
- **Mục lục bên trái**: TOC với liên kết nhanh
- **Smooth scroll**: Cuộn mượt đến các section
- **Nav spy**: Highlight mục đang xem

### 🔍 Tìm kiếm
- **Tìm kiếm client-side**: Tìm kiếm nội dung trong trang
- **Highlight kết quả**: Đánh dấu từ khóa tìm kiếm
- **Scroll đến kết quả**: Tự động cuộn đến kết quả đầu tiên

### 📱 Responsive
- **Mobile-friendly**: Giao diện tối ưu cho mobile
- **TOC responsive**: Chuyển thành accordion trên mobile
- **Floating buttons**: Nút quay đầu trang và toggle highlight

### 🎨 Giao diện
- **Theme TekRevol**: Màu đỏ-vàng theo yêu cầu
- **Gradient background**: Nền gradient sáng hơn
- **Card design**: Section dạng card với shadow
- **Print support**: CSS tối ưu cho in ấn

## Cách sử dụng

### Chạy website
```bash
# Sử dụng serve (khuyến nghị)
npx serve .

# Hoặc sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js
npx http-server
```

### Truy cập
Mở trình duyệt và truy cập: `http://localhost:3000`

## Kiểm thử

### ✅ Đã kiểm tra
- [x] Có đúng 8 h2 (mục chính)
- [x] Tất cả ID mapping đúng
- [x] TOC có đủ 8 mục
- [x] Responsive trên mobile
- [x] Không có lỗi che phủ UI
- [x] Smooth scroll hoạt động
- [x] Tìm kiếm highlight đúng
- [x] Evidence highlighting hoạt động
- [x] Copy buttons xuất hiện

### 🔧 Tính năng kỹ thuật
- **Không sử dụng thư viện**: Website hoàn toàn tĩnh
- **Build-time content**: Nội dung được embed sẵn trong script.js
- **UTF-8 encoding**: Hỗ trợ đầy đủ tiếng Việt
- **Cross-browser**: Tương thích với các trình duyệt hiện đại

## Cấu trúc nội dung

### 8 mục chính
1. **Mở đầu & Bối cảnh** - Hoàn cảnh lịch sử sau 1954
2. **Chính sách 1953** - Luật và chính sách năm 1953
3. **Triển khai 1954–1955** - Quá trình thực hiện
4. **Sai lầm 1956** - Phân tích các sai lầm
5. **Sửa sai** - Các biện pháp khắc phục
6. **Bài học lịch sử** - Những bài học rút ra
7. **Hiện nay** - Liên hệ với chính sách hiện tại
8. **Kết luận** - Tổng kết ý nghĩa lịch sử

### Tiểu mục
- TW4, TW5
- Cương lĩnh 23 điều
- Luật CCRĐ 1953
- Sắc lệnh 197-SL
- Giảm tô–Giảm tức
- Hình thức thực hiện
- Nguyên tắc phân chia
- Kết quả/Thống kê
- Cơ quan chỉ đạo
- Tổ chức thực hiện
- Thành tựu

## Lưu ý kỹ thuật

### Không sử dụng
- ❌ Thư viện đọc DOCX (mammoth, jsdocx)
- ❌ Fetch API để đọc file
- ❌ Server-side processing
- ❌ Build tools phức tạp

### Đã sử dụng
- ✅ HTML5 semantic
- ✅ CSS3 modern features
- ✅ Vanilla JavaScript
- ✅ Responsive design
- ✅ Accessibility features

## Ngày build
Dự án được build vào: ${new Date().toLocaleDateString('vi-VN')}

---
*Website được xây dựng theo yêu cầu nghiên cứu lịch sử Cải cách Ruộng đất Việt Nam 1953-1956*
