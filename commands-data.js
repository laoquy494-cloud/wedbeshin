/**
 * Dữ liệu toàn bộ lệnh và điều kiện của Discord Bot Python
 * Tự động trích xuất và đồng bộ từ thư mục cogs:
 * general.py, moderation.py, automod.py, economy.py, music.py, owner.py
 */

const BOT_CONFIG = {
  name: "Shin Bot",
  prefix: ".",
  owner_id: "1544362205166837801",
  version: "2.5.0",
  python_version: "Python 3.11 / discord.py 2.x",
  uptime_mode: "24/7 Auto-Restart Watchdog & Windows Task Scheduler",
  total_commands: 91,
  categories: [
    { id: "all", name: "Tất Cả Lệnh", icon: "✨", count: 91, color: "#5865F2" },
    { id: "general", name: "Tiện Ích & Thông Tin", icon: "🛠️", count: 13, color: "#3BA55C" },
    { id: "moderation", name: "Quản Trị Máy Chủ", icon: "🛡️", count: 6, color: "#FAA61A" },
    { id: "automod", name: "Kiểm Duyệt AutoMod", icon: "🚨", count: 10, color: "#ED4245" },
    { id: "economy", name: "Kinh Tế & Minigame", icon: "💰", count: 12, color: "#F1C40F" },
    { id: "music", name: "Âm Nhạc Voice", icon: "🎵", count: 24, color: "#1DB954" },
    { id: "giveaway", name: "Giveaway & Phát Quà", icon: "🎉", count: 5, color: "#EB459E" },
    { id: "ticket", name: "Hệ Thống Ticket", icon: "🎫", count: 13, color: "#3B82F6" },
    { id: "owner", name: "Đặc Quyền Chủ Bot", icon: "👑", count: 8, color: "#9B59B6" }
  ]
};

const COMMANDS_DATA = [
  // =========================================================================
  // 1. TIỆN ÍCH & THÔNG TIN (GENERAL)
  // =========================================================================
  {
    id: "ping",
    name: "ping",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "🏓",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["tre", "trễ", "rễ", "re", "dotre", "latency"],
    badge: "Phổ Biến",
    description: "Kiểm tra độ trễ mạng WebSocket & API với 3 mức độ đánh giá: Tốt, Bình thường, Xấu.",
    detailed_desc: "Đo độ trễ hai chiều giữa bot và Discord API Gateway, tự động phân loại thành 3 mức độ (🟢 Tốt: < 100ms, 🟡 Bình thường: 100ms - 250ms, 🔴 Xấu: > 250ms) cùng màu Embed thích ứng.",
    prefix_syntax: ".ping [hoặc .tre, .trễ, .rễ]",
    slash_syntax: "/ping",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Có thể dùng trong bất kỳ kênh văn bản nào trên server",
      "Hỗ trợ sử dụng cả trong tin nhắn riêng trực tiếp (DM) với bot",
      "Không yêu cầu bất kỳ quyền hạn quản trị nào"
    ],
    parameters: [],
    examples: [
      { cmd: ".ping", desc: "Kiểm tra độ trễ qua lệnh chuẩn" },
      { cmd: ".tre", desc: "Kiểm tra độ trễ bằng lệnh rút gọn tiếng Việt (.tre, .trễ, .rễ)" },
      { cmd: "/ping", desc: "Kiểm tra độ trễ qua Slash Command" }
    ],
    embed_preview: {
      title: "🏓 Pong! Kiểm Tra Độ Trễ",
      description: "**Tình trạng tổng quan:** 🟢 **Tốt**\n*Đường truyền mượt mà, tốc độ phản hồi cực nhanh!*",
      fields: [
        { name: "📶 WebSocket Latency", value: "`32ms` (🟢 **Tốt**)", inline: true },
        { name: "⚡ API Response Time", value: "`45ms` (🟢 **Tốt**)", inline: true },
        { name: "📋 Thang Đo 3 Mức Độ Đánh Giá", value: "• 🟢 **Tốt:** `< 100ms` (Mượt mà)\n• 🟡 **Bình thường:** `100ms - 250ms` (Ổn định)\n• 🔴 **Xấu:** `> 250ms` (Chậm / Lag)", inline: false }
      ],
      color: "#57F287",
      footer: "Yêu cầu bởi Người Dùng • Discord Bot System"
    }
  },
  {
    id: "help",
    name: "help",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "📖",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Cốt Lõi",
    description: "Mở menu bảng danh sách toàn bộ lệnh và hướng dẫn sử dụng bot tương tác.",
    detailed_desc: "Hiển thị menu Dropdown tương tác cho phép chọn xem theo từng nhóm danh mục: Trang Chủ, Tiện Ích, Quản Trị & AutoMod, Kinh Tế & Minigame, và Âm Nhạc Voice. Menu tự động khóa sau 180 giây.",
    prefix_syntax: ".help",
    slash_syntax: "/help",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Menu chọn danh mục chỉ người gọi lệnh mới có thể thao tác (chống người khác bấm nhầm)",
      "Tự động hết hạn và vô hiệu hóa nút bấm sau 180 giây",
      "Không yêu cầu quyền hạn quản trị"
    ],
    parameters: [],
    examples: [
      { cmd: ".help", desc: "Mở menu trợ giúp tương tác dạng Prefix" },
      { cmd: "/help", desc: "Mở menu trợ giúp dạng Slash Command" }
    ],
    embed_preview: {
      title: "🤖 BẢNG ĐIỀU KHIỂN & TRỢ GIÚP DISCORD BOT",
      description: "Chào mừng bạn! Chọn danh mục từ menu dropdown bên dưới để xem chi tiết từng nhóm lệnh.",
      fields: [
        { name: "⚡ Prefix Mặc Định", value: "`.` (hoặc gõ Slash Command `/`)", inline: true },
        { name: "🌐 Trạng Thái", value: "`Trực tuyến 24/7`", inline: true }
      ],
      color: "#5865F2",
      footer: "Sử dụng dropdown bên dưới để khám phá tính năng"
    }
  },
  {
    id: "serverinfo",
    name: "serverinfo",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "🏰",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["sinfo"],
    badge: "",
    description: "Xem thông tin chi tiết và các chỉ số thống kê về máy chủ Discord hiện tại.",
    detailed_desc: "Thống kê số lượng thành viên (chia theo người thật và bot), số lượng kênh văn bản, kênh thoại, cấp độ Nitro Boost, ngày tạo server, ID chủ sở hữu và ảnh đại diện server.",
    prefix_syntax: ".serverinfo",
    slash_syntax: "/serverinfo",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ sử dụng được trong máy chủ (Guild Only, không dùng được trong DM)",
      "Hiển thị thông tin máy chủ hiện tại nơi bạn gửi tin nhắn"
    ],
    parameters: [],
    examples: [
      { cmd: ".serverinfo", desc: "Xem thống kê máy chủ hiện tại" }
    ],
    embed_preview: {
      title: "🏰 THÔNG TIN MÁY CHỦ",
      fields: [
        { name: "👑 Chủ Sở Hữu", value: "Shin_.520", inline: true },
        { name: "👥 Thành Viên", value: "250 (235 Người • 15 Bot)", inline: true },
        { name: "💬 Kênh", value: "24 Văn Bản • 8 Thoại", inline: true },
        { name: "🚀 Cấp Boost", value: "Level 2 (14 Boosts)", inline: true }
      ],
      color: "#5865F2",
      footer: "ID Máy chủ: 123456789012345678"
    }
  },
  {
    id: "profile",
    name: "profile",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "👤",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["pf", "userinfo"],
    badge: "Thẻ Cá Nhân",
    description: "Xem thẻ hồ sơ cá nhân: số dư xu, cấp độ Level, EXP, thanh tiến trình, avatar và banner.",
    detailed_desc: "Tạo thẻ hồ sơ Discord Embed chi tiết hiển thị: Ví xu, Cấp độ Level, Điểm kinh nghiệm EXP, Thanh tiến trình lên cấp sinh động [██████░░░░], Ngày tạo tài khoản, Ngày gia nhập server, Vai trò cao nhất và Banner người dùng.",
    prefix_syntax: ".profile [@user]",
    slash_syntax: "/profile [member: @user]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Nếu không gắn thẻ người dùng, bot sẽ tự động hiển thị thẻ hồ sơ của chính bạn",
      "Lệnh tắt .pf hoạt động hoàn toàn tương đương với .profile"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: false,
        default: "Chính bạn",
        description: "Thành viên bạn muốn xem hồ sơ (tag @user hoặc để trống)"
      }
    ],
    examples: [
      { cmd: ".profile", desc: "Xem thẻ hồ sơ của bản thân" },
      { cmd: ".pf @Shin", desc: "Xem nhanh hồ sơ của người khác bằng alias .pf" },
      { cmd: "/profile member: @Shin", desc: "Xem hồ sơ qua Slash Command" }
    ],
    embed_preview: {
      title: "👤 HỒ SƠ THÀNH VIÊN — Shin",
      fields: [
        { name: "🪙 Số Dư Ví Xu", value: "`1,250,000 xu`", inline: true },
        { name: "⭐ Cấp Độ Level", value: "`Level 28` (Hạng #3)", inline: true },
        { name: "📊 Tiến Trình EXP", value: "`[████████░░]` 3,450 / 4,200 EXP", inline: false },
        { name: "📅 Gia Nhập Server", value: "12/05/2023", inline: true },
        { name: "🛡️ Vai Trò Cao Nhất", value: "@Admin", inline: true }
      ],
      color: "#5865F2",
      footer: "Shin Bot Economy & Profile System"
    }
  },
  {
    id: "pf",
    name: "pf",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "👤",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["userinfo", "profile"],
    badge: "Rút Gọn",
    description: "Xem nhanh thông tin hồ sơ người dùng (lệnh viết tắt tiện lợi của /profile).",
    detailed_desc: "Lệnh rút gọn của /profile giúp tra cứu nhanh thông tin hồ sơ tài khoản: ảnh đại diện, ngày tạo tài khoản, ngày tham gia server, số dư ví xu, cấp độ Level và điểm kinh nghiệm EXP.",
    prefix_syntax: ".pf [@user/ID]",
    slash_syntax: "/pf [member: @user]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Có thể dùng trong bất kỳ kênh văn bản nào trên server",
      "Nếu để trống sẽ hiển thị thông tin hồ sơ của chính bạn",
      "Không yêu cầu bất kỳ quyền hạn quản trị nào"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: false,
        default: "Chính bạn",
        description: "Thành viên muốn xem hồ sơ (để trống nếu muốn xem chính mình)"
      }
    ],
    examples: [
      { cmd: ".pf", desc: "Xem nhanh hồ sơ cá nhân của bạn" },
      { cmd: ".pf @Shin", desc: "Xem nhanh hồ sơ của người dùng @Shin" },
      { cmd: "/pf member: @Shin", desc: "Xem nhanh hồ sơ qua Slash Command" }
    ],
    embed_preview: {
      title: "👤 Thông Tin Hồ Sơ: Shin",
      description: "Tra cứu nhanh hồ sơ tài khoản người dùng trong hệ thống.",
      fields: [
        { name: "🆔 User ID", value: "`1544362205166837801`", inline: true },
        { name: "💰 Số Dư Ví", value: "`1,500,000` xu", inline: true },
        { name: "⭐ Cấp Độ", value: "Level **15** (EXP: `3,420 / 4,100`)", inline: true },
        { name: "📅 Tạo Tài Khoản", value: "15/01/2022", inline: true },
        { name: "📥 Gia Nhập Server", value: "20/03/2023", inline: true }
      ],
      color: "#5865F2",
      footer: "Yêu cầu bởi Bạn • Discord Bot System"
    }
  },
  {
    id: "avatar",
    name: "avatar",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "🖼️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["av"],
    badge: "",
    description: "Xem và tải ảnh đại diện kích thước lớn sắc nét (HD 1024px) của người dùng.",
    detailed_desc: "Trích xuất ảnh đại diện của thành viên ở độ phân giải cao nhất kèm các liên kết xem/tải trực tiếp định dạng PNG, JPG, WEBP hoặc GIF ảnh động.",
    prefix_syntax: ".avatar [@user]",
    slash_syntax: "/avatar [member: @user]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Nếu không gắn thẻ ai, bot hiển thị avatar của chính người gọi lệnh",
      "Tự động phát hiện ảnh động GIF nếu người dùng dùng Discord Nitro"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: false,
        default: "Chính bạn",
        description: "Thành viên muốn lấy ảnh đại diện"
      }
    ],
    examples: [
      { cmd: ".avatar", desc: "Xem avatar của bạn" },
      { cmd: ".avatar @Shin", desc: "Xem avatar của Shin" }
    ],
    embed_preview: {
      title: "🖼️ ẢNH ĐẠI DIỆN — Shin",
      description: "[PNG](https://discord.com) • [JPG](https://discord.com) • [WEBP](https://discord.com)",
      color: "#5865F2",
      footer: "Độ phân giải: 1024x1024"
    }
  },
  {
    id: "say",
    name: "say",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "📢",
    type: "hybrid",
    type_label: "Lệnh Kép (Prefix & Slash)",
    aliases: ["echo", "speak", "sendchannel"],
    badge: "Phổ Biến",
    description: "Bot gửi tin nhắn / phát ngôn thay bạn vào kênh chat (tại kênh hiện tại hoặc chỉ định #kênh).",
    detailed_desc: "Cho phép thành viên phát ngôn thông qua bot. Tự động xóa tin nhắn lệnh gốc của người gõ để giữ tính bí mật. Hỗ trợ đính kèm tệp tin/hình ảnh. Nếu server bật Say Log, chi tiết người gõ sẽ được lưu vào kênh log bảo mật.",
    prefix_syntax: ".say <nội dung> hoặc .say #kênh <nội dung>",
    slash_syntax: "/say message: <nội dung> [channel: #kênh]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Không được để trống nội dung tin nhắn",
      "Bot phải có quyền 'Send Messages' và 'Attach Files' trong kênh đích",
      "Nếu chỉ định #kênh (hoặc ID kênh), tin nhắn sẽ được gửi sang kênh đó; nếu không có, bot gửi trực tiếp tại kênh hiện tại",
      "Tự động xóa tin nhắn lệnh của người dùng để tránh lộ người gõ"
    ],
    parameters: [
      {
        name: "message",
        type: "Chuỗi văn bản (String)",
        required: true,
        default: null,
        description: "Nội dung bạn muốn bot gửi vào kênh chat"
      },
      {
        name: "channel",
        type: "Kênh văn bản (Channel)",
        required: false,
        default: "Kênh hiện tại",
        description: "Kênh văn bản muốn bot gửi tin nhắn vào (để trống nếu gửi ở kênh này)"
      }
    ],
    examples: [
      { cmd: ".say Chúc mọi người một ngày vui vẻ!", desc: "Gửi vào kênh hiện tại" },
      { cmd: ".say #thông-báo Tối nay 8h có sự kiện minigame nhé!", desc: "Gửi sang kênh #thông-báo" },
      { cmd: "/say message: Hello world channel: #chat-chung", desc: "Sử dụng qua Slash Command" }
    ],
    embed_preview: {
      title: "📢 Tin Nhắn Từ Bot",
      description: "Chúc mọi người một ngày vui vẻ và tràn đầy năng lượng!",
      color: "#5865F2",
      footer: "Được gửi qua hệ thống Say"
    }
  },
  {
    id: "welcome",
    name: "welcome",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "⚙️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["welcomeset", "welcomedash", "bwelcome"],
    badge: "Manage Server",
    description: "Bảng điều khiển trực quan tùy biến lời chào và Auto-Role gán vai trò tự động khi thành viên gia nhập.",
    detailed_desc: "Mở bảng điều khiển tương tác (Welcome Panel) với 2 Dropdown chọn kênh và chọn vai trò Auto-Role, Modal sửa tiêu đề/lời chào/banner/màu sắc/tin DM riêng, nút gỡ role, bật/tắt và gửi thử tin nhắn.",
    prefix_syntax: ".welcome [action] [#kênh] [@role]",
    slash_syntax: "/welcome [action] [channel: #kênh] [role: @role]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server) hoặc Quản trị viên (Administrator)",
      "Bot cần quyền Quản lý vai trò (Manage Roles) và vai trò của Bot phải cao hơn vai trò Auto-Role trong Role Hierarchy để gán thành công"
    ],
    parameters: [
      {
        name: "action",
        type: "Lựa chọn (panel / preview / test / toggle / reset / clearrole)",
        required: false,
        default: "panel",
        description: "Hành động nhanh hoặc mở bảng điều khiển"
      },
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: false,
        default: null,
        description: "Kênh văn bản muốn đặt làm nơi gửi thông báo chào mừng"
      },
      {
        name: "role",
        type: "Vai trò (Role)",
        required: false,
        default: null,
        description: "Vai trò tự động gán cho thành viên mới khi vừa vào server"
      }
    ],
    examples: [
      { cmd: ".welcome", desc: "Mở bảng điều khiển chào mừng & Auto-Role tương tác" },
      { cmd: ".welcome #chào-mừng @Thành Viên", desc: "Cài đặt nhanh kênh và vai trò Auto-Role" },
      { cmd: "/welcome action: panel", desc: "Mở bảng Welcome Panel qua Slash Command" }
    ],
    embed_preview: {
      title: "⚙️ BẢNG ĐIỀU KHIỂN & CHỈNH SỬA CHÀO MỪNG (WELCOME PANEL)",
      description: "Tùy biến toàn diện tin nhắn chào đón và cấp quyền thành viên mới của máy chủ.\n• Kênh thông báo: #chào-mừng\n• Auto-Role khi join: @Thành Viên (🟢 Bật)",
      color: "#5865F2",
      footer: "Antigravity Welcome System"
    }
  },
  {
    id: "welcomerole",
    name: "welcomerole",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "🎭",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["setwelcomerole", "joinrole", "autojoinrole"],
    badge: "Manage Roles",
    description: "Cài đặt hoặc gỡ bỏ vai trò (Role) tự động gán cho thành viên mới khi gia nhập máy chủ.",
    detailed_desc: "Tự động cấp role ngay tức thì khi thành viên mới vừa join server. Kiểm tra an toàn phân cấp vai trò (Role Hierarchy) và quyền hạn bot để đảm bảo vận hành ổn định.",
    prefix_syntax: ".welcomerole [@vai_trò]",
    slash_syntax: "/welcomerole [role: @vai_trò]",
    permissions: ["Manage Roles (Quản lý Vai trò)"],
    perm_level: "manage_roles",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý vai trò (Manage Roles)",
      "Không hỗ trợ role @everyone hoặc role hệ thống do bot/Nitro Boost quản lý",
      "Vai trò của Bot phải nằm trên vai trò được chọn trong danh sách vai trò Server Settings"
    ],
    parameters: [
      {
        name: "role",
        type: "Vai trò (Role)",
        required: false,
        default: null,
        description: "Vai trò muốn tự động gán (để trống để gỡ bỏ hoặc mở bảng điều khiển)"
      }
    ],
    examples: [
      { cmd: ".welcomerole @Thành Viên", desc: "Tự động gán role @Thành Viên khi có người vào server" },
      { cmd: ".welcomerole", desc: "Gỡ bỏ Auto-Role hoặc mở bảng chọn" },
      { cmd: "/welcomerole role: @Member", desc: "Cài đặt qua Slash Command" }
    ],
    embed_preview: {
      title: "✅ THIẾT LẬP AUTO-ROLE THÀNH CÔNG",
      description: "Đã cài đặt vai trò tự động gán cho thành viên mới: **@Thành Viên**\nKhi người mới gia nhập, bot sẽ tự động cấp vai trò này ngay tức thì.",
      color: "#57F287",
      footer: "Welcome Auto-Role System"
    }
  },
  {
    id: "setwelcome",
    name: "setwelcome",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "🎉",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Admin",
    description: "Cài đặt kênh văn bản gửi tin nhắn tự động chào đón thành viên mới gia nhập server.",
    detailed_desc: "Khi có người mới vào máy chủ, bot tự động tạo thẻ Embed chào mừng kèm avatar, thứ tự thành viên và ngày tạo tài khoản gửi vào kênh đã thiết lập.",
    prefix_syntax: ".setwelcome <#kênh>",
    slash_syntax: "/setwelcome channel: <#kênh>",
    permissions: ["Administrator (Quản trị viên)"],
    perm_level: "admin",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu người dùng phải có quyền Quản trị viên (Administrator)",
      "Kênh được chọn phải là kênh văn bản hợp lệ trên máy chủ",
      "Dữ liệu được lưu trữ an toàn trong SQLite Database"
    ],
    parameters: [
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: true,
        default: null,
        description: "Kênh văn bản muốn nhận thông báo chào mừng"
      }
    ],
    examples: [
      { cmd: ".setwelcome #chào-mừng", desc: "Đặt kênh chào mừng là #chào-mừng" },
      { cmd: "/setwelcome channel: #welcome", desc: "Cài đặt qua Slash Command" }
    ],
    embed_preview: {
      title: "🎉 THÀNH VIÊN MỚI GIA NHẬP!",
      description: "Chào mừng **Shin** đã tham gia server!\nBạn là thành viên thứ **251** của đại gia đình chúng mình.",
      color: "#57F287",
      footer: "Ngày tạo tài khoản: 10/01/2022"
    }
  },
  {
    id: "setsaylog",
    name: "setsaylog",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "📝",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Manage Server",
    description: "Cài đặt kênh nhận nhật ký khi có thành viên dùng lệnh say (ghi rõ người gõ, nội dung, kênh).",
    detailed_desc: "Giúp ban quản trị theo dõi ai đã dùng lệnh say để phát ngôn thay bot, kèm link tin nhắn, thời gian và ID tài khoản. Để trống tham số kênh để tắt tính năng ghi log.",
    prefix_syntax: ".setsaylog [#kênh]",
    slash_syntax: "/setsaylog [channel: #kênh]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server / Manage Guild)",
      "Nếu không truyền kênh, bot sẽ tắt tính năng ghi nhật ký lệnh say"
    ],
    parameters: [
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: false,
        default: "Để trống để tắt",
        description: "Kênh nhận thông báo log lệnh say (để trống để tắt log)"
      }
    ],
    examples: [
      { cmd: ".setsaylog #say-log", desc: "Cài đặt kênh #say-log nhận nhật ký" },
      { cmd: ".setsaylog", desc: "Tắt ghi nhật ký lệnh say" }
    ]
  },
  {
    id: "setdmslog",
    name: "setdmslog",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "📩",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Manage Server",
    description: "Cài đặt kênh nhận nhật ký khi Owner sử dụng lệnh dms gửi tin nhắn.",
    detailed_desc: "Ghi nhận lại toàn bộ nhật ký khi Owner sử dụng lệnh đặc quyền /dms để gửi tin nhắn đến bất kỳ kênh hoặc DM người dùng nào. Để trống tham số để tắt.",
    prefix_syntax: ".setdmslog [#kênh]",
    slash_syntax: "/setdmslog [channel: #kênh]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Yêu cầu quyền Quản lý máy chủ (Manage Server) hoặc Chủ sở hữu bot",
      "Nếu để trống kênh, tính năng log lệnh dms sẽ bị tắt"
    ],
    parameters: [
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: false,
        default: "Để trống để tắt",
        description: "Kênh nhận thông báo log lệnh dms (để trống để tắt)"
      }
    ],
    examples: [
      { cmd: ".setdmslog #dms-log", desc: "Cài đặt kênh #dms-log nhận nhật ký dms" }
    ]
  },
  {
    id: "setlog",
    name: "setlog",
    category: "general",
    category_name: "Tiện Ích & Thông Tin",
    icon: "⚙️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Manage Server",
    description: "Lệnh cài đặt nhật ký tổng hợp nhanh chóng cho lệnh say, dms hoặc cả hai.",
    detailed_desc: "Tiện ích cài đặt một bước cho phép quản trị viên cấu hình kênh ghi nhật ký cho say, dms hoặc gộp chung cả hai vào cùng một kênh.",
    prefix_syntax: ".setlog <say|dms|all> [#kênh]",
    slash_syntax: "/setlog loai: <say|dms|all> [channel: #kênh]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Tham số loại log bắt buộc phải là: 'say', 'dms', hoặc 'all'"
    ],
    parameters: [
      {
        name: "loai",
        type: "Lựa chọn ('say', 'dms', 'all')",
        required: true,
        default: null,
        description: "Loại nhật ký: say (lệnh say), dms (lệnh dms), hoặc all (cả hai)"
      },
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: false,
        default: "Để trống để tắt",
        description: "Kênh nhận log (để trống để tắt ghi log loại đó)"
      }
    ],
    examples: [
      { cmd: ".setlog all #mod-logs", desc: "Cài cả say log và dms log vào kênh #mod-logs" },
      { cmd: ".setlog say #say-logs", desc: "Chỉ cài log cho lệnh say" }
    ]
  },

  // =========================================================================
  // 2. QUẢN TRỊ MÁY CHỦ (MODERATION)
  // =========================================================================
  {
    id: "clear",
    name: "clear",
    category: "moderation",
    category_name: "Quản Trị Máy Chủ",
    icon: "🧹",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["purge", "clean"],
    badge: "Manage Messages",
    description: "Xóa nhanh từ 1 đến 100 tin nhắn trong kênh hiện tại.",
    detailed_desc: "Dọn dẹp tin nhắn hàng loạt trong kênh chat. Nếu dùng qua Prefix ., bot tự động xóa cả tin nhắn gọi lệnh của người dùng để trả lại kênh chat sạch sẽ.",
    prefix_syntax: ".clear <số_lượng>",
    slash_syntax: "/clear amount: <số_lượng>",
    permissions: ["Manage Messages (Quản lý Tin nhắn)"],
    perm_level: "moderator",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người dùng phải có quyền Quản lý Tin nhắn (Manage Messages)",
      "Bot phải có quyền Quản lý Tin nhắn (Manage Messages)",
      "Số lượng tin nhắn hợp lệ: Từ 1 đến 100 tin",
      "Discord không cho phép xóa tin nhắn đã gửi quá 14 ngày trước (giới hạn API)"
    ],
    parameters: [
      {
        name: "amount",
        type: "Số nguyên (Integer: 1-100)",
        required: true,
        default: null,
        description: "Số lượng tin nhắn cần xóa (từ 1 đến 100)"
      }
    ],
    examples: [
      { cmd: ".clear 10", desc: "Xóa 10 tin nhắn gần nhất" },
      { cmd: "/clear amount: 50", desc: "Xóa 50 tin nhắn qua Slash command" }
    ],
    embed_preview: {
      title: "✅ ĐÃ DỌN DẸP TIN NHẮN",
      description: "Đã xóa thành công **50** tin nhắn trong kênh này!",
      color: "#57F287",
      footer: "Tin nhắn được ẩn với người khác (Ephemeral)"
    }
  },
  {
    id: "kick",
    name: "kick",
    category: "moderation",
    category_name: "Quản Trị Máy Chủ",
    icon: "👢",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Kick Members",
    description: "Đuổi một thành viên ra khỏi máy chủ kèm lý do vi phạm.",
    detailed_desc: "Đuổi thành viên ra khỏi server. Thành viên vẫn có thể tham gia lại server nếu có lời mời mới.",
    prefix_syntax: ".kick <@user> [lý do]",
    slash_syntax: "/kick member: <@user> [reason: lý do]",
    permissions: ["Kick Members (Đuổi Thành viên)"],
    perm_level: "moderator",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người thực hiện phải có quyền Kick Members",
      "Bot phải có quyền Kick Members",
      "Không thể tự kick chính mình",
      "Không thể kick người có vai trò (Role) cao hơn hoặc bằng vai trò của bạn (Role Hierarchy)",
      "Bot không thể kick người có vai trò cao hơn hoặc bằng vai trò cao nhất của Bot"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Thành viên cần đuổi (tag @user)"
      },
      {
        name: "reason",
        type: "Chuỗi văn bản (String)",
        required: false,
        default: "Không có lý do",
        description: "Lý do đuổi thành viên"
      }
    ],
    examples: [
      { cmd: ".kick @Spammer Spam tin nhắn liên tục", desc: "Đuổi Spammer kèm lý do" },
      { cmd: "/kick member: @Troll reason: Phá hoại server", desc: "Đuổi qua Slash Command" }
    ],
    embed_preview: {
      title: "👢 ĐÃ ĐUỔI THÀNH VIÊN",
      description: "Thành viên **Troll** đã bị đuổi khỏi server.\n**Lý do:** Phá hoại server",
      color: "#57F287",
      footer: "Người thực hiện: Shin"
    }
  },
  {
    id: "ban",
    name: "ban",
    category: "moderation",
    category_name: "Quản Trị Máy Chủ",
    icon: "⛔",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Ban Members",
    description: "Cấm vĩnh viễn một thành viên khỏi máy chủ kèm lý do vi phạm.",
    detailed_desc: "Cấm thành viên khỏi máy chủ vĩnh viễn, ngăn không cho tài khoản này tham gia lại vào máy chủ.",
    prefix_syntax: ".ban <@user> [lý do]",
    slash_syntax: "/ban member: <@user> [reason: lý do]",
    permissions: ["Ban Members (Cấm Thành viên)"],
    perm_level: "moderator",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người thực hiện phải có quyền Ban Members",
      "Bot phải có quyền Ban Members",
      "Không thể tự ban chính mình",
      "Không thể ban người có vai trò cao hơn hoặc bằng vai trò của bạn (Role Hierarchy)",
      "Bot không thể ban người có vai trò cao hơn hoặc bằng vai trò cao nhất của Bot"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Thành viên cần cấm (tag @user)"
      },
      {
        name: "reason",
        type: "Chuỗi văn bản (String)",
        required: false,
        default: "Không có lý do",
        description: "Lý do cấm thành viên"
      }
    ],
    examples: [
      { cmd: ".ban @Scammer Gửi link lừa đảo Nitro", desc: "Ban kẻ lừa đảo" },
      { cmd: "/ban member: @BadGuy reason: Vi phạm nghiêm trọng", desc: "Ban qua Slash command" }
    ],
    embed_preview: {
      title: "⛔ ĐÃ CẤM THÀNH VIÊN",
      description: "Thành viên **Scammer** đã bị cấm khỏi server vĩnh viễn.\n**Lý do:** Gửi link lừa đảo Nitro",
      color: "#ED4245",
      footer: "Án phạt vĩnh viễn"
    }
  },
  {
    id: "unban",
    name: "unban",
    category: "moderation",
    category_name: "Quản Trị Máy Chủ",
    icon: "🔓",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Ban Members",
    description: "Gỡ cấm cho một người dùng bằng User ID tài khoản.",
    detailed_desc: "Hủy án phạt cấm của một người dùng trong danh sách Ban List của máy chủ bằng cách nhập User ID (dãy số ID 18-19 ký tự).",
    prefix_syntax: ".unban <user_id>",
    slash_syntax: "/unban user_id: <user_id>",
    permissions: ["Ban Members (Cấm Thành viên)"],
    perm_level: "moderator",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người thực hiện phải có quyền Ban Members",
      "Bot phải có quyền Ban Members",
      "ID người dùng phải hợp lệ (dãy số ID)",
      "Người dùng phải đang nằm trong danh sách cấm của server"
    ],
    parameters: [
      {
        name: "user_id",
        type: "Dãy số ID (String/ID)",
        required: true,
        default: null,
        description: "ID tài khoản Discord của người dùng cần gỡ cấm"
      }
    ],
    examples: [
      { cmd: ".unban 123456789012345678", desc: "Gỡ cấm cho tài khoản qua ID" },
      { cmd: "/unban user_id: 123456789012345678", desc: "Gỡ cấm qua Slash command" }
    ],
    embed_preview: {
      title: "🔓 GỠ CẤM THÀNH CÔNG",
      description: "Đã gỡ cấm cho tài khoản **User** (`123456789012345678`).",
      color: "#57F287",
      footer: "Đã xóa khỏi danh sách cấm"
    }
  },
  {
    id: "mute",
    name: "mute",
    category: "moderation",
    category_name: "Quản Trị Máy Chủ",
    icon: "⏳",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["timeout"],
    badge: "Moderate Members",
    description: "Cấm chat tạm thời (Timeout) một thành viên từ 1 phút đến 28 ngày.",
    detailed_desc: "Áp dụng cơ chế Discord Timeout chính thức. Thành viên bị mute sẽ không thể gửi tin nhắn, phản hồi emoji hay tham gia voice chat trong suốt khoảng thời gian phạt.",
    prefix_syntax: ".mute <@user> <số_phút> [lý do]",
    slash_syntax: "/mute member: <@user> minutes: <số_phút> [reason: lý do]",
    permissions: ["Moderate Members (Quản lý Thành viên / Timeout)"],
    perm_level: "moderator",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người thực hiện phải có quyền Moderate Members (Timeout)",
      "Bot phải có quyền Moderate Members",
      "Không thể tự mute chính mình",
      "Thời gian cấm chat hợp lệ: Từ 1 đến 40,320 phút (tối đa 28 ngày theo giới hạn của Discord)",
      "Không thể mute người có vai trò cao hơn hoặc bằng bạn",
      "Bot không thể mute người có vai trò cao hơn vai trò của Bot"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Thành viên cần cấm chat (tag @user)"
      },
      {
        name: "minutes",
        type: "Số nguyên phút (Integer: 1-40320)",
        required: true,
        default: null,
        description: "Thời gian cấm chat tính bằng phút (1 đến 40320 phút)"
      },
      {
        name: "reason",
        type: "Chuỗi văn bản (String)",
        required: false,
        default: "Không có lý do",
        description: "Lý do cấm chat"
      }
    ],
    examples: [
      { cmd: ".mute @User 10 Spam chat", desc: "Cấm chat 10 phút vì spam" },
      { cmd: ".timeout @User 60 Chửi bậy", desc: "Dùng alias .timeout cấm 1 tiếng" },
      { cmd: "/mute member: @User minutes: 120 reason: Vi phạm voice", desc: "Cấm chat 2 tiếng qua Slash command" }
    ],
    embed_preview: {
      title: "⏳ ĐÃ MUTE THÀNH VIÊN",
      description: "Thành viên **User** đã bị cấm chat (mute) trong **60** phút.\n**Lý do:** Chửi bậy",
      color: "#FAA61A",
      footer: "Thời hạn: 1 giờ"
    }
  },

    {
    id: "doiten",
    name: "doiten",
    category: "moderation",
    category_name: "Quản Trị Máy Chủ",
    icon: "🏷️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["setnick", "nick", "nickname", "changenick"],
    badge: "Mới Cập Nhật",
    description: "Đổi biệt danh cho bản thân hoặc thành viên khác trong server (hỗ trợ đặt lại tên gốc với reset).",
    detailed_desc: "Cho phép bất kỳ thành viên nào tự đổi biệt danh của chính mình mà không cần quyền quản trị. Nếu đổi cho thành viên khác, yêu cầu quyền Quản Lý Biệt Danh (Manage Nicknames). Hỗ trợ đặt lại tên mặc định khi nhập 'reset', 'clear', 'macdinh'. Tự động kiểm tra độ dài tối đa 32 ký tự và phân cấp vai trò (Role Hierarchy).",
    prefix_syntax: ".doiten [@user/ID] <Biệt danh mới | reset>",
    slash_syntax: "/doiten [target: @user] [nickname: tên mới/reset]",
    permissions: ["Tự đổi tên: Mọi người; Đổi người khác: Manage Nicknames (Quản Lý Biệt Danh)"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Tự đổi tên cho bản thân: Tất cả thành viên đều được phép sử dụng",
      "Đổi tên cho thành viên khác: Bắt buộc người thực hiện phải có quyền Quản Lý Biệt Danh (Manage Nicknames) hoặc Quản Trị Viên (Administrator)",
      "Bot phải có quyền Quản Lý Biệt Danh (Manage Nicknames) và vai trò của Bot phải cao hơn đối tượng",
      "Không thể đổi biệt danh của Chủ sở hữu máy chủ (Server Owner) do giới hạn bảo mật của Discord API",
      "Không thể đổi biệt danh của người có vai trò bằng hoặc cao hơn vai trò của bạn",
      "Độ dài biệt danh tối đa 32 ký tự theo chuẩn Discord"
    ],
    parameters: [
      {
        name: "target",
        type: "Thành viên (Member)",
        required: false,
        default: "Chính bạn",
        description: "Thành viên cần đổi biệt danh (để trống nếu tự đổi cho bản thân)"
      },
      {
        name: "nickname",
        type: "Chuỗi ký tự (String: tối đa 32 ký tự)",
        required: false,
        default: null,
        description: "Biệt danh mới, hoặc nhập 'reset' để xóa biệt danh về tên gốc (để trống để xem biệt danh hiện tại)"
      }
    ],
    examples: [
      { cmd: ".doiten Shin Cậu Bé Bút Chì", desc: "Tự đổi biệt danh của chính bạn thành 'Shin Cậu Bé Bút Chì'" },
      { cmd: ".doiten reset", desc: "Xóa biệt danh của bạn, trở về tên gốc mặc định" },
      { cmd: ".doiten @Member VIP Member", desc: "Đổi biệt danh cho @Member thành 'VIP Member' (cần quyền)" },
      { cmd: "/doiten target: @Member nickname: reset", desc: "Xóa biệt danh của @Member về tên gốc qua Slash" }
    ],
    embed_preview: {
      title: "🏷️ ĐỔI BIỆT DANH THÀNH CÔNG",
      description: "Đã đổi biệt danh cho **Shin** thành công!\n\n• **Tên trước đó:** `Shin cũ`\n• **Biệt danh mới:** **Shin Cậu Bé Bút Chì**",
      color: "#57F287",
      footer: "Quản lý biệt danh máy chủ • Discord Bot"
    }
  },

  // =========================================================================
  // 3. KIỂM DUYỆT TỰ ĐỘNG (AUTOMOD 24/7)
  // =========================================================================
  {
    id: "automod",
    name: "automod",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "🛡️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["automode"],
    badge: "AutoMod Core",
    description: "Xem bảng điều khiển trạng thái hoặc bật/tắt, cấu hình hình phạt AutoMod.",
    detailed_desc: "Mở Dashboard tương tác hiển thị tình trạng bật/tắt của hệ thống AutoMod, trạng thái của 4 quy tắc bảo vệ, hình phạt đang áp dụng cho từng quy tắc và kênh log. Hỗ trợ menu dropdown tương tác chọn hình thức phạt trực quan.",
    prefix_syntax: ".automod [on|off|status|test]",
    slash_syntax: "/automod [action: on/off/status/test/rule/delete/timeout/kick/ban]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server / Manage Guild)",
      "Tham số action tùy chọn: 'on' (bật), 'off' (tắt), 'status' (xem bảng), 'test' (thử nghiệm gửi log vi phạm giả lập)"
    ],
    parameters: [
      {
        name: "action",
        type: "Lựa chọn (on, off, status, test, rule, delete, timeout, kick, ban)",
        required: false,
        default: "status",
        description: "Hành động muốn thực hiện (bật, tắt hoặc xem bảng điều khiển)"
      }
    ],
    examples: [
      { cmd: ".automod", desc: "Mở Dashboard bảng điều khiển trạng thái" },
      { cmd: ".automod on", desc: "Bật hệ thống AutoMod" },
      { cmd: ".automod off", desc: "Tắt hệ thống AutoMod" },
      { cmd: ".automod test", desc: "Gửi thông báo vi phạm thử nghiệm về Kênh Log và DM Chủ bot" }
    ],
    embed_preview: {
      title: "🛡️ BẢNG ĐIỀU KHIỂN AUTOMOD 24/7",
      description: "Trạng thái hệ thống: 🟢 **ĐANG HOẠT ĐỘNG (BẬT)**\nKênh nhận log: **#automod-logs**",
      fields: [
        { name: "🚫 Anti-Invite", value: "`🗑️ Xóa tin` (Có Whitelist)", inline: true },
        { name: "🔗 Anti-Links", value: "`🔴 TẮT` (Có Whitelist)", inline: true },
        { name: "🌊 Anti-Flood", value: "`⏳ Timeout (5p)`", inline: true },
        { name: "🤬 Bộ Lọc Từ Thô Tục", value: "`⏳ Timeout (5p)`", inline: true }
      ],
      color: "#5865F2",
      footer: "Double Log: Server Log & DM Owner"
    }
  },
  {
    id: "setruleaction",
    name: "setruleaction",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "⚖️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ruleaction", "setautomodrule"],
    badge: "Manage Server",
    description: "Cài đặt hình thức xử phạt RIÊNG BIỆT cho từng quy tắc AutoMod (delete, timeout, kick, ban).",
    detailed_desc: "Cho phép tùy biến xử lý vi phạm linh hoạt: Ví dụ gửi link mời Discord thì chỉ xóa tin, spam chat thì Timeout 5 phút, chửi thề thì xóa tin hoặc Timeout.",
    prefix_syntax: ".setruleaction <invite|links|flood|badwords> <delete|timeout|kick|ban> [phút]",
    slash_syntax: "/setruleaction rule: <quy_tắc> action: <hành_động> [minutes: số_phút]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Quy tắc hợp lệ: 'invite' (Anti-Invite), 'links' (Anti-Links), 'flood' (Anti-Flood), 'badwords' (Bộ lọc từ thô tục)",
      "Hình thức xử phạt hợp lệ: 'delete' (chỉ xóa), 'timeout' (cấm chat tạm thời), 'kick' (đuổi), 'ban' (cấm vĩnh viễn)",
      "Nếu chọn 'timeout', số phút phải từ 1 đến 40320 phút (mặc định 5 phút)"
    ],
    parameters: [
      {
        name: "rule",
        type: "Literal ('invite', 'links', 'flood', 'badwords')",
        required: true,
        default: null,
        description: "Quy tắc cần cấu hình hình phạt"
      },
      {
        name: "action",
        type: "Literal ('delete', 'timeout', 'kick', 'ban')",
        required: true,
        default: null,
        description: "Hình phạt áp dụng khi vi phạm quy tắc này"
      },
      {
        name: "minutes",
        type: "Số nguyên phút (1-40320)",
        required: false,
        default: "5",
        description: "Số phút timeout nếu chọn hình thức timeout (mặc định 5 phút)"
      }
    ],
    examples: [
      { cmd: ".setruleaction links timeout 5", desc: "Cài phạt Timeout 5 phút với kẻ gửi link web" },
      { cmd: ".setruleaction flood timeout 10", desc: "Cài phạt Timeout 10 phút khi spam flood chat" },
      { cmd: ".setruleaction invite delete", desc: "Chỉ xóa tin nhắn khi gửi link mời Discord" }
    ]
  },
  {
    id: "setautomodaction",
    name: "setautomodaction",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "🔨",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["automodaction"],
    badge: "Manage Server",
    description: "Cài đặt hình thức xử phạt mặc định chung toàn máy chủ khi vi phạm AutoMod.",
    detailed_desc: "Thiết lập hình thức phạt mặc định áp dụng cho toàn bộ các quy tắc chưa được cấu hình hình phạt riêng lẻ.",
    prefix_syntax: ".setautomodaction <delete|timeout|kick|ban> [phút]",
    slash_syntax: "/setautomodaction action: <hành_động> [minutes: số_phút]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Hành động hợp lệ: 'delete', 'timeout', 'kick', 'ban'",
      "Số phút timeout: Từ 1 đến 40320 phút (mặc định: 5 phút)"
    ],
    parameters: [
      {
        name: "action",
        type: "Literal ('delete', 'timeout', 'kick', 'ban')",
        required: true,
        default: null,
        description: "Hình thức xử phạt mặc định"
      },
      {
        name: "minutes",
        type: "Số nguyên phút (1-40320)",
        required: false,
        default: "5",
        description: "Số phút timeout nếu chọn hình thức timeout"
      }
    ],
    examples: [
      { cmd: ".setautomodaction timeout 15", desc: "Đặt hình phạt mặc định là cấm chat 15 phút" },
      { cmd: ".setautomodaction delete", desc: "Đặt hình phạt mặc định là chỉ xóa tin" }
    ]
  },
  {
    id: "setlogchannel",
    name: "setlogchannel",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "📜",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["setautomodlog", "setmodlog"],
    badge: "Double Log",
    description: "Cài đặt kênh nhận thông báo nhật ký vi phạm AutoMod trên máy chủ (Double Log).",
    detailed_desc: "Khi thành viên vi phạm quy tắc AutoMod, hệ thống sẽ gửi một thông báo Embed chi tiết vào kênh này (ghi rõ người vi phạm, quy tắc, nội dung, hình phạt đã thi hành). Đồng thời hệ thống cũng gửi bản sao DM về cho Chủ Bot.",
    prefix_syntax: ".setlogchannel <#kênh>",
    slash_syntax: "/setlogchannel channel: <#kênh>",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Kênh được chọn phải là kênh văn bản bot có quyền gửi tin nhắn"
    ],
    parameters: [
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: true,
        default: null,
        description: "Kênh văn bản muốn nhận nhật ký cảnh báo vi phạm"
      }
    ],
    examples: [
      { cmd: ".setlogchannel #automod-logs", desc: "Cài đặt kênh #automod-logs nhận báo cáo vi phạm" },
      { cmd: "/setlogchannel channel: #canh-bao", desc: "Cài đặt qua Slash Command" }
    ]
  },
  {
    id: "invitebypass",
    name: "invitebypass",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "🎫",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["bypassinvite", "antibypass", "whitelistrole"],
    badge: "Whitelist",
    description: "Quản lý danh sách vai trò (Role) được phép gửi link mời Discord (Bỏ qua Anti-Invite).",
    detailed_desc: "Cấp ngoại lệ cho các vai trò tin cậy (như Admin, Mod, VIP, Đối tác) được tự do chia sẻ link mời Discord mà không bị hệ thống Anti-Invite xóa tin hay xử phạt.",
    prefix_syntax: ".invitebypass <add|remove|list|clear> [@role]",
    slash_syntax: "/invitebypass action: <add|remove|list|clear> [role: @role]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Hành động 'add' hoặc 'remove' bắt buộc phải truyền tham số role (@role hoặc ID role)",
      "Hành động 'list' hiển thị danh sách vai trò được miễn trừ hiện tại",
      "Hành động 'clear' xóa trắng toàn bộ danh sách vai trò miễn trừ"
    ],
    parameters: [
      {
        name: "action",
        type: "Literal ('add', 'remove', 'list', 'clear')",
        required: true,
        default: null,
        description: "Hành động: add (thêm), remove (xóa), list (xem danh sách), clear (xóa hết)"
      },
      {
        name: "role",
        type: "Vai trò (Role)",
        required: false,
        default: null,
        description: "Vai trò muốn thêm hoặc xóa khỏi danh sách miễn trừ"
      }
    ],
    examples: [
      { cmd: ".invitebypass add @VIP", desc: "Cho phép role VIP gửi link mời Discord" },
      { cmd: ".invitebypass remove @VIP", desc: "Hủy quyền miễn trừ của role VIP" },
      { cmd: ".invitebypass list", desc: "Xem danh sách các vai trò đang được miễn trừ" }
    ]
  },
  {
    id: "antiinvite",
    name: "antiinvite",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "🚫",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["antiinvites", "chonginvite", "chonglinkmoi", "anti_invite"],
    badge: "Bảo Vệ Cốt Lõi",
    description: "Bật, tắt hoặc cài đặt hình phạt và cấu hình chế độ chọn kênh cho Anti-Invite (Chặn link mời Discord).",
    detailed_desc: "Tự động phát hiện và ngăn chặn toàn bộ đường link mời tham gia Discord khác (discord.gg, discord.com/invite, discord.io...) để bảo vệ server khỏi nạn cướp thành viên và quảng bá trái phép. Hỗ trợ 3 chế độ kênh (all, only, ignore).",
    prefix_syntax: ".antiinvite <on|off|status|channel|mode|delete|timeout|kick|ban> [phút/mode]",
    slash_syntax: "/antiinvite [action: on|off|status|channel|mode|delete|timeout|kick|ban] [param1: số_phút/chế_độ] [param2: vai_trò/kênh]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Lệnh '.antiinvite on' để kích hoạt tính năng chặn link mời",
      "Lệnh '.antiinvite off' để tắt tính năng chặn link mời",
      "Tùy chỉnh chế độ kênh: all (tất cả kênh), only (chỉ kênh chọn), ignore (bỏ qua kênh chọn)",
      "Tùy chỉnh hình phạt riêng: delete, timeout, kick, ban"
    ],
    parameters: [
      {
        name: "action",
        type: "Chuỗi (on, off, status, channel, mode, delete, timeout, kick, ban)",
        required: false,
        default: "status",
        description: "Hành động điều khiển: on/off bật tắt, channel/mode cấu hình kênh, delete/timeout/kick/ban đổi hình phạt"
      },
      {
        name: "param1",
        type: "Số nguyên hoặc Chuỗi",
        required: false,
        default: null,
        description: "Số phút timeout khi chọn timeout, hoặc hành động kênh (mode/add/remove/list/clear), hoặc chế độ (all/only/ignore)"
      },
      {
        name: "param2",
        type: "Chuỗi (Kênh hoặc Vai trò)",
        required: false,
        default: null,
        description: "Kênh văn bản hoặc vai trò bổ sung"
      }
    ],
    examples: [
      { cmd: ".antiinvite on", desc: "Bật tính năng chặn link mời Discord trong server" },
      { cmd: ".antiinvite off", desc: "Tắt tính năng chặn link mời" },
      { cmd: ".antiinvite channel", desc: "Mở menu trực quan chọn chế độ kênh và chọn kênh" },
      { cmd: ".antiinvite channel mode only", desc: "Cài đặt Anti-Invite chỉ quét tại các kênh được chọn" },
      { cmd: ".antiinvite channel add #chat-chung", desc: "Thêm kênh vào danh sách kiểm duyệt/ngoại lệ" },
      { cmd: ".antiinvite timeout 10", desc: "Cài đặt cấm chat 10 phút người gửi link mời" },
      { cmd: ".antiinvite", desc: "Xem trạng thái hiện tại, chế độ kênh và vai trò miễn trừ" }
    ]
  },
  {
    id: "invitechannel",
    name: "invitechannel",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "⚙️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["invitechannels", "antiinvitechannel", "channelinvite", "kenhinvite"],
    badge: "Chế Độ Kênh",
    description: "Cài đặt chế độ chọn kênh (Tất cả / Chỉ định / Bỏ qua) và quản lý danh sách kênh cho Anti-Invite.",
    detailed_desc: "Tùy biến phạm vi hoạt động của Anti-Invite theo từng kênh cụ thể: Quét toàn bộ máy chủ (all), Chỉ quét tại các kênh được chọn (only), hoặc Quét toàn bộ NGOẠI TRỪ các kênh được chọn (ignore - ví dụ kênh quảng cáo, đối tác). Hỗ trợ giao diện Dropdown Menu trực quan.",
    prefix_syntax: ".invitechannel <panel|mode|add|remove|list|clear> [#kênh] [all|only|ignore]",
    slash_syntax: "/invitechannel [action: panel|mode|add|remove|list|clear] [channel: #kênh] [mode: all|only|ignore]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Chế độ 'all': Quét & chặn link mời trên toàn bộ kênh (mặc định)",
      "Chế độ 'only': CHỈ chặn link mời tại các kênh nằm trong danh sách",
      "Chế độ 'ignore': Chặn link mời mọi nơi NGOẠI TRỪ các kênh trong danh sách",
      "Hỗ trợ giao diện tương tác Dropdown Menu trực quan trong Discord"
    ],
    parameters: [
      {
        name: "action",
        type: "Literal ('panel', 'mode', 'add', 'remove', 'list', 'clear')",
        required: false,
        default: "panel",
        description: "Hành động: panel (mở giao diện tương tác), mode (đổi chế độ), add (thêm kênh), remove (xóa kênh), list (xem), clear (xóa hết)"
      },
      {
        name: "channel",
        type: "Kênh văn bản (Channel)",
        required: false,
        default: null,
        description: "Kênh văn bản muốn thêm hoặc xóa khỏi danh sách cấu hình"
      },
      {
        name: "mode",
        type: "Literal ('all', 'only', 'ignore')",
        required: false,
        default: null,
        description: "Chế độ áp dụng: all (tất cả kênh), only (chỉ kênh chọn), ignore (bỏ qua kênh chọn)"
      }
    ],
    examples: [
      { cmd: ".invitechannel", desc: "Mở menu tương tác chọn chế độ và chọn kênh trực quan" },
      { cmd: ".invitechannel mode only", desc: "Chuyển sang chế độ chỉ quét các kênh được chọn" },
      { cmd: ".invitechannel mode ignore", desc: "Chuyển sang chế độ bỏ qua (cho phép gửi link mời ở kênh được chọn)" },
      { cmd: ".invitechannel add #kênh-quảng-cáo", desc: "Thêm kênh vào danh sách cấu hình" },
      { cmd: ".invitechannel remove #kênh-quảng-cáo", desc: "Xóa kênh khỏi danh sách cấu hình" },
      { cmd: ".invitechannel list", desc: "Xem trạng thái chế độ kênh và danh sách kênh hiện tại" }
    ]
  },
  {
    id: "antilink",
    name: "antilink",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "🔗",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["antilinks", "antimolink", "chonglink", "anti_link", "anti_links"],
    badge: "Bảo Vệ Mới",
    description: "Bật, tắt hoặc cài đặt hình phạt cho tính năng Chặn mọi liên kết web (Anti-Links / Anti mọi link).",
    detailed_desc: "Tự động phát hiện và ngăn chặn toàn bộ đường link web (URL http/https, www, domain rút gọn, link website bên ngoài) để bảo vệ server khỏi nạn spam và quảng bá trái phép.",
    prefix_syntax: ".antilink <on|off|status|channel|mode|delete|timeout|kick|ban> [phút/mode]",
    slash_syntax: "/antilink [action: on|off|status|channel|mode|delete|timeout|kick|ban] [param1: số_phút/chế_độ] [param2: vai_trò/kênh]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Lệnh '.antilink on' để kích hoạt tính năng chặn mọi link",
      "Lệnh '.antilink off' để tắt tính năng chặn mọi link",
      "Tùy chỉnh chế độ kênh: all (tất cả kênh), only (chỉ kênh chọn), ignore (bỏ qua kênh chọn)",
      "Tùy chỉnh hình phạt riêng: delete, timeout, kick, ban"
    ],
    parameters: [
      {
        name: "action",
        type: "Chuỗi (on, off, status, channel, mode, delete, timeout, kick, ban)",
        required: false,
        default: "status",
        description: "Hành động điều khiển: on/off bật tắt, channel/mode cấu hình kênh, delete/timeout/kick/ban đổi hình phạt"
      },
      {
        name: "param1",
        type: "Số nguyên hoặc Chuỗi",
        required: false,
        default: null,
        description: "Số phút timeout khi chọn timeout, hoặc hành động kênh (mode/add/remove/list/clear), hoặc chế độ (all/only/ignore)"
      },
      {
        name: "param2",
        type: "Chuỗi (Kênh hoặc Vai trò)",
        required: false,
        default: null,
        description: "Kênh văn bản hoặc vai trò bổ sung"
      }
    ],
    examples: [
      { cmd: ".antilink on", desc: "Bật tính năng chặn mọi đường link web trong server" },
      { cmd: ".antilink off", desc: "Tắt tính năng chặn link" },
      { cmd: ".antilink channel", desc: "Mở menu trực quan chọn chế độ kênh và chọn kênh" },
      { cmd: ".antilink channel mode only", desc: "Cài đặt Anti-Links chỉ quét tại các kênh được chọn" },
      { cmd: ".antilink channel add #chat-chung", desc: "Thêm kênh vào danh sách kiểm duyệt/ngoại lệ" },
      { cmd: ".antilink timeout 10", desc: "Cài đặt cấm chat 10 phút người gửi link" },
      { cmd: ".antilink", desc: "Xem trạng thái hiện tại, chế độ kênh và vai trò miễn trừ" }
    ]
  },
  {
    id: "linkchannel",
    name: "linkchannel",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "⚙️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["linkchannels", "antilinkchannel", "channellink", "kenhlink"],
    badge: "Chế Độ Kênh",
    description: "Cài đặt chế độ chọn kênh (Tất cả / Chỉ định / Bỏ qua) và quản lý danh sách kênh cho Anti-Links.",
    detailed_desc: "Tùy biến phạm vi hoạt động của Anti-Links theo từng kênh cụ thể: Quét toàn bộ máy chủ (all), Chỉ quét tại các kênh được chọn (only), hoặc Quét toàn bộ NGOẠI TRỪ các kênh được chọn (ignore). Hỗ trợ giao diện Menu Dropdown trực quan.",
    prefix_syntax: ".linkchannel <panel|mode|add|remove|list|clear> [#kênh] [all|only|ignore]",
    slash_syntax: "/linkchannel [action: panel|mode|add|remove|list|clear] [channel: #kênh] [mode: all|only|ignore]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Chế độ 'all': Quét & chặn link trên toàn bộ kênh (mặc định)",
      "Chế độ 'only': CHỈ chặn link tại các kênh nằm trong danh sách",
      "Chế độ 'ignore': Chặn link mọi nơi NGOẠI TRỪ các kênh trong danh sách",
      "Hỗ trợ giao diện tương tác Dropdown Menu trực quan trong Discord"
    ],
    parameters: [
      {
        name: "action",
        type: "Literal ('panel', 'mode', 'add', 'remove', 'list', 'clear')",
        required: false,
        default: "panel",
        description: "Hành động: panel (mở giao diện tương tác), mode (đổi chế độ), add (thêm kênh), remove (xóa kênh), list (xem), clear (xóa hết)"
      },
      {
        name: "channel",
        type: "Kênh văn bản (Channel)",
        required: false,
        default: null,
        description: "Kênh văn bản muốn thêm hoặc xóa khỏi danh sách cấu hình"
      },
      {
        name: "mode",
        type: "Literal ('all', 'only', 'ignore')",
        required: false,
        default: null,
        description: "Chế độ áp dụng: all (tất cả kênh), only (chỉ kênh chọn), ignore (bỏ qua kênh chọn)"
      }
    ],
    examples: [
      { cmd: ".linkchannel", desc: "Mở menu tương tác chọn chế độ và chọn kênh trực quan" },
      { cmd: ".linkchannel mode only", desc: "Chuyển sang chế độ chỉ quét các kênh được chọn" },
      { cmd: ".linkchannel mode ignore", desc: "Chuyển sang chế độ bỏ qua (miễn trừ) các kênh được chọn" },
      { cmd: ".linkchannel add #chat-chung", desc: "Thêm kênh #chat-chung vào danh sách cấu hình" },
      { cmd: ".linkchannel remove #chat-chung", desc: "Xóa kênh #chat-chung khỏi danh sách cấu hình" },
      { cmd: ".linkchannel list", desc: "Xem trạng thái chế độ kênh và danh sách kênh hiện tại" }
    ]
  },
  {
    id: "linkbypass",
    name: "linkbypass",
    category: "automod",
    category_name: "Kiểm Duyệt Tự Động (AutoMod)",
    icon: "🔓",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["bypasslink", "antilinkbypass", "whitelistlink"],
    badge: "Whitelist Link",
    description: "Quản lý danh sách vai trò (Role) được phép gửi mọi link web (Bỏ qua Anti-Links).",
    detailed_desc: "Cấp ngoại lệ cho các vai trò tin cậy (như Admin, Mod, VIP, Media, Creator) được tự do chia sẻ đường link web mà không bị hệ thống Anti-Links xóa tin hay xử phạt.",
    prefix_syntax: ".linkbypass <add|remove|list|clear> [@role]",
    slash_syntax: "/linkbypass action: <add|remove|list|clear> [role: @role]",
    permissions: ["Manage Server (Quản lý Máy chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản lý máy chủ (Manage Server)",
      "Hành động 'add' hoặc 'remove' bắt buộc phải truyền tham số role (@role hoặc ID role)",
      "Hành động 'list' hiển thị danh sách vai trò được miễn trừ Anti-Links",
      "Hành động 'clear' xóa trắng toàn bộ danh sách vai trò miễn trừ"
    ],
    parameters: [
      {
        name: "action",
        type: "Literal ('add', 'remove', 'list', 'clear')",
        required: true,
        default: null,
        description: "Hành động: add (thêm), remove (xóa), list (xem danh sách), clear (xóa hết)"
      },
      {
        name: "role",
        type: "Vai trò (Role)",
        required: false,
        default: null,
        description: "Vai trò muốn thêm hoặc xóa khỏi danh sách miễn trừ Anti-Links"
      }
    ],
    examples: [
      { cmd: ".linkbypass add @VIP", desc: "Cho phép role VIP gửi mọi đường link web" },
      { cmd: ".linkbypass remove @VIP", desc: "Hủy quyền miễn trừ gửi link của role VIP" },
      { cmd: ".linkbypass list", desc: "Xem danh sách các vai trò đang được miễn trừ gửi link" }
    ]
  },

  // =========================================================================
  // 4. KINH TẾ & MINIGAME (ECONOMY)
  // =========================================================================
  {
    id: "daily",
    name: "daily",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🎁",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Hồi chiêu 24h",
    description: "Điểm danh hàng ngày nhận phần thưởng từ 150 đến 300 xu miễn phí (hồi chiêu 24 giờ).",
    detailed_desc: "Mỗi 24 giờ một lần, người dùng có thể điểm danh để nhận số xu ngẫu nhiên từ 150 đến 300 xu. Số xu được cộng trực tiếp vào ví toàn cầu.",
    prefix_syntax: ".daily",
    slash_syntax: "/daily",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Thời gian hồi chiêu: Đúng 24 giờ kể từ lần nhận thưởng gần nhất",
      "Nếu chưa đủ 24h, bot sẽ thông báo thời gian còn lại cần chờ"
    ],
    parameters: [],
    examples: [
      { cmd: ".daily", desc: "Điểm danh nhận xu hàng ngày" }
    ],
    embed_preview: {
      title: "🎁 ĐIỂM DANH HÀNG NGÀY THÀNH CÔNG!",
      description: "Bạn đã nhận được **250 xu** may mắn hôm nay!\nSố dư hiện tại: `1,250 xu`",
      color: "#F1C40F",
      footer: "Hãy quay lại sau 24 giờ nữa nhé!"
    }
  },
  {
    id: "coin",
    name: "coin",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🪙",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["balance", "coins", "bal", "vi", "tien"],
    badge: "Ví Toàn Cầu",
    description: "Kiểm tra số dư xu hiện có trong ví cá nhân hoặc xem ví của thành viên khác.",
    detailed_desc: "Hiển thị số xu tích lũy của người dùng. Hệ thống kinh tế được đồng bộ toàn cầu (Global Wallet) nên số dư dùng chung trên tất cả các server có bot.",
    prefix_syntax: ".coin [@user]",
    slash_syntax: "/coin [member: @user]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Nếu không gắn thẻ ai, bot hiển thị ví của chính bạn",
      "Hỗ trợ các lệnh tắt: .bal, .vi, .tien, .coins"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: false,
        default: "Chính bạn",
        description: "Thành viên bạn muốn kiểm tra số dư (để trống để xem của bạn)"
      }
    ],
    examples: [
      { cmd: ".coin", desc: "Xem số xu trong ví của bạn" },
      { cmd: ".bal @Shin", desc: "Xem số xu của Shin bằng alias .bal" }
    ],
    embed_preview: {
      title: "🪙 VÍ XU CÁ NHÂN — Shin",
      description: "Số dư khả dụng: **1,250,000 xu**\nCấp độ hiện tại: **Level 28**",
      color: "#F1C40F",
      footer: "Đồng bộ ví toàn cầu đa server"
    }
  },
  {
    id: "blackjack",
    name: "blackjack",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🃏",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["bj", "xidach"],
    badge: "Hot Minigame",
    description: "Minigame bài Xì Dách (Blackjack 21 điểm) đặt cược xu với giao diện nút bấm tương tác.",
    detailed_desc: "Mô phỏng sòng bài sòng bạc chuyên nghiệp với bộ bài 4 cỗ (shoe), luật lá Ace linh hoạt (1 hoặc 11). Giao diện nút bấm trực quan: Rút bài (Hit 🃏), Dừng (Stand 🛑) và Gấp đôi cược (Double Down 💰). Thắng Blackjack tự nhiên trả thưởng 3:2.",
    prefix_syntax: ".blackjack <số_cược>",
    slash_syntax: "/blackjack bet: <số_cược>",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Mỗi người chơi chỉ được mở 1 ván bài tại một thời điểm (chống trùng lặp)",
      "Mức cược tối thiểu: 10 xu",
      "Hỗ trợ đơn vị cược viết tắt: 1k (=1,000), 500k, 1m (=1,000,000), 2.5m, hoặc 'all' (tất tay)",
      "Số dư trong ví phải lớn hơn hoặc bằng mức cược",
      "Nút Gấp Đôi (Double Down) chỉ khả dụng khi số dư còn đủ để nhân đôi tiền cược và chỉ rút thêm duy nhất 1 lá",
      "Thời gian chờ thao tác: 60 giây, sau 60s tự động coi như Dừng bài"
    ],
    parameters: [
      {
        name: "bet",
        type: "Chuỗi cược (String: vd 50, 5k, 1m, all)",
        required: true,
        default: null,
        description: "Số xu đặt cược (hỗ trợ viết tắt 1k, 1m hoặc all)"
      }
    ],
    examples: [
      { cmd: ".bj 500", desc: "Cược 500 xu ván Blackjack" },
      { cmd: ".blackjack 10k", desc: "Cược 10,000 xu" },
      { cmd: ".bj all", desc: "Tất tay toàn bộ số xu hiện có" }
    ],
    embed_preview: {
      title: "🃏 BLACKJACK — BẠN ĐÃ THẮNG!",
      description: "Bạn đạt Blackjack 21 điểm! Nhận thưởng tỉ lệ 3:2.\n+**15,000 xu**",
      fields: [
        { name: "👤 Bạn — Điểm: `21`", value: "`[A♠]` `[K♦]`", inline: false },
        { name: "🤖 Nhà Cái — Điểm: `19`", value: "`[9♣]` `[10♥]`", inline: false }
      ],
      color: "#57F287",
      footer: "Tiền cược: 10,000 xu • Ván bài đã kết thúc"
    }
  },
  {
    id: "cf",
    name: "cf",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🪙",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["coinflip", "flip"],
    badge: "50/50",
    description: "Minigame tung đồng xu may rủi đặt cược (chọn mặt Ngửa hoặc Sấp).",
    detailed_desc: "Đặt cược vào mặt Ngửa ('ngua') hoặc Sấp ('sap'). Tỉ lệ trúng 50/50. Nếu đoán đúng, bạn nhận lại gấp đôi tiền cược (1:1). Kèm hiệu ứng hoạt họa tung đồng xu sinh động.",
    prefix_syntax: ".cf <ngua|sap> <số_cược>",
    slash_syntax: "/cf choice: <ngua|sap> bet: <số_cược>",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Lựa chọn bắt buộc: 'ngua' (Mặt Ngửa) hoặc 'sap' (Mặt Sấp)",
      "Mức cược tối thiểu: 10 xu",
      "Hỗ trợ viết tắt số tiền: 1k, 500k, 1m, all",
      "Số dư phải lớn hơn hoặc bằng số tiền cược"
    ],
    parameters: [
      {
        name: "choice",
        type: "Literal ('ngua', 'sap')",
        required: true,
        default: null,
        description: "Lựa chọn mặt đồng xu: ngua (Ngửa) hoặc sap (Sấp)"
      },
      {
        name: "bet",
        type: "Chuỗi cược (vd: 50, 5k, 1m, all)",
        required: true,
        default: null,
        description: "Số xu đặt cược"
      }
    ],
    examples: [
      { cmd: ".cf ngua 100", desc: "Cược 100 xu vào mặt Ngửa" },
      { cmd: ".coinflip sap 5k", desc: "Cược 5,000 xu vào mặt Sấp" },
      { cmd: "/cf choice: ngua bet: 1m", desc: "Cược 1 triệu xu vào mặt Ngửa" }
    ],
    embed_preview: {
      title: "🪙 KẾT QUẢ TUNG ĐỒNG XU: MẶT NGỬA",
      description: "Chúc mừng bạn đã đoán chính xác! Bạn nhận được **+10,000 xu**.",
      color: "#57F287",
      footer: "Lựa chọn của bạn: Ngửa • Tiền cược: 5,000 xu"
    }
  },
  {
    id: "gb",
    name: "gb",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🎲",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["gamble", "bet"],
    badge: "Jackpot 3x",
    description: "Minigame thử vận may cá cược số xu bằng xúc xắc may mắn (tỉ lệ trúng thưởng lên đến x3).",
    detailed_desc: "Hệ thống lắc xúc xắc ngẫu nhiên từ 1 đến 100 điểm:\n• 1 - 49 điểm: Thua sạch tiền cược\n• 50 - 84 điểm: Thắng 1.5x tiền cược\n• 85 - 98 điểm: Thắng 2x tiền cược\n• 99 - 100 điểm: Nổ Jackpot thắng 3x tiền cược!",
    prefix_syntax: ".gb <số_cược>",
    slash_syntax: "/gb bet: <số_cược>",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Mức cược tối thiểu: 10 xu",
      "Hỗ trợ tiền cược viết tắt: 1k, 500k, 1m, all",
      "Số dư tài khoản phải đủ để đặt cược"
    ],
    parameters: [
      {
        name: "bet",
        type: "Chuỗi cược (vd: 50, 5k, 1m, all)",
        required: true,
        default: null,
        description: "Số xu đặt cược"
      }
    ],
    examples: [
      { cmd: ".gb 200", desc: "Thử vận may với 200 xu" },
      { cmd: ".gamble 10k", desc: "Cược 10,000 xu" },
      { cmd: ".gb all", desc: "Tất tay vận may" }
    ]
  },
  {
    id: "mine",
    name: "mine",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "💣",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["mines", "gobom", "dòmin", "domin"],
    badge: "Siêu Hot",
    description: "Minigame Gỡ Bom (Mines) 4x5 ô. Lật mở kim cương tăng cấp số nhân và rút thưởng an toàn.",
    detailed_desc: "Bàn chơi 20 ô (4 hàng x 5 cột) chứa 17 viên kim cương 💎 và 3 quả bom ngầm 💣. Càng mở nhiều kim cương, hệ số nhân tiền thưởng càng tăng vọt (1.1x -> 1.3x -> 1.6x -> 2.0x -> 2.5x -> 3.2x... lên tới hơn 15x). Người chơi có thể bấm nút Rút Thưởng 💰 bất cứ lúc nào để bảo toàn số xu!",
    prefix_syntax: ".mine <số_cược>",
    slash_syntax: "/mine bet: <số_cược>",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Mỗi người chơi chỉ được mở 1 bàn cược tại một thời điểm",
      "Mức cược tối thiểu: 10 xu",
      "Hỗ trợ tiền cược viết tắt: 1k, 500k, 1m, all",
      "Chỉ người tạo ván mới có thể bấm nút lật ô và rút thưởng",
      "Nếu bấm trúng bom 💣: Mất toàn bộ tiền cược",
      "Thời gian chờ thao tác tối đa 90 giây, quá giờ tự động kết thúc ván"
    ],
    parameters: [
      {
        name: "bet",
        type: "Chuỗi cược (vd: 50, 5k, 1m, all)",
        required: true,
        default: null,
        description: "Số xu đặt cược"
      }
    ],
    examples: [
      { cmd: ".mine 100", desc: "Mở bàn gỡ bom cược 100 xu" },
      { cmd: ".gobom 5k", desc: "Cược 5,000 xu gỡ bom bằng alias .gobom" }
    ],
    embed_preview: {
      title: "💣 GỠ BOM (MINES) — HỆ SỐ: 2.5x",
      description: "Đã mở an toàn: **5 Kim Cương 💎**\nTiền thưởng hiện tại: **25,000 xu** (Gốc 10,000 xu)",
      color: "#00D2FF",
      footer: "Bấm [Rút Thưởng 💰] để lấy xu hoặc tiếp tục mở ô!"
    }
  },
  {
    id: "givecoin",
    name: "givecoin",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "💸",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["pay", "chuyenxu"],
    badge: "Chuyển Xu",
    description: "Chuyển tặng số xu từ ví của bạn cho một thành viên khác trong server.",
    detailed_desc: "Cho phép chuyển nhượng số dư xu an toàn. Hệ thống tự động kiểm tra số dư và trừ tiền người gửi, cộng tiền người nhận ngay lập tức.",
    prefix_syntax: ".givecoin <@user> <số_xu>",
    slash_syntax: "/givecoin member: <@user> amount: <số_xu>",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Không thể tự chuyển tiền cho chính bản thân",
      "Không thể chuyển tiền cho tài khoản Bot",
      "Số xu chuyển tối thiểu: 10 xu",
      "Hỗ trợ viết tắt: 1k, 500k, 1m, all",
      "Người gửi phải có đủ số dư trong ví"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Người nhận xu (tag @user)"
      },
      {
        name: "amount",
        type: "Chuỗi số lượng (vd: 100, 5k, 1m, all)",
        required: true,
        default: null,
        description: "Số lượng xu muốn tặng"
      }
    ],
    examples: [
      { cmd: ".givecoin @Shin 5000", desc: "Tặng Shin 5,000 xu" },
      { cmd: "/givecoin member: @Friend amount: 1m", desc: "Chuyển 1 triệu xu qua Slash command" }
    ]
  },
  {
    id: "top",
    name: "top",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🏆",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["leaderboard", "lb", "bxh"],
    badge: "BXH",
    description: "Xem bảng xếp hạng Top 10 đại gia xu giàu nhất (Server hiện tại hoặc Toàn cầu).",
    detailed_desc: "Hiển thị bảng vinh danh Top 10 thành viên sở hữu số xu lớn nhất kèm cấp độ Level và thứ hạng, hỗ trợ lọc theo phạm vi server hoặc toàn cầu (mọi server bot tham gia).",
    prefix_syntax: ".top [server|global]",
    slash_syntax: "/top [scope: server|global]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Phạm vi hiển thị: 'server' (chỉ thành viên trong máy chủ này) hoặc 'global' (toàn cầu, mặc định là server)"
    ],
    parameters: [
      {
        name: "scope",
        type: "Literal ('server', 'global')",
        required: false,
        default: "server",
        description: "Chọn bảng xếp hạng: server (máy chủ này) hoặc global (toàn bộ máy chủ)"
      }
    ],
    examples: [
      { cmd: ".top", desc: "Xem bảng xếp hạng Top 10 server này" },
      { cmd: ".bxh global", desc: "Xem Top 10 toàn cầu bằng alias .bxh" },
      { cmd: "/top scope: global", desc: "Xem qua Slash command" }
    ],
    embed_preview: {
      title: "🏆 TOP 10 ĐẠI GIA XU — TOÀN CẦU",
      description: "🥇 **1. Shin** — `15,400,000 xu` (Lv. 65)\n🥈 **2. Dragon** — `8,200,000 xu` (Lv. 42)\n🥉 **3. Luna** — `5,100,000 xu` (Lv. 38)",
      color: "#F1C40F",
      footer: "Bảng xếp hạng cập nhật theo thời gian thực"
    }
  },
  {
    id: "setlevelchannel",
    name: "setlevelchannel",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "📣",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["setlvlchannel"],
    badge: "Admin",
    description: "Cài đặt kênh gửi thông báo chúc mừng thăng cấp Level của thành viên.",
    detailed_desc: "Khi thành viên đạt đủ điểm EXP để lên cấp mới qua việc chat, bot sẽ gửi tin nhắn chúc mừng kèm cấp độ mới vào kênh được chỉ định. Nếu để trống kênh, bot sẽ gửi thông báo ngay tại kênh thành viên vừa chat.",
    prefix_syntax: ".setlevelchannel [#kênh]",
    slash_syntax: "/setlevelchannel [channel: #kênh]",
    permissions: ["Administrator (Quản trị viên)"],
    perm_level: "admin",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản trị viên (Administrator)",
      "Để trống tham số kênh để hủy kênh thông báo riêng"
    ],
    parameters: [
      {
        name: "channel",
        type: "Kênh văn bản (TextChannel)",
        required: false,
        default: "Kênh hiện tại khi chat",
        description: "Kênh nhận thông báo thăng cấp (để trống nếu muốn hủy kênh riêng)"
      }
    ],
    examples: [
      { cmd: ".setlevelchannel #level-up", desc: "Đặt kênh #level-up làm kênh báo thăng cấp" },
      { cmd: ".setlevelchannel", desc: "Hủy kênh riêng, gửi tại kênh chat" }
    ]
  },
  {
    id: "levelnotify",
    name: "levelnotify",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🔔",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["levelnotif", "setlevelnotify", "togglelevelnotify"],
    badge: "Admin",
    description: "Bật hoặc tắt hoàn toàn thông báo chúc mừng thăng cấp Level trong máy chủ.",
    detailed_desc: "Nếu máy chủ không muốn bị loãng chat bởi thông báo lên cấp, quản trị viên có thể tắt hoàn toàn thông báo này (điểm EXP và Level vẫn tiếp tục được tích lũy bình thường).",
    prefix_syntax: ".levelnotify [on/off]",
    slash_syntax: "/levelnotify [status: on/off]",
    permissions: ["Administrator (Quản trị viên)"],
    perm_level: "admin",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản trị viên (Administrator)",
      "Tham số trạng thái: 'on' (bật), 'off' (tắt), hoặc để trống để tự động đảo ngược trạng thái"
    ],
    parameters: [
      {
        name: "status",
        type: "Literal ('on', 'off', 'bat', 'tat')",
        required: false,
        default: "Đảo ngược",
        description: "Lựa chọn: on (bật), off (tắt), hoặc để trống để chuyển đổi"
      }
    ],
    examples: [
      { cmd: ".levelnotify off", desc: "Tắt thông báo lên cấp" },
      { cmd: ".levelnotify on", desc: "Bật lại thông báo lên cấp" }
    ]
  },

    {
    id: "levelroles",
    name: "levelroles",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🎖️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["setuplevelroles", "rankroles", "levelrolesetup"],
    badge: "Quản Trị Rank",
    description: "Mở bảng điều khiển tương tác (Dashboard) thiết lập vai trò thưởng theo cấp độ (Level Roles).",
    detailed_desc: "Giao diện trực quan với Select Menu và các nút bấm quản lý vai trò theo mốc cấp độ. Cho phép cấu hình danh sách vai trò thưởng, đổi chế độ nhận vai trò (Cộng dồn hoặc Thay thế mốc cao nhất), và đồng bộ hóa vai trò cho toàn bộ thành viên.",
    prefix_syntax: ".levelroles",
    slash_syntax: "/levelroles",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản Lý Máy Chủ (Manage Guild)",
      "Bot cần có quyền Quản Lý Vai Trò (Manage Roles) để trao vai trò khi thành viên thăng cấp",
      "Vai trò của Bot phải nằm trên các vai trò cần trao thưởng trong Cài đặt máy chủ"
    ],
    parameters: [],
    examples: [
      { cmd: ".levelroles", desc: "Mở bảng điều khiển vai trò Level dạng Prefix" },
      { cmd: "/levelroles", desc: "Mở bảng điều khiển vai trò Level dạng Slash Command" }
    ],
    embed_preview: {
      title: "🎖️ THIẾT LẬP VAI TRÒ THEO CẤP ĐỘ (LEVEL ROLES)",
      description: "Cấu hình danh sách vai trò sẽ tự động trao cho thành viên khi đạt các mốc cấp độ.\n\n**Chế độ hiện tại:** 🎯 Thay Thế (Replace)\n\n• **Level 5:** @Tập Sự\n• **Level 10:** @Chiến Binh\n• **Level 20:** @Bậc Thầy\n• **Level 50:** @Huyền Thoại",
      color: "#F1C40F",
      footer: "Hệ Thống Thưởng Cấp Độ Leveling • Discord Bot"
    }
  },
  {
    id: "levelrole",
    name: "levelrole",
    category: "economy",
    category_name: "Kinh Tế & Minigame",
    icon: "🏅",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["lvlrole", "rankrole"],
    badge: "Bộ Lệnh Rank",
    description: "Hệ thống lệnh quản lý vai trò thưởng theo cấp độ: panel, add, remove, list, mode, sync.",
    detailed_desc: "Bộ lệnh con đầy đủ quản trị Level Roles: gán vai trò vào mốc level (add), gỡ vai trò (remove), xem danh sách (list), đổi chế độ cộng dồn hay thay thế (mode), đồng bộ lại toàn bộ thành viên (sync), hoặc mở bảng điều khiển (panel).",
    prefix_syntax: ".levelrole <panel|add|remove|list|mode|sync> [tham số]",
    slash_syntax: "/levelrole <action>",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "manage_guild",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Yêu cầu quyền Quản Lý Máy Chủ (Manage Guild)",
      "Bot cần quyền Quản Lý Vai Trò (Manage Roles)",
      "Mốc cấp độ phải lớn hơn hoặc bằng 1",
      "Không thể gán vai trò @everyone hoặc vai trò tích hợp hệ thống/bot"
    ],
    parameters: [
      {
        name: "action / subcommand",
        type: "Lựa chọn (panel, add, remove, list, mode, sync)",
        required: true,
        default: "panel",
        description: "Hành động muốn thực hiện: panel, add, remove, list, mode, sync"
      },
      {
        name: "level",
        type: "Số nguyên (Integer >= 1)",
        required: false,
        default: null,
        description: "Mốc cấp độ áp dụng (dành cho lệnh add, remove)"
      },
      {
        name: "role",
        type: "Vai trò (Role)",
        required: false,
        default: null,
        description: "Vai trò trao thưởng khi đạt mốc level (dành cho lệnh add)"
      },
      {
        name: "setting",
        type: "Lựa chọn: stack / replace",
        required: false,
        default: null,
        description: "Chế độ nhận vai trò: stack (cộng dồn) hoặc replace (chỉ giữ mốc cao nhất)"
      }
    ],
    examples: [
      { cmd: ".levelrole panel", desc: "Mở bảng menu quản lý trực quan" },
      { cmd: ".levelrole add 5 @Thành Viên Thân Thiết", desc: "Gán vai trò @Thành Viên Thân Thiết cho Level 5" },
      { cmd: ".levelrole remove 5", desc: "Xóa vai trò thưởng của Level 5" },
      { cmd: ".levelrole mode replace", desc: "Chuyển sang chế độ chỉ giữ vai trò cấp cao nhất" },
      { cmd: ".levelrole sync", desc: "Quét và gán lại vai trò cho mọi thành viên theo cấp hiện tại" }
    ],
    embed_preview: {
      title: "✅ ĐÃ THÊM VAI TRÒ THƯỞNG LEVEL",
      description: "Thành viên khi đạt **Level 10** sẽ được tự động trao vai trò **@Chiến Binh**!",
      color: "#57F287",
      footer: "Cấu hình vai trò cấp độ • Shin Bot"
    }
  },

  // =========================================================================
  // 5. ÂM NHẠC VOICE CHANNEL (MUSIC)
  // =========================================================================
  {
    id: "play",
    name: "play",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🎵",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["p"],
    badge: "Voice Core",
    description: "Tìm kiếm và phát nhạc chất lượng cao từ YouTube qua kênh thoại (Voice Channel).",
    detailed_desc: "Tìm kiếm theo từ khóa hoặc đường link YouTube (hỗ trợ trích xuất luồng âm thanh tốt nhất 192k qua yt-dlp & FFmpeg). Nếu bot đang phát bài khác, bài hát sẽ tự động được thêm vào danh sách chờ (Queue).",
    prefix_syntax: ".play <tên bài hoặc link>",
    slash_syntax: "/play query: <tên bài hoặc link>",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người dùng bắt buộc phải đang ở trong một Kênh Thoại (Voice Channel)",
      "Bot phải có quyền 'Connect' (Kết nối) và 'Speak' (Nói) trong Kênh Thoại đó",
      "Nếu bot đang ở một phòng thoại khác, người dùng phải ở cùng phòng thoại với bot",
      "Từ khóa hoặc liên kết tìm kiếm không được để trống"
    ],
    parameters: [
      {
        name: "query",
        type: "Chuỗi từ khóa hoặc URL YouTube (String)",
        required: true,
        default: null,
        description: "Tên bài hát cần tìm kiếm hoặc đường link YouTube trực tiếp"
      }
    ],
    examples: [
      { cmd: ".play see you again", desc: "Tìm kiếm và phát bài See You Again" },
      { cmd: ".play https://www.youtube.com/watch?v=...", desc: "Phát trực tiếp từ liên kết YouTube" },
      { cmd: "/play query: lofi hip hop radio", desc: "Phát qua Slash command" }
    ],
    embed_preview: {
      title: "🎵 ĐÃ THÊM VÀO DANH SÁCH PHÁT",
      description: "**See You Again — Wiz Khalifa ft. Charlie Puth**\nThời lượng: `03:49` • Người yêu cầu: **Shin**",
      color: "#1DB954",
      footer: "Vị trí trong hàng đợi: #1"
    }
  },
  {
    id: "volume",
    name: "volume",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔊",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["vol"],
    badge: "",
    description: "Điều chỉnh âm lượng phòng nhạc từ 1% đến 100%.",
    detailed_desc: "Điều chỉnh âm lượng luồng âm thanh đang phát trong phòng thoại qua bộ biến đổi PCM Transformer.",
    prefix_syntax: ".volume <1-100>",
    slash_syntax: "/volume percent: <1-100>",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang phát nhạc trong phòng thoại",
      "Người dùng phải ở cùng phòng thoại với bot",
      "Mức âm lượng hợp lệ: Từ 1 đến 100"
    ],
    parameters: [
      {
        name: "percent",
        type: "Số nguyên (Integer: 1-100)",
        required: true,
        default: null,
        description: "Mức âm lượng mong muốn từ 1 đến 100"
      }
    ],
    examples: [
      { cmd: ".volume 50", desc: "Chỉnh âm lượng về 50%" },
      { cmd: ".vol 80", desc: "Chỉnh âm lượng về 80% bằng alias .vol" }
    ]
  },
  {
    id: "loop",
    name: "loop",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔁",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["repeat"],
    badge: "",
    description: "Cài đặt chế độ lặp lại bài hát hiện tại hoặc lặp lại toàn bộ hàng đợi.",
    detailed_desc: "Cho phép chọn 1 trong 3 chế độ phát lặp: Tắt lặp ('off'), Lặp lại bài hát hiện tại ('song'), hoặc Lặp lại toàn bộ danh sách phát ('queue').",
    prefix_syntax: ".loop <off|song|queue>",
    slash_syntax: "/loop mode: <off|song|queue>",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang phát nhạc trong phòng thoại",
      "Người dùng phải ở cùng phòng thoại với bot",
      "Chế độ hợp lệ: 'off', 'song', 'queue'"
    ],
    parameters: [
      {
        name: "mode",
        type: "Literal ('off', 'song', 'queue')",
        required: true,
        default: null,
        description: "Chế độ lặp: off (tắt), song (lặp bài này), queue (lặp danh sách)"
      }
    ],
    examples: [
      { cmd: ".loop song", desc: "Lặp lại bài hát đang phát" },
      { cmd: ".loop queue", desc: "Lặp lại cả hàng đợi" },
      { cmd: ".loop off", desc: "Tắt chế độ lặp lại" }
    ]
  },
  {
    id: "shuffle",
    name: "shuffle",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔀",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "",
    description: "Xáo trộn ngẫu nhiên thứ tự các bài hát trong hàng đợi phát nhạc.",
    detailed_desc: "Thuật toán xáo trộn ngẫu nhiên toàn bộ các bài hát đang chờ trong danh sách hàng đợi (Queue).",
    prefix_syntax: ".shuffle",
    slash_syntax: "/shuffle",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Hàng đợi phải có ít nhất 2 bài hát đang chờ",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".shuffle", desc: "Xáo trộn thứ tự bài hát trong danh sách chờ" }
    ]
  },
  {
    id: "pause",
    name: "pause",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⏸️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "",
    description: "Tạm dừng bài hát đang phát trong phòng thoại.",
    detailed_desc: "Tạm dừng âm thanh mà không ngắt kết nối khỏi phòng thoại. Dùng .resume để tiếp tục.",
    prefix_syntax: ".pause",
    slash_syntax: "/pause",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang phát nhạc và chưa bị tạm dừng",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".pause", desc: "Tạm dừng bài hát" }
    ]
  },
  {
    id: "resume",
    name: "resume",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "▶️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "",
    description: "Tiếp tục phát bài hát đã tạm dừng trước đó.",
    detailed_desc: "Phục hồi phát nhạc sau khi đã dùng lệnh .pause.",
    prefix_syntax: ".resume",
    slash_syntax: "/resume",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang trong trạng thái tạm dừng (Paused)",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".resume", desc: "Tiếp tục phát nhạc" }
    ]
  },
  {
    id: "skip",
    name: "skip",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⏭️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["next"],
    badge: "",
    description: "Bỏ qua bài hát hiện tại để chuyển sang phát bài tiếp theo trong hàng đợi.",
    detailed_desc: "Ngắt bài hát hiện tại và tự động nạp bài hát kế tiếp từ danh sách chờ. Nếu hết bài, bot sẽ dừng.",
    prefix_syntax: ".skip",
    slash_syntax: "/skip",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang phát nhạc trong phòng thoại",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".skip", desc: "Chuyển bài hát tiếp theo" }
    ]
  },
  {
    id: "queue",
    name: "queue",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "📜",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["q"],
    badge: "",
    description: "Xem danh sách hàng đợi các bài hát đang chờ phát.",
    detailed_desc: "Hiển thị danh sách thứ tự các bài hát trong hàng đợi, kèm thời lượng từng bài và người yêu cầu.",
    prefix_syntax: ".queue",
    slash_syntax: "/queue",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang tham gia phòng thoại"
    ],
    parameters: [],
    examples: [
      { cmd: ".queue", desc: "Xem danh sách bài hát chờ phát" }
    ]
  },
  {
    id: "nowplaying",
    name: "nowplaying",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🎧",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["np"],
    badge: "Tiến Trình",
    description: "Xem thông tin bài hát đang phát kèm thanh thời lượng tiến trình sinh động.",
    detailed_desc: "Hiển thị chi tiết bài hát đang phát: Tiêu đề, Tác giả, Thời lượng, Thanh tiến trình trực quan [🔘▬▬▬▬▬▬▬▬▬], Người yêu cầu bài hát, Mức âm lượng và Chế độ lặp.",
    prefix_syntax: ".nowplaying",
    slash_syntax: "/nowplaying",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang phát một bài hát"
    ],
    parameters: [],
    examples: [
      { cmd: ".nowplaying", desc: "Xem chi tiết bài hát đang nghe" },
      { cmd: ".np", desc: "Xem nhanh bằng alias .np" }
    ],
    embed_preview: {
      title: "🎧 ĐANG PHÁT NHẠC",
      description: "**See You Again — Wiz Khalifa ft. Charlie Puth**\n\n`01:24` 🔘▬▬▬▬▬▬▬▬▬▬ `03:49`\n\n🔊 Âm lượng: `100%` • 🔁 Lặp: `Tắt` • 👤 Yêu cầu: **Shin**",
      color: "#1DB954",
      footer: "Chất lượng âm thanh 192kbps • FFmpeg Engine"
    }
  },
  {
    id: "stop",
    name: "stop",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⏹️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["disconnect", "dc", "leave"],
    badge: "",
    description: "Dừng phát toàn bộ nhạc, xóa sạch hàng đợi và bot rời khỏi phòng thoại.",
    detailed_desc: "Dừng nhạc hoàn toàn, dọn sạch dữ liệu hàng đợi và ngắt kết nối của bot khỏi kênh thoại. Ngoài ra bot cũng có cơ chế tự động rời phòng sau 3 phút không hoạt động hoặc khi tất cả thành viên đã rời phòng.",
    prefix_syntax: ".stop",
    slash_syntax: "/stop",
    permissions: ["Tất cả thành viên trong Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Bot phải đang kết nối trong phòng thoại",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".stop", desc: "Dừng phát nhạc và cho bot rời phòng thoại" }
    ]
  },

    {
    id: "playtop",
    name: "playtop",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔝",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["pt"],
    badge: "Ưu Tiên",
    description: "Thêm bài hát lên ngay đầu hàng đợi để phát tiếp theo ngay sau bài hiện tại.",
    detailed_desc: "Tìm kiếm bài hát từ tên bài hoặc link YouTube và chèn thẳng vào vị trí số #1 của danh sách chờ, ưu tiên phát ngay khi bài đang phát kết thúc mà không làm gián đoạn bài hiện tại.",
    prefix_syntax: ".playtop <tên bài hát | link YouTube>",
    slash_syntax: "/playtop query: <tên bài hát | link YouTube>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người dùng phải đang ở trong một kênh thoại (Voice Channel)",
      "Nếu bot đang trong phòng thoại khác, người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [
      {
        name: "query",
        type: "Tên bài hát hoặc URL YouTube",
        required: true,
        default: null,
        description: "Tên bài hát cần tìm hoặc link YouTube / Spotify"
      }
    ],
    examples: [
      { cmd: ".playtop Nơi Này Có Anh", desc: "Ưu tiên phát bài 'Nơi Này Có Anh' tiếp theo" },
      { cmd: ".pt https://youtube.com/watch?v=...", desc: "Chèn link YouTube lên đầu danh sách chờ" }
    ],
    embed_preview: {
      title: "🔝 ĐÃ THÊM VÀO ĐẦU HÀNG ĐỢI",
      description: "Đã thêm **[Sơn Tùng M-TP - Nơi Này Có Anh](https://youtube.com)** lên vị trí phát tiếp theo!\n\n⏱️ Thời lượng: `04:20` • Yêu cầu bởi: **Bạn**",
      color: "#1DB954",
      footer: "Âm Nhạc Voice Channel 24/7"
    }
  },
  {
    id: "playskip",
    name: "playskip",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⚡",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ps"],
    badge: "Phát Nhanh",
    description: "Thêm bài hát và lập tức bỏ qua bài đang phát để phát bài mới ngay lập tức.",
    detailed_desc: "Chèn bài hát mới vào đầu hàng đợi và tự động ngắt bài đang phát để phát ngay bài mới yêu cầu mà không phải gõ 2 lệnh play và skip riêng biệt.",
    prefix_syntax: ".playskip <tên bài hát | link YouTube>",
    slash_syntax: "/playskip query: <tên bài hát | link YouTube>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người dùng phải đang ở trong phòng Voice Channel",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [
      {
        name: "query",
        type: "Tên bài hát hoặc URL YouTube",
        required: true,
        default: null,
        description: "Tên bài hát cần tìm hoặc link YouTube"
      }
    ],
    examples: [
      { cmd: ".playskip Chúng Ta Của Tương Lai", desc: "Bỏ qua bài hiện tại và phát ngay bài mới" },
      { cmd: "/playskip query: Cắt Đôi Nỗi Sầu", desc: "Phát nhanh bài mới qua Slash command" }
    ],
    embed_preview: {
      title: "⚡ PHÁT NGAY LẬP TỨC",
      description: "Đã bỏ qua bài trước và đang phát: **[Chúng Ta Của Tương Lai](https://youtube.com)**",
      color: "#1DB954",
      footer: "Âm Nhạc Voice Channel 24/7"
    }
  },
  {
    id: "search",
    name: "search",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔎",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["find"],
    badge: "Top 5 Kết Quả",
    description: "Tìm kiếm bài hát và chọn từ menu tương tác top 5 kết quả YouTube hàng đầu.",
    detailed_desc: "Tìm kiếm từ khóa trên YouTube và mở menu chọn tương tác (Select Menu) với 5 kết quả phù hợp nhất kèm thời lượng và tên kênh nghệ sĩ để bạn chọn chính xác bản nhạc mong muốn.",
    prefix_syntax: ".search <từ khóa tìm kiếm>",
    slash_syntax: "/search query: <từ khóa>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người dùng phải đang kết nối vào một phòng thoại Voice",
      "Menu chọn bài sẽ tự động hết hạn sau 60 giây"
    ],
    parameters: [
      {
        name: "query",
        type: "Từ khóa tìm kiếm (String)",
        required: true,
        default: null,
        description: "Tên bài hát, ca sĩ hoặc từ khóa cần tìm"
      }
    ],
    examples: [
      { cmd: ".search Lofi Chill Buồn", desc: "Xem top 5 kết quả nhạc lofi chill trên YouTube" },
      { cmd: "/search query: Alan Walker", desc: "Tìm kiếm nhạc Alan Walker qua Slash command" }
    ],
    embed_preview: {
      title: "🔎 KẾT QUẢ TÌM KIẾM YOUTUBE",
      description: "Chọn bài hát bạn muốn phát từ danh sách bên dưới:\n\n1. **Lofi Chill Buồn 2024** `[03:45]`\n2. **Đêm Nằm Mơ Phố (Lofi)** `[04:12]`\n3. **Mưa Tháng Sáu (Chill ver)** `[03:50]`\n4. **Ghé Qua (Acoustic Lofi)** `[04:05]`\n5. **Một Bước Yêu Vạn Dặm Đau** `[05:15]`",
      color: "#1DB954",
      footer: "Chọn số từ Menu thả xuống bên dưới"
    }
  },
  {
    id: "skipto",
    name: "skipto",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⏭️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["st"],
    badge: "Nhảy Bài",
    description: "Chuyển trực tiếp tới bài hát số N trong danh sách hàng đợi.",
    detailed_desc: "Bỏ qua toàn bộ các bài hát đứng trước và bắt đầu phát ngay bài hát tại vị trí số N trong danh sách chờ, giúp tiết kiệm thời gian gõ skip nhiều lần.",
    prefix_syntax: ".skipto <số thứ tự>",
    slash_syntax: "/skipto index: <số thứ tự>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Bot phải đang phát nhạc và có bài hát trong hàng đợi",
      "Vị trí bài hát N phải hợp lệ (từ 1 đến tổng số bài đang chờ)",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [
      {
        name: "index",
        type: "Số nguyên (Integer: 1, 2, 3...)",
        required: true,
        default: null,
        description: "Vị trí bài hát trong danh sách chờ muốn chuyển tới"
      }
    ],
    examples: [
      { cmd: ".skipto 3", desc: "Chuyển thẳng tới bài hát số #3 trong hàng đợi" },
      { cmd: "/skipto index: 5", desc: "Nhảy tới bài số #5 qua Slash command" }
    ],
    embed_preview: {
      title: "⏭️ ĐÃ CHUYỂN BÀI HÁT",
      description: "Đã chuyển thẳng tới bài số **#3**: **[Vũ - Lạ Lùng](https://youtube.com)**!",
      color: "#1DB954",
      footer: "Âm Nhạc Voice Channel 24/7"
    }
  },
  {
    id: "previous",
    name: "previous",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⏮️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["prev", "back"],
    badge: "Bài Trước",
    description: "Phát lại bài hát vừa phát trước đó từ lịch sử nghe nhạc.",
    detailed_desc: "Truy xuất danh sách lịch sử phát nhạc gần nhất của phòng thoại và cho phát lại bài hát vừa nghe trước bài hiện tại.",
    prefix_syntax: ".previous",
    slash_syntax: "/previous",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Phải có bài hát trong lịch sử vừa phát gần đây",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".previous", desc: "Phát lại bài hát trước đó" },
      { cmd: ".prev", desc: "Dùng bí danh rút gọn .prev hoặc .back" }
    ],
    embed_preview: {
      title: "⏮️ PHÁT LẠI BÀI TRƯỚC ĐÓ",
      description: "Đang phát lại từ lịch sử: **[Đen - Nấu Ăn Cho Em](https://youtube.com)**",
      color: "#1DB954",
      footer: "Lịch sử nghe nhạc • Discord Bot"
    }
  },
  {
    id: "replay",
    name: "replay",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔄",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["restart"],
    badge: "Phát Lại",
    description: "Phát lại bài hát hiện tại từ đầu (mốc 00:00).",
    detailed_desc: "Tua lại bài hát đang phát về mốc 0 giây ban đầu để nghe lại từ đầu mà không cần phải gõ lại link hay tìm kiếm bài.",
    prefix_syntax: ".replay",
    slash_syntax: "/replay",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Bot phải đang phát một bài hát trong phòng thoại",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".replay", desc: "Phát lại bài hát hiện tại từ đầu (00:00)" },
      { cmd: ".restart", desc: "Dùng bí danh .restart" }
    ],
    embed_preview: {
      title: "🔄 PHÁT LẠI TỪ ĐẦU",
      description: "Đã bắt đầu phát lại bài hát hiện tại từ đầu (00:00)!",
      color: "#57F287",
      footer: "Âm Nhạc Voice Channel 24/7"
    }
  },
  {
    id: "seek",
    name: "seek",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "⏩",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Tua Thời Gian",
    description: "Tua bài hát tới thời điểm cụ thể (ví dụ: 1:30, 02:45 hoặc số giây).",
    detailed_desc: "Điều chỉnh vị trí phát của bài hát tới bất kỳ mốc thời gian nào mong muốn trong bài hát. Hỗ trợ định dạng mm:ss, hh:mm:ss hoặc số giây nguyên.",
    prefix_syntax: ".seek <thời điểm: 1:30 hoặc 90>",
    slash_syntax: "/seek timestamp: <1:30>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Bot phải đang phát một bài hát",
      "Thời điểm tua tới không được vượt quá tổng thời lượng bài hát",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [
      {
        name: "timestamp",
        type: "Chuỗi thời gian (String: ví dụ 1:30, 02:45 hoặc số giây 90)",
        required: true,
        default: null,
        description: "Thời điểm cần tua tới trong bài hát"
      }
    ],
    examples: [
      { cmd: ".seek 1:30", desc: "Tua bài hát tới 1 phút 30 giây" },
      { cmd: ".seek 90", desc: "Tua bài hát tới giây thứ 90" }
    ],
    embed_preview: {
      title: "⏩ ĐÃ TUA THỜI GIAN",
      description: "Đã tua bài hát tới thời điểm **`01:30`**!",
      color: "#1DB954",
      footer: "Âm Nhạc Voice Channel 24/7"
    }
  },
  {
    id: "remove",
    name: "remove",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🗑️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["rm"],
    badge: "Xóa Bài",
    description: "Xóa một bài hát ra khỏi hàng đợi bằng số thứ tự.",
    detailed_desc: "Gỡ bỏ bài hát không mong muốn ra khỏi danh sách chờ dựa trên số thứ tự hiển thị trong lệnh .queue.",
    prefix_syntax: ".remove <số thứ tự>",
    slash_syntax: "/remove index: <số thứ tự>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Phải có bài hát trong hàng đợi chờ phát",
      "Số thứ tự index phải nằm trong phạm vi danh sách hàng đợi",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [
      {
        name: "index",
        type: "Số nguyên (Integer: 1, 2, 3...)",
        required: true,
        default: null,
        description: "Vị trí bài hát trong danh sách chờ cần xóa"
      }
    ],
    examples: [
      { cmd: ".remove 2", desc: "Xóa bài hát số #2 ra khỏi hàng đợi" },
      { cmd: ".rm 1", desc: "Dùng lệnh rút gọn .rm để xóa bài số 1" }
    ],
    embed_preview: {
      title: "🗑️ ĐÃ XÓA KHỎI HÀNG ĐỢI",
      description: "Đã xóa bài hát **[Mono - Waiting For You](https://youtube.com)** khỏi hàng đợi!",
      color: "#57F287",
      footer: "Quản lý hàng đợi nhạc • Discord Bot"
    }
  },
  {
    id: "clearqueue",
    name: "clearqueue",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🧹",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["clearq", "cq"],
    badge: "Dọn Hàng Đợi",
    description: "Xóa toàn bộ bài hát chờ trong hàng đợi (vẫn giữ bài đang phát).",
    detailed_desc: "Làm trống toàn bộ danh sách chờ một cách nhanh chóng mà không làm ngắt quãng bài hát đang phát trong phòng thoại.",
    prefix_syntax: ".clearqueue",
    slash_syntax: "/clearqueue",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Hàng đợi phải có ít nhất 1 bài hát chờ",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".clearqueue", desc: "Xóa toàn bộ bài chờ trong hàng đợi" },
      { cmd: ".cq", desc: "Dùng lệnh viết tắt .cq hoặc .clearq" }
    ],
    embed_preview: {
      title: "🧹 ĐÃ XÓA SẠCH HÀNG ĐỢI",
      description: "Đã xóa sạch toàn bộ **8** bài hát đang chờ trong danh sách hàng đợi!",
      color: "#57F287",
      footer: "Bài hát hiện tại vẫn tiếp tục phát"
    }
  },
  {
    id: "move",
    name: "move",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "↕️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Đổi Vị Trí",
    description: "Di chuyển vị trí của bài hát trong hàng đợi từ vị trí này sang vị trí khác.",
    detailed_desc: "Sắp xếp lại thứ tự ưu tiên các bài hát đang chờ trong danh sách hàng đợi mà không cần xóa đi thêm lại.",
    prefix_syntax: ".move <vị trí cũ> <vị trí mới>",
    slash_syntax: "/move from_pos: <vị trí cũ> to_pos: <vị trí mới>",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Cả hai vị trí from_pos và to_pos phải hợp lệ trong hàng đợi",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [
      {
        name: "from_pos",
        type: "Số nguyên (Integer)",
        required: true,
        default: null,
        description: "Vị trí hiện tại của bài hát trong hàng đợi"
      },
      {
        name: "to_pos",
        type: "Số nguyên (Integer)",
        required: true,
        default: null,
        description: "Vị trí mới muốn chuyển bài hát tới"
      }
    ],
    examples: [
      { cmd: ".move 5 1", desc: "Chuyển bài hát số #5 lên vị trí số #1 để phát tiếp theo" },
      { cmd: "/move from_pos: 4 to_pos: 2", desc: "Đổi vị trí qua Slash Command" }
    ],
    embed_preview: {
      title: "↕️ ĐÃ DI CHUYỂN BÀI HÁT",
      description: "Đã di chuyển bài **[See Tình](https://youtube.com)** từ vị trí `#5` sang `#1`!",
      color: "#57F287",
      footer: "Quản lý hàng đợi nhạc • Discord Bot"
    }
  },
  {
    id: "lyrics",
    name: "lyrics",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "📜",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ly"],
    badge: "Lời Bài Hát",
    description: "Tra cứu lời bài hát (lyrics) hiện tại hoặc theo từ khóa bài hát bất kỳ.",
    detailed_desc: "Tự động tìm kiếm và hiển thị trọn vẹn lời bài hát (Lyrics) của bài hát đang phát hoặc theo tên bài hát và ca sĩ yêu cầu trong bảng Embed Discord.",
    prefix_syntax: ".lyrics [tên bài hát]",
    slash_syntax: "/lyrics [query: tên bài hát]",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [
      "Nếu để trống query, bot phải đang phát nhạc để lấy tên bài hiện tại",
      "Hỗ trợ phân trang nếu lời bài hát quá dài vượt quá giới hạn 4096 ký tự"
    ],
    parameters: [
      {
        name: "query",
        type: "Tên bài hát và ca sĩ (String)",
        required: false,
        default: "Bài đang phát",
        description: "Tên bài hát cần tìm lời (để trống để tra bài đang phát)"
      }
    ],
    examples: [
      { cmd: ".lyrics", desc: "Xem lời của bài hát đang phát trong phòng thoại" },
      { cmd: ".lyrics Nơi Này Có Anh Sơn Tùng", desc: "Tra cứu lời bài 'Nơi Này Có Anh'" }
    ],
    embed_preview: {
      title: "📜 LỜI BÀI HÁT: Nơi Này Có Anh",
      description: "*Em là ai từ đâu bước đến nơi đây dịu dàng chân phương...*\n\n*Thời gian trôi qua mau, em mang theo ngàn nụ cười rạng rỡ...*",
      color: "#5865F2",
      footer: "Tra cứu lời bài hát • Discord Bot"
    }
  },
  {
    id: "radio",
    name: "radio",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "📻",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["lofi"],
    badge: "Radio 24/7",
    description: "Bật đài phát thanh Radio trực tuyến 24/7 theo thể loại (Lofi, Chill, Coffee, Piano, Sleep, V-Pop, Jazz) hoặc link stream.",
    detailed_desc: "Phát luồng Radio trực tuyến chất lượng cao không bao giờ ngừng: Lofi Beats học tập, Chillhop êm dịu, Coffee Shop Jazz, Piano du dương, Deep Sleep ru ngủ, Âm nhạc trẻ V-Pop Việt Nam (VOV3), Smooth Jazz. Hỗ trợ gõ '.radio list' để xem danh sách toàn bộ các kênh đài.",
    prefix_syntax: ".radio [lofi|chill|coffee|piano|sleep|vpop|jazz|list]",
    slash_syntax: "/radio [genre: thể loại]",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong máy chủ (Guild Only)",
      "Người dùng phải đang ở trong một phòng thoại Voice Channel",
      "Luồng âm thanh trực tiếp 24/7 không có điểm dừng"
    ],
    parameters: [
      {
        name: "genre",
        type: "Thể loại (lofi, chill, coffee, piano, sleep, vpop, jazz, list)",
        required: false,
        default: "lofi",
        description: "Thể loại radio hoặc nhập 'list' để xem danh sách tất cả các đài"
      }
    ],
    examples: [
      { cmd: ".radio lofi", desc: "Bật đài Lofi Beats 24/7 thư giãn và học bài" },
      { cmd: ".radio vpop", desc: "Nghe đài phát thanh nhạc trẻ Việt Nam 24/7" },
      { cmd: ".radio piano", desc: "Nghe đài đàn piano nhẹ nhàng du dương" },
      { cmd: ".radio list", desc: "Xem danh sách các kênh radio có sẵn" }
    ],
    embed_preview: {
      title: "📻 ĐÀI PHÁT THANH RADIO 24/7 ONLINE",
      description: "Đang phát sóng: **🎧 Lofi Beats 24/7 (Thư giãn, học tập)**\n\n📡 Trạng thái: **Phát sóng trực tiếp (Live Stream 24/7)**\n🔊 Chất lượng: `192kbps High-Quality Audio`",
      color: "#1DB954",
      footer: "Radio 24/7 Stream • Shin Bot"
    }
  },
  {
    id: "join",
    name: "join",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "🔊",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["connect"],
    badge: "Kết Nối Voice",
    description: "Mời bot tham gia vào phòng Voice Channel của bạn.",
    detailed_desc: "Kết nối bot vào kênh thoại bạn đang đứng để sẵn sàng nghe nhạc hoặc giữ kết nối đàm thoại.",
    prefix_syntax: ".join",
    slash_syntax: "/join",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Người dùng phải đang ở trong một phòng Voice Channel",
      "Bot phải có quyền Kết Nối (Connect) và Nói (Speak) trong phòng thoại đó"
    ],
    parameters: [],
    examples: [
      { cmd: ".join", desc: "Mời bot vào phòng thoại hiện tại của bạn" },
      { cmd: "/join", desc: "Mời bot qua Slash Command" }
    ],
    embed_preview: {
      title: "🔊 ĐÃ VÀO KÊNH THOẠI",
      description: "Đã kết nối thành công vào phòng thoại **Lounge 01**!",
      color: "#57F287",
      footer: "Sẵn sàng phát nhạc • Discord Bot"
    }
  },
  {
    id: "leave",
    name: "leave",
    category: "music",
    category_name: "Âm Nhạc Voice Channel",
    icon: "👋",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["disconnect", "dc"],
    badge: "Rời Voice",
    description: "Yêu cầu bot ngắt kết nối và rời khỏi phòng thoại Voice Channel.",
    detailed_desc: "Cho bot ngắt kết nối và rời khỏi phòng đàm thoại hiện tại, đồng thời xóa sạch hàng đợi âm nhạc của server.",
    prefix_syntax: ".leave",
    slash_syntax: "/leave",
    permissions: ["Thành viên trong kênh Voice"],
    perm_level: "everyone",
    conditions: [
      "Bot phải đang kết nối trong phòng thoại",
      "Người dùng phải ở cùng phòng thoại với bot"
    ],
    parameters: [],
    examples: [
      { cmd: ".leave", desc: "Cho bot rời khỏi phòng thoại" },
      { cmd: ".dc", desc: "Dùng lệnh viết tắt .dc hoặc .disconnect" }
    ],
    embed_preview: {
      title: "👋 ĐÃ RỜI KÊNH THOẠI",
      description: "Đã ngắt kết nối và rời khỏi phòng thoại **Lounge 01**.",
      color: "#ED4245",
      footer: "Đã dọn dẹp hàng đợi • Discord Bot"
    }
  },

  // =========================================================================
  // 6. ĐẶC QUYỀN CHỦ BOT (OWNER)
  // =========================================================================
  {
    id: "backup",
    name: "backup",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "📦",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Bảo Mật DM",
    description: "[Owner] Sao lưu toàn bộ mã nguồn bot thành file .zip gửi qua tin nhắn riêng (DM).",
    detailed_desc: "Đóng gói toàn bộ dự án bot (bao gồm file cấu hình .env, cơ sở dữ liệu bot.db, các script và thư mục cogs) thành tệp .zip nén cao cấp rồi gửi qua tin nhắn riêng cho Owner. Tự động loại trừ các tệp nhị phân lớn (.exe, ffmpeg) và file rác cache để tối ưu kích thước.",
    prefix_syntax: ".backup",
    slash_syntax: "/backup",
    permissions: ["Bot Owner Only (Chỉ Chủ nhân Bot: 1544362205166837801)"],
    perm_level: "owner",
    conditions: [
      "CHỈ DÀNH CHO OWNER BOT (Kiểm tra ID: 1544362205166837801)",
      "BẮT BUỘC THỰC HIỆN TRONG TIN NHẮN RIÊNG (DM) VỚI BOT để bảo mật mã nguồn và token",
      "Dự án cũng tự động kích hoạt sao lưu mỗi ngày vào lúc 08:00 AM (UTC+7)"
    ],
    parameters: [],
    examples: [
      { cmd: ".backup (gõ trong DM bot)", desc: "Sao lưu toàn bộ dự án bot và nhận file zip trong DM" }
    ],
    embed_preview: {
      title: "📦 BẢN SAO LƯU DỰ ÁN BOT THÀNH CÔNG",
      description: "Đã nén thành công toàn bộ mã nguồn và cơ sở dữ liệu SQLite.\n📁 Số tệp: **42 files** • Kích thước nén: **185.4 KB**",
      color: "#57F287",
      footer: "Hệ Thống Tự Động Sao Lưu Dự Án 24/7"
    }
  },
  {
    id: "addcoin",
    name: "addcoin",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "➕",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Owner",
    description: "[Owner] Cộng thêm số xu không giới hạn cho một thành viên bất kỳ.",
    detailed_desc: "Cộng tiền trực tiếp vào ví toàn cầu của thành viên mà không bị giới hạn số lượng. Hỗ trợ các ký hiệu viết tắt như 1k, 500k, 1m.",
    prefix_syntax: ".addcoin <@user> <số_xu>",
    slash_syntax: "/addcoin member: <@user> amount: <số_xu>",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)",
      "Chỉ dùng trong máy chủ (Guild Only)",
      "Hỗ trợ đơn vị viết tắt: 1k, 500k, 1m, 10m"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Thành viên nhận xu"
      },
      {
        name: "amount",
        type: "Chuỗi số lượng (String: vd 100, 500k, 1m)",
        required: true,
        default: null,
        description: "Số xu muốn cộng thêm"
      }
    ],
    examples: [
      { cmd: ".addcoin @Shin 1m", desc: "Cộng 1,000,000 xu cho Shin" }
    ]
  },
  {
    id: "removecoin",
    name: "removecoin",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "➖",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Owner",
    description: "[Owner] Trừ bớt số xu của một người dùng hoặc xóa trắng toàn bộ ví (all).",
    detailed_desc: "Trừ số xu từ ví của thành viên. Hỗ trợ nhập 'all' để đưa số dư ví của thành viên đó về 0 xu ngay lập tức.",
    prefix_syntax: ".removecoin <@user> <số_xu|all>",
    slash_syntax: "/removecoin member: <@user> amount: <số_xu|all>",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)",
      "Chỉ dùng trong máy chủ (Guild Only)",
      "Hỗ trợ: 1k, 1m hoặc 'all' để xóa sạch ví"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Thành viên bị trừ xu"
      },
      {
        name: "amount",
        type: "Chuỗi số lượng (vd: 500k, 1m hoặc all)",
        required: true,
        default: null,
        description: "Số xu muốn trừ bớt hoặc all để xóa sạch"
      }
    ],
    examples: [
      { cmd: ".removecoin @User 500k", desc: "Trừ 500k xu của User" },
      { cmd: ".removecoin @Cheater all", desc: "Tịch thu toàn bộ số xu của kẻ gian lận" }
    ]
  },
  {
    id: "setlevel",
    name: "setlevel",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "⭐",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Owner",
    description: "[Owner] Thiết lập cấp độ Level tùy ý cho một người dùng.",
    detailed_desc: "Điều chỉnh Level của thành viên lên hoặc xuống cấp độ mong muốn. Hệ thống tự động tính toán lại mốc điểm EXP tương ứng với cấp độ mới.",
    prefix_syntax: ".setlevel <@user> <level>",
    slash_syntax: "/setlevel member: <@user> level: <level>",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)",
      "Chỉ dùng trong máy chủ (Guild Only)",
      "Cấp độ mới phải là số nguyên dương lớn hơn hoặc bằng 1"
    ],
    parameters: [
      {
        name: "member",
        type: "Thành viên (Member)",
        required: true,
        default: null,
        description: "Thành viên cần đổi cấp độ"
      },
      {
        name: "level",
        type: "Số nguyên (Integer >= 1)",
        required: true,
        default: null,
        description: "Cấp độ mới muốn thiết lập (từ 1 trở lên)"
      }
    ],
    examples: [
      { cmd: ".setlevel @Shin 50", desc: "Cài đặt Shin lên Level 50" }
    ]
  },
  {
    id: "reload",
    name: "reload",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "🔄",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Zero Downtime",
    description: "[Owner] Tải lại module Cog (tính năng) tức thì mà không cần khởi động lại bot.",
    detailed_desc: "Hot-reload module python cogs ngay trong lúc bot đang chạy (Zero Downtime). Giúp cập nhật sửa lỗi mã nguồn mà không làm gián đoạn các kết nối khác của bot.",
    prefix_syntax: ".reload <tên_cog>",
    slash_syntax: "/reload cog_name: <tên_cog>",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)",
      "Tên module phải hợp lệ (ví dụ: cogs.general, cogs.economy, cogs.music, cogs.automod, cogs.moderation, cogs.owner)"
    ],
    parameters: [
      {
        name: "cog_name",
        type: "Chuỗi tên module (String)",
        required: true,
        default: null,
        description: "Tên module muốn nạp lại (ví dụ: cogs.economy)"
      }
    ],
    examples: [
      { cmd: ".reload cogs.economy", desc: "Tải lại module kinh tế" },
      { cmd: ".reload cogs.music", desc: "Tải lại module âm nhạc" }
    ]
  },
  {
    id: "sync",
    name: "sync",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "⚡",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Owner",
    description: "[Owner] Đồng bộ lại toàn bộ Slash Commands lên Discord Gateway ngay lập tức.",
    detailed_desc: "Cưỡng chế đồng bộ lại toàn bộ cây lệnh Slash Application Command Tree lên máy chủ Discord Gateway để cập nhật ngay các lệnh mới thêm hoặc thay đổi tham số.",
    prefix_syntax: ".sync",
    slash_syntax: "/sync",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)"
    ],
    parameters: [],
    examples: [
      { cmd: ".sync", desc: "Đồng bộ lại toàn bộ Slash Commands" }
    ]
  },
  {
    id: "dms",
    name: "dms",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "🛰️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["dm", "sendmsg", "pm"],
    badge: "Quyền Lực Tối Cao",
    description: "[Owner] Gửi tin nhắn vào bất kỳ kênh chat máy chủ nào hoặc gửi DM riêng cho bất kỳ ai.",
    detailed_desc: "Lệnh can thiệp quản trị tối cao của Owner. Cho phép bot gửi tin nhắn vào bất kỳ kênh chat máy chủ nào (#kênh, ID kênh, tên kênh) HOẶC gửi tin nhắn riêng trực tiếp (DM) cho bất kỳ tài khoản Discord nào (@user, ID tài khoản, username). Hỗ trợ đính kèm tệp tin/ảnh. Tự động xóa tin nhắn lệnh công khai và gửi xác nhận riêng về DM cho Owner.",
    prefix_syntax: ".dms <target> <nội_dung>",
    slash_syntax: "/dms target: <target> message: <nội_dung>",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)",
      "Target có thể là: Tag kênh (#kênh), ID kênh, Tên kênh HOẶC Tag người dùng (@user), ID người dùng, Username",
      "Nếu người dùng khóa DM (Direct Messages Closed), bot sẽ báo lỗi cụ thể",
      "Tự động xóa tin nhắn lệnh của Owner để giữ bí mật",
      "Tự động gửi biên lai xác nhận riêng kèm Jump link về DM cho Owner",
      "Nếu server cài đặt kênh setdmslog, sự kiện sẽ được ghi nhận vào kênh log đó"
    ],
    parameters: [
      {
        name: "target",
        type: "Đích đến (#kênh, @user, ID hoặc tên)",
        required: true,
        default: null,
        description: "Kênh chat máy chủ hoặc Người dùng muốn gửi tin tới"
      },
      {
        name: "message",
        type: "Nội dung tin nhắn (String)",
        required: true,
        default: null,
        description: "Nội dung tin nhắn muốn gửi đi"
      }
    ],
    examples: [
      { cmd: ".dms @User Chào bạn, bot cần bảo trì 5 phút nhé", desc: "Gửi DM trực tiếp cho một thành viên" },
      { cmd: ".dms #thông-báo Bot đã cập nhật phiên bản mới!", desc: "Gửi tin nhắn vào kênh #thông-báo" },
      { cmd: ".dms 123456789012345678 Xin chào sếp!", desc: "Gửi bằng ID kênh hoặc ID người dùng" }
    ],
    embed_preview: {
      title: "🛰️ XÁC NHẬN GỬI TIN NHẮN (DMS RECEIPT)",
      description: "Đã gửi thành công tới: **@User**\nNội dung: *Chào bạn, bot cần bảo trì 5 phút nhé*",
      color: "#57F287",
      footer: "Gửi riêng về DM Chủ Bot"
    }
  },
  {
    id: "ownerhelp",
    name: "ownerhelp",
    category: "owner",
    category_name: "Đặc Quyền Chủ Bot (Owner)",
    icon: "👑",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: [],
    badge: "Owner Help",
    description: "[Owner] Hiển thị bảng tổng hợp danh sách các lệnh đặc quyền chỉ dành riêng cho Chủ Bot.",
    detailed_desc: "Mở bảng trợ giúp bí mật hiển thị tất cả các lệnh đặc quyền của Owner: backup dự án zip, nạp xu, trừ xu, đổi level, hot-reload cog, sync slash commands và dms toàn hệ thống.",
    prefix_syntax: ".ownerhelp",
    slash_syntax: "/ownerhelp",
    permissions: ["Bot Owner Only"],
    perm_level: "owner",
    conditions: [
      "Chỉ dành cho Chủ nhân Bot (ID: 1544362205166837801)"
    ],
    parameters: [],
    examples: [
      { cmd: ".ownerhelp", desc: "Xem toàn bộ lệnh đặc quyền của Chủ Bot" }
    ]
  },

  // =========================================================================
  // 7. GIVEAWAY & PHÁT QUÀ (GIVEAWAY)
  // =========================================================================
  {
    id: "gws",
    name: "gws",
    category: "giveaway",
    category_name: "Giveaway & Phát Quà",
    icon: "🎉",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["gstart", "giveaway", "gtao", "giveawaystart"],
    badge: "Mới Ra Mắt",
    description: "Khởi tạo một sự kiện Giveaway phát quà trúng thưởng với nút bấm tham gia tương tác real-time.",
    detailed_desc: "Tạo tin nhắn Giveaway chuyên nghiệp với nút bấm Discord Components. Hỗ trợ đếm ngược thời gian, cập nhật trực tiếp số người tham gia trên nút bấm và tự động bốc thăm khi hết hạn.",
    prefix_syntax: ".gws <thời gian> <số người thắng> <phần quà>",
    slash_syntax: "/gws duration:<thời gian> winners:<số người> prize:<phần quà>",
    permissions: ["Manage Messages (Quản Lý Tin Nhắn)"],
    perm_level: "mod",
    conditions: [
      "Yêu cầu quyền Manage Messages hoặc Quản trị viên",
      "Thời gian tối thiểu 10s, tối đa 30 ngày (hỗ trợ định dạng: 30s, 10m, 2h, 1d...)",
      "Số người thắng từ 1 đến 50 người"
    ],
    parameters: [
      { name: "duration", type: "string", required: true, desc: "Thời gian diễn ra (VD: 30s, 10m, 2h, 1d)" },
      { name: "winners", type: "number", required: true, desc: "Số lượng người thắng (VD: 1, 2, 5)" },
      { name: "prize", type: "string", required: true, desc: "Tên phần quà tặng (VD: Nitro Discord, 100k Xu Bot...)" }
    ],
    examples: [
      { cmd: ".gws 10m 1 Discord Nitro Classic", desc: "Tạo giveaway 1 Nitro diễn ra trong 10 phút" },
      { cmd: ".gws 2h 3 50.000 Xu Bot", desc: "Tạo giveaway 3 giải thưởng 50k xu trong 2 giờ" },
      { cmd: "/gws duration:1d winners:1 prize:Thẻ Cào 100k", desc: "Tạo giveaway qua Slash Command" }
    ],
    embed_preview: {
      title: "🎉 GIVEAWAY: Discord Nitro Classic",
      description: "Nhấn vào nút **🎉 Tham Gia** bên dưới để có cơ hội nhận quà!\n\n🎁 **Phần thưởng:** Discord Nitro Classic\n👑 **Người tổ chức:** @Admin\n🏆 **Số người thắng:** 1 người\n⏰ **Thời gian còn lại:** trong 10 phút",
      color: "#5865F2",
      footer: "Nhấn 🎉 để tham gia hoặc bấm lần nữa để hủy • Chúc may mắn!"
    }
  },
  {
    id: "gcreate",
    name: "gcreate",
    category: "giveaway",
    category_name: "Giveaway & Phát Quà",
    icon: "📝",
    type: "slash",
    type_label: "Slash Command (/)",
    aliases: [],
    badge: "Modal Popup",
    description: "Mở bảng biểu mẫu popup (Modal) trực quan để điền thông tin và tạo Giveaway nhanh chóng.",
    detailed_desc: "Hiển thị cửa sổ popup giao diện trực quan cho phép người dùng điền Phần thưởng, Thời gian và Số người thắng mà không cần nhớ cú pháp câu lệnh.",
    prefix_syntax: "Chỉ hỗ trợ Slash Command",
    slash_syntax: "/gcreate",
    permissions: ["Manage Messages (Quản Lý Tin Nhắn)"],
    perm_level: "mod",
    conditions: [
      "Yêu cầu quyền Manage Messages hoặc Quản trị viên"
    ],
    parameters: [],
    examples: [
      { cmd: "/gcreate", desc: "Mở cửa sổ nhập thông tin Giveaway tương tác" }
    ]
  },
  {
    id: "gend",
    name: "gend",
    category: "giveaway",
    category_name: "Giveaway & Phát Quà",
    icon: "🛑",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["giveawayend", "gketthuc"],
    badge: "Quản Trị",
    description: "Kết thúc sớm một Giveaway đang diễn ra và lập tức chọn người may mắn trúng giải.",
    detailed_desc: "Dừng giveaway ngay lập tức trước thời hạn kết thúc, bốc thăm ngẫu nhiên người trúng giải và gửi thông báo chúc mừng.",
    prefix_syntax: ".gend [message_id]",
    slash_syntax: "/gend [message_id:<id>]",
    permissions: ["Manage Messages (Quản Lý Tin Nhắn)"],
    perm_level: "mod",
    conditions: [
      "Có thể truyền Message ID hoặc để trống để bot chọn Giveaway gần nhất"
    ],
    parameters: [
      { name: "message_id", type: "string", required: false, desc: "ID tin nhắn của Giveaway cần kết thúc sớm" }
    ],
    examples: [
      { cmd: ".gend", desc: "Kết thúc giveaway gần nhất đang diễn ra" },
      { cmd: ".gend 123456789012345678", desc: "Kết thúc giveaway theo ID tin nhắn chỉ định" }
    ]
  },
  {
    id: "greroll",
    name: "greroll",
    category: "giveaway",
    category_name: "Giveaway & Phát Quà",
    icon: "🎲",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["giveawayreroll", "gquaylai"],
    badge: "Bốc Thăm Lại",
    description: "Quay lại người thắng mới cho một Giveaway đã kết thúc nếu người thắng cũ không nhận giải.",
    detailed_desc: "Chọn lại người thắng cuộc ngẫu nhiên từ danh sách những thành viên đã bấm nút tham gia trong giveaway trước đó.",
    prefix_syntax: ".greroll <message_id> [số người]",
    slash_syntax: "/greroll message_id:<id> [winners:<số người>]",
    permissions: ["Manage Messages (Quản Lý Tin Nhắn)"],
    perm_level: "mod",
    conditions: [
      "Chỉ áp dụng cho các Giveaway đã kết thúc và có người tham gia hợp lệ"
    ],
    parameters: [
      { name: "message_id", type: "string", required: true, desc: "ID tin nhắn của Giveaway đã kết thúc" },
      { name: "winners", type: "number", required: false, desc: "Số lượng người thắng cần quay lại (mặc định: 1)" }
    ],
    examples: [
      { cmd: ".greroll 123456789012345678", desc: "Quay lại 1 người thắng mới cho giveaway" },
      { cmd: ".greroll 123456789012345678 2", desc: "Quay lại 2 người thắng mới" }
    ]
  },
  {
    id: "glist",
    name: "glist",
    category: "giveaway",
    category_name: "Giveaway & Phát Quà",
    icon: "📋",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["gds", "giveawaylist"],
    badge: "Tra Cứu",
    description: "Xem danh sách các sự kiện Giveaway đang diễn ra trên máy chủ kèm link nhảy đến tin nhắn.",
    detailed_desc: "Hiển thị tổng hợp tất cả giveaway đang hoạt động, số người tham gia, thời gian kết thúc và nút bấm chuyển nhanh đến tin nhắn tương ứng.",
    prefix_syntax: ".glist",
    slash_syntax: "/glist",
    permissions: ["Tất cả thành viên"],
    perm_level: "everyone",
    conditions: [],
    parameters: [],
    examples: [
      { cmd: ".glist", desc: "Xem danh sách các giveaway đang diễn ra" }
    ]
  },

  // =========================================================================
  // 8. HỆ THỐNG TICKET (TICKET SYSTEM)
  // =========================================================================
  {
    id: "ticket-panel",
    name: "ticket panel",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "📌",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket setup", "ticket bangdieukhien", "ticket taopanel"],
    badge: "Quản Trị",
    description: "Gửi bảng điều khiển mở Ticket kèm menu chọn chủ đề và nút tương tác vĩnh viễn.",
    detailed_desc: "Tạo và gửi bảng điều khiển tương tác trực quan (Embed + Dropdown menu + Button) vào kênh chỉ định. Người dùng chỉ cần chọn chủ đề cần hỗ trợ là bot sẽ tự động tạo kênh riêng tư và phân quyền bảo mật.",
    prefix_syntax: ".ticket panel [#kênh]",
    slash_syntax: "/ticket panel [channel:#kênh]",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "admin",
    conditions: [
      "Yêu cầu quyền Quản lý máy chủ (Manage Server) hoặc Administrator",
      "Bot cần có quyền Manage Channels để tạo kênh riêng tư cho người dùng",
      "Bảng điều khiển hoạt động vĩnh viễn (Persistent View) ngay cả khi khởi động lại bot"
    ],
    parameters: [
      { name: "channel", type: "channel", required: false, desc: "Kênh văn bản muốn đặt bảng tạo ticket (mặc định là kênh hiện tại)" }
    ],
    examples: [
      { cmd: ".ticket panel", desc: "Gửi bảng tạo ticket ngay tại kênh hiện tại" },
      { cmd: ".ticket panel #ho-tro", desc: "Gửi bảng tạo ticket vào kênh #ho-tro" },
      { cmd: "/ticket panel channel:#ticket", desc: "Gửi bảng ticket qua Slash Command" }
    ],
    embed_preview: {
      title: "🎫 TRUNG TÂM HỖ TRỢ & GIẢI ĐÁP",
      description: "Chào mừng bạn đến với hệ thống hỗ trợ chính thức!\nVui lòng chọn danh mục tương ứng bên dưới để tạo phiếu hỗ trợ riêng tư.",
      color: "#5865F2",
      fields: [
        { name: "🛠️ Hỗ Trợ Kỹ Thuật", value: "Lỗi bot, cấu hình bot, tính năng hệ thống." },
        { name: "❓ Hỏi Đáp & Tư Vấn", value: "Giải đáp câu hỏi chung về server." },
        { name: "🚨 Tố Cáo & Khiếu Nại", value: "Báo cáo vi phạm, gian lận, phá hoại." },
        { name: "💎 Giao Dịch & Nạp Tiền", value: "Trao đổi xu, nạp vật phẩm, donate." }
      ],
      footer: "Ticket System • Nhấp chọn danh mục bên dưới"
    }
  },
  {
    id: "ticket-close",
    name: "ticket close",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "🔒",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket dong", "ticket dongticket"],
    badge: "Cốt Lõi",
    description: "Đóng phiếu hỗ trợ hiện tại, tự động xuất file HTML Transcript và xóa kênh an toàn sau 5s.",
    detailed_desc: "Đóng ticket đang mở, ghi nhận lý do đóng, kết xuất toàn bộ lịch sử trò chuyện sang file HTML chuẩn giao diện Discord Dark Mode, gửi lưu trữ vào kênh Log và nhắn tin riêng (DM) cho người tạo ticket.",
    prefix_syntax: ".ticket close [lý do]",
    slash_syntax: "/ticket close [reason:lý do]",
    permissions: ["Chủ Ticket hoặc Support Staff / Admin"],
    perm_level: "everyone",
    conditions: [
      "Chỉ thực hiện được bên trong một kênh Ticket hợp lệ",
      "Người gọi lệnh phải là người tạo ticket đó hoặc nhân viên hỗ trợ / Quản trị viên",
      "Kênh sẽ đếm ngược 5 giây trước khi xóa để mọi người kịp theo dõi"
    ],
    parameters: [
      { name: "reason", type: "string", required: false, desc: "Lý do đóng ticket (mặc định: Đã giải quyết xong)" }
    ],
    examples: [
      { cmd: ".ticket close", desc: "Đóng ticket với lý do mặc định" },
      { cmd: ".ticket close Đã giải quyết xong lỗi", desc: "Đóng ticket kèm lý do cụ thể" },
      { cmd: "/ticket close reason:Thành viên không còn thắc mắc", desc: "Đóng qua Slash Command" }
    ],
    embed_preview: {
      title: "⚠️ Đang Đóng Ticket...",
      description: "Phiếu hỗ trợ sẽ bị đóng và xóa sau **5 giây**.\n👤 **Người đóng:** Shin\n📝 **Lý do:** `Đã giải quyết xong`\n📜 Đang tiến hành tạo và lưu trữ bản ghi trò chuyện (HTML Transcript)...",
      color: "#FEE75C"
    }
  },
  {
    id: "ticket-claim",
    name: "ticket claim",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "✋",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket nhan", "ticket tiepnhan"],
    badge: "Staff",
    description: "Nhân viên hỗ trợ tiếp nhận xử lý phiếu ticket, cập nhật chủ đề kênh và trạng thái xử lý.",
    detailed_desc: "Đánh dấu ticket đã được một nhân viên hỗ trợ cụ thể tiếp nhận. Bot sẽ cập nhật Topic của kênh, thông báo công khai cho người mở ticket biết ai đang hỗ trợ mình.",
    prefix_syntax: ".ticket claim",
    slash_syntax: "/ticket claim",
    permissions: ["Support Staff hoặc Manage Guild"],
    perm_level: "mod",
    conditions: [
      "Chỉ thực hiện được bên trong kênh Ticket",
      "Yêu cầu vai trò Support Role đã cấu hình hoặc quyền Administrator"
    ],
    parameters: [],
    examples: [
      { cmd: ".ticket claim", desc: "Tiếp nhận xử lý ticket hiện tại" },
      { cmd: "/ticket claim", desc: "Nhận ticket bằng Slash Command" }
    ],
    embed_preview: {
      title: "✅ Tiếp Nhận Xử Lý",
      description: "🛡️ **Shin (Staff)** đã tiếp nhận xử lý phiếu hỗ trợ này!\n*Nhân viên sẽ trực tiếp trao đổi và hỗ trợ bạn ngay tại đây.*",
      color: "#57F287"
    }
  },
  {
    id: "ticket-unclaim",
    name: "ticket unclaim",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "🔄",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket huynhan", "ticket bonhan"],
    badge: "Staff",
    description: "Hủy tiếp nhận xử lý ticket để nhân viên hỗ trợ khác có thể nhận thay.",
    detailed_desc: "Chuyển trạng thái ticket từ Đã Nhận về Đang Chờ, khôi phục Topic ban đầu để các nhân viên hỗ trợ khác trong đội ngũ tiếp tục xử lý.",
    prefix_syntax: ".ticket unclaim",
    slash_syntax: "/ticket unclaim",
    permissions: ["Support Staff hoặc Manage Guild"],
    perm_level: "mod",
    conditions: [
      "Chỉ người đang nhận ticket hoặc Admin mới có quyền hủy tiếp nhận"
    ],
    parameters: [],
    examples: [
      { cmd: ".ticket unclaim", desc: "Hủy tiếp nhận ticket hiện tại" }
    ]
  },
  {
    id: "ticket-add",
    name: "ticket add",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "➕",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket them", "ticket themnguoi"],
    badge: "Thành Viên",
    description: "Thêm một thành viên khác vào xem và trò chuyện trong ticket hiện tại.",
    detailed_desc: "Tự động phân quyền đọc, gửi tin nhắn và xem lịch sử chat trong kênh ticket riêng tư cho một người dùng được chỉ định mà không ảnh hưởng tới các thành viên khác.",
    prefix_syntax: ".ticket add <@member>",
    slash_syntax: "/ticket add member:@thành_viên",
    permissions: ["Chủ Ticket hoặc Support Staff"],
    perm_level: "everyone",
    conditions: [
      "Thành viên được thêm phải đang có mặt trong server Discord"
    ],
    parameters: [
      { name: "member", type: "user", required: true, desc: "Thành viên muốn thêm vào ticket" }
    ],
    examples: [
      { cmd: ".ticket add @Alex", desc: "Thêm bạn Alex vào ticket để cùng hỗ trợ" },
      { cmd: "/ticket add member:@Alex", desc: "Thêm thành viên bằng Slash Command" }
    ]
  },
  {
    id: "ticket-remove",
    name: "ticket remove",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "➖",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket xoa", "ticket xoanguoi", "ticket kickmember"],
    badge: "Thành Viên",
    description: "Xóa quyền truy cập và loại bỏ một thành viên khỏi ticket hiện tại.",
    detailed_desc: "Gỡ bỏ quyền xem và nhắn tin trong kênh ticket của người dùng đã được thêm trước đó. Không thể gỡ bỏ chủ sở hữu của ticket.",
    prefix_syntax: ".ticket remove <@member>",
    slash_syntax: "/ticket remove member:@thành_viên",
    permissions: ["Support Staff hoặc Manage Guild"],
    perm_level: "mod",
    conditions: [
      "Không thể xóa người tạo ban đầu của ticket"
    ],
    parameters: [
      { name: "member", type: "user", required: true, desc: "Thành viên muốn loại bỏ khỏi ticket" }
    ],
    examples: [
      { cmd: ".ticket remove @Alex", desc: "Xóa quyền xem ticket của Alex" }
    ]
  },
  {
    id: "ticket-transcript",
    name: "ticket transcript",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "📜",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket export", "ticket xuat", "ticket lualichsu"],
    badge: "Tiện Ích",
    description: "Xuất file HTML giao diện Discord Dark Mode chứa toàn bộ lịch sử tin nhắn của ticket bất kỳ lúc nào.",
    detailed_desc: "Thu thập tối đa 1000 tin nhắn gần nhất, kèm avatar người chat, timestamp, ảnh đính kèm, tệp tin và Embed, xuất ra một file HTML độc lập có thể mở trực tiếp trên mọi trình duyệt web.",
    prefix_syntax: ".ticket transcript",
    slash_syntax: "/ticket transcript",
    permissions: ["Chủ Ticket hoặc Support Staff"],
    perm_level: "everyone",
    conditions: [
      "Chỉ dùng được trong kênh Ticket đang hoạt động"
    ],
    parameters: [],
    examples: [
      { cmd: ".ticket transcript", desc: "Lưu lịch sử tin nhắn hiện tại ra file HTML" },
      { cmd: "/ticket transcript", desc: "Xuất transcript qua Slash Command" }
    ]
  },
  {
    id: "ticket-rename",
    name: "ticket rename",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "✏️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket doiten"],
    badge: "Tiện Ích",
    description: "Đổi tên kênh ticket nhanh chóng để dễ dàng quản lý.",
    detailed_desc: "Thay đổi tên kênh văn bản ticket hiện tại theo chủ đề cụ thể (VD: đổi thành bug-bot, vip-donate, resolved-user).",
    prefix_syntax: ".ticket rename <tên mới>",
    slash_syntax: "/ticket rename new_name:<tên mới>",
    permissions: ["Support Staff hoặc Manage Guild"],
    perm_level: "mod",
    conditions: [
      "Tên kênh tối đa 50 ký tự, tự động định dạng chữ thường và dấu gạch nối"
    ],
    parameters: [
      { name: "new_name", type: "string", required: true, desc: "Tên mới cho kênh ticket (VD: bug-bot)" }
    ],
    examples: [
      { cmd: ".ticket rename bug-bot-nap-the", desc: "Đổi tên kênh ticket thành bug-bot-nap-the" }
    ]
  },
  {
    id: "ticket-setcategory",
    name: "ticket setcategory",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "📁",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket setcat", "ticket danhmuc"],
    badge: "Cài Đặt",
    description: "Cài đặt danh mục cha (Category) để tự động gom toàn bộ các kênh ticket mới tạo vào.",
    detailed_desc: "Chỉ định một Category trên máy chủ Discord. Mọi kênh ticket do thành viên mở sau đó sẽ tự động được xếp gọn gàng bên dưới danh mục này.",
    prefix_syntax: ".ticket setcategory <#category>",
    slash_syntax: "/ticket setcategory category:<danh mục>",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "admin",
    conditions: [
      "Phải chọn đúng một CategoryChannel trên máy chủ"
    ],
    parameters: [
      { name: "category", type: "category", required: true, desc: "Danh mục muốn chứa các kênh ticket" }
    ],
    examples: [
      { cmd: ".ticket setcategory 123456789012345678", desc: "Cài đặt category ticket theo ID" },
      { cmd: "/ticket setcategory category:TICKETS", desc: "Chọn category qua giao diện Slash Command" }
    ]
  },
  {
    id: "ticket-setrole",
    name: "ticket setrole",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "🛡️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket vaitro", "ticket supportrole"],
    badge: "Cài Đặt",
    description: "Cài đặt vai trò nhân viên hỗ trợ (Support Role) có quyền xem, phản hồi và nhận ticket.",
    detailed_desc: "Gán một vai trò trong server làm vai trò hỗ trợ. Khi có ticket mới, toàn bộ thành viên mang vai trò này sẽ tự động có quyền xem kênh và có thể bấm nút nhận xử lý.",
    prefix_syntax: ".ticket setrole <@role>",
    slash_syntax: "/ticket setrole role:<@vai trò>",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "admin",
    conditions: [
      "Role được chọn phải tồn tại trên máy chủ"
    ],
    parameters: [
      { name: "role", type: "role", required: true, desc: "Vai trò nhân viên hỗ trợ" }
    ],
    examples: [
      { cmd: ".ticket setrole @Staff", desc: "Đặt vai trò @Staff làm người hỗ trợ ticket" },
      { cmd: "/ticket setrole role:@Support", desc: "Cài đặt bằng Slash Command" }
    ]
  },
  {
    id: "ticket-setlog",
    name: "ticket setlog",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "📋",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket logchannel", "ticket ticketlog"],
    badge: "Cài Đặt",
    description: "Cài đặt kênh văn bản nhận thông báo tạo ticket và lưu trữ file HTML Transcript khi đóng.",
    detailed_desc: "Tất cả sự kiện mở ticket mới, danh mục lựa chọn, người đóng ticket và file HTML Transcript đầy đủ sẽ tự động được gửi lưu trữ vĩnh viễn vào kênh log này.",
    prefix_syntax: ".ticket setlog <#kênh>",
    slash_syntax: "/ticket setlog channel:<#kênh>",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "admin",
    conditions: [
      "Bot cần có quyền Gửi tin nhắn và Đính kèm tệp (Attach Files) tại kênh log"
    ],
    parameters: [
      { name: "channel", type: "channel", required: true, desc: "Kênh văn bản lưu trữ log ticket" }
    ],
    examples: [
      { cmd: ".ticket setlog #ticket-logs", desc: "Cài đặt kênh nhận log ticket" }
    ]
  },
  {
    id: "ticket-config",
    name: "ticket config",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "⚙️",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket cauhinh", "ticket status"],
    badge: "Tra Cứu",
    description: "Xem toàn bộ thông số thiết lập hệ thống Ticket của server (Category, Role, Log, tổng ticket).",
    detailed_desc: "Bảng tổng quan hiển thị trạng thái cấu hình hiện tại: Category chứa ticket, vai trò Support Role, kênh Log Transcript, kênh đặt bảng panel và tổng số ticket đã tạo từ trước đến nay.",
    prefix_syntax: ".ticket config",
    slash_syntax: "/ticket config",
    permissions: ["Manage Guild (Quản Lý Máy Chủ)"],
    perm_level: "admin",
    conditions: [],
    parameters: [],
    examples: [
      { cmd: ".ticket config", desc: "Xem cấu hình hệ thống ticket của server" }
    ],
    embed_preview: {
      title: "⚙️ Cấu Hình Hệ Thống Ticket — Server Name",
      description: "Tổng quan thiết lập và các kênh vận hành của hệ thống Phiếu Hỗ Trợ:",
      color: "#5865F2",
      fields: [
        { name: "📁 Danh Mục Chứa Ticket", value: "#TICKETS" },
        { name: "🛡️ Vai Trò Hỗ Trợ (Staff)", value: "@Support Staff" },
        { name: "📋 Kênh Nhật Ký (Log & Transcript)", value: "#ticket-logs" },
        { name: "📌 Kênh Đặt Bảng Điều Khiển", value: "#ho-tro" },
        { name: "🔢 Tổng Số Ticket Đã Mở", value: "`#42` ticket" },
        { name: "🟢 Ticket Đang Mở Hiện Tại", value: "`3` ticket" }
      ]
    }
  },
  {
    id: "ticket-list",
    name: "ticket list",
    category: "ticket",
    category_name: "Hệ Thống Ticket",
    icon: "📑",
    type: "hybrid",
    type_label: "Hybrid (/ và .)",
    aliases: ["ticket ds", "ticket danhsach"],
    badge: "Tra Cứu",
    description: "Xem danh sách các phiếu hỗ trợ đang mở trên toàn máy chủ kèm người tạo và trạng thái tiếp nhận.",
    detailed_desc: "Hiển thị danh sách tổng hợp tất cả ticket đang trong trạng thái Mở (Open) hoặc Đã Nhận (Claimed), kèm liên kết nhảy nhanh vào kênh chat để nhân viên hỗ trợ tiện theo dõi.",
    prefix_syntax: ".ticket list",
    slash_syntax: "/ticket list",
    permissions: ["Support Staff hoặc Manage Guild"],
    perm_level: "mod",
    conditions: [],
    parameters: [],
    examples: [
      { cmd: ".ticket list", desc: "Xem danh sách các ticket đang mở" }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BOT_CONFIG, COMMANDS_DATA };
}
