# 🌐 WEBSITE TRUNG TÂM TRA CỨU LỆNH & ĐIỀU KIỆN DISCORD BOT

Website tài liệu và tra cứu hoàn chỉnh, hiện đại dành cho con bot Discord chạy 24/7. Được xây dựng với giao diện Dark Mode cao cấp (Glassmorphism), hiệu ứng chuyển động mượt mà, hỗ trợ tìm kiếm tức thời và trình tạo cú pháp lệnh tương tác.

---

## 🚀 CÁCH MỞ WEBSITE

### Cách 1: Nhấp đúp vào file `mo_website.bat`
- Nhấp đúp chuột vào file **`mo_website.bat`** trong thư mục `web/`.
- Website sẽ tự động mở trên trình duyệt mặc định của bạn tại địa chỉ: **`http://localhost:8088`** (hoặc mở trực tiếp file `index.html`).

### Cách 2: Chạy Web Server thủ công
Mở PowerShell hoặc Command Prompt tại thư mục `web/` và gõ:
```bash
python -m http.server 8088
```
Sau đó truy cập trình duyệt tại: `http://localhost:8088`

### Cách 3: Mở trực tiếp file `index.html`
- Nhấp đúp trực tiếp vào file **`index.html`** bằng Google Chrome, Microsoft Edge, Brave hoặc Cốc Cốc.

---

## 🌟 CÁC TÍNH NĂNG NỔI BẬT CỦA WEBSITE

1. **Tra Cứu Toàn Bộ 48+ Lệnh**:
   - Bao quát toàn bộ 6 nhóm tính năng từ bot:
     - 🛠️ **Tiện Ích & Thông Tin** (`ping`, `help`, `serverinfo`, `profile`, `avatar`, `say`, `setwelcome`, `setsaylog`, `setdmslog`, `setlog`)
     - 🛡️ **Quản Trị Máy Chủ** (`clear`, `kick`, `ban`, `unban`, `mute / timeout`)
     - 🚨 **Kiểm Duyệt AutoMod 24/7** (`automod`, `antilink`, `linkchannel`, `linkbypass`, `setruleaction`, `setautomodaction`, `setlogchannel`, `invitebypass`)
     - 💰 **Kinh Tế & Minigame** (`daily`, `coin / bal`, `blackjack`, `cf / coinflip`, `gb / gamble`, `mine / gobom`, `givecoin`, `top / bxh`, `setlevelchannel`, `levelnotify`)
     - 🎵 **Âm Nhạc Voice Channel** (`play`, `volume`, `loop`, `shuffle`, `pause`, `resume`, `skip`, `queue`, `nowplaying`, `stop`)
     - 👑 **Đặc Quyền Chủ Bot (Owner)** (`backup`, `addcoin`, `removecoin`, `setlevel`, `reload`, `sync`, `dms`, `ownerhelp`)

2. **Hệ Thống Lọc & Tìm Kiếm Đa Chiều**:
   - **Tìm kiếm theo thời gian thực (Real-time Search)**: Tìm theo tên lệnh, bí danh (alias), quyền hạn hoặc mô tả.
   - **Phím tắt nhanh**: Nhấn `/` hoặc `Ctrl + K` để nhảy ngay vào thanh tìm kiếm.
   - **Bộ lọc danh mục**: Tab chuyển đổi nhanh giữa 6 danh mục kèm số lượng lệnh thực tế.
   - **Bộ lọc quyền hạn**: Lọc theo Mọi người, Moderator, Manage Server, Administrator, Chủ Bot.
   - **Bộ lọc loại lệnh**: Hybrid (`/` và `.`), Slash Command (`/`), Prefix (`.`).

3. **Cửa Sổ Chi Tiết & Ràng Buộc (Command Detail Modal)**:
   - **Checklist Điều Kiện**: Hiển thị rõ quyền hạn người gọi, quyền hạn bot, giới hạn số phút, hạn mức số tiền, cấp bậc vai trò (Role Hierarchy).
   - **Bảng Tham Số**: Tên, kiểu dữ liệu, bắt buộc hay tùy chọn, giá trị mặc định và giải thích chi tiết.
   - **Trình Tạo Cú Pháp Tương Tác (Interactive Syntax Builder)**: Nhập thử giá trị tham số trực tiếp trên web, hệ thống tự động xuất câu lệnh Discord hoàn chỉnh để sao chép chỉ bằng 1 cú click!
   - **Mô Phỏng Phản Hồi Discord Embed**: Khung preview chân thực như đang chat trong Discord.

4. **Chuyên Mục Kiến Thức & Hướng Dẫn**:
   - **AutoMod Matrix**: Phân tích 4 quy tắc cốt lõi (Anti-Invite, Anti-Links, Anti-Flood, Bộ lọc từ thô tục) và quy trình Double Log (Server Log + DM Owner).
   - **Kinh Tế & Sòng Bạc**: Luật chơi Blackjack 4 cỗ bài, Minigame Gỡ Bom 4x5 ô, cơ chế nhân thưởng, công thức Leveling EXP, các đơn vị cược viết tắt (`1k`, `500k`, `1m`, `all`).
   - **Âm Nhạc Voice Channel**: Stream 192k FFmpeg, 3 chế độ lặp, tự ngắt idle sau 3 phút.
   - **Hướng Dẫn Vận Hành 24/7**: Cài đặt Task Scheduler ngầm với `install_service.ps1` và watchdog `run_bot.bat`.

---

## 📁 CẤU TRÚC THƯ MỤC `web/`

```
setup/web/
├── index.html        # Giao diện chính HTML5 chuẩn ngữ nghĩa & responsive
├── style.css         # Hệ thống thiết kế CSS tùy chỉnh (Dark theme, Glassmorphism, Animations)
├── commands-data.js  # Cơ sở dữ liệu 48+ lệnh, điều kiện, tham số, ví dụ và embed preview
├── app.js            # Xử lý logic tìm kiếm, bộ lọc, modal, syntax generator và âm thanh Web Audio
├── mo_website.bat    # Script mở nhanh website trên trình duyệt với 1 click
└── README.md         # Tài liệu hướng dẫn sử dụng website
```
