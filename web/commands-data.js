/**
 * Dữ liệu toàn bộ lệnh và điều kiện của Discord Bot Python
 * Tự động trích xuất và đồng bộ từ thư mục cogs:
 * general.py, moderation.py, automod.py, economy.py, music.py, owner.py
 */

const BOT_CONFIG = {
  name: "Shin Bot",
  prefix: ".",
  owner_id: "1544362205166837801",
  version: "2.4.0",
  python_version: "Python 3.11 / discord.py 2.x",
  uptime_mode: "24/7 Auto-Restart Watchdog & Windows Task Scheduler",
  total_commands: 57,
  categories: [
    { id: "all", name: "Tất Cả Lệnh", icon: "✨", count: 57, color: "#5865F2" },
    { id: "general", name: "Tiện Ích & Thông Tin", icon: "🛠️", count: 10, color: "#3BA55C" },
    { id: "moderation", name: "Quản Trị Máy Chủ", icon: "🛡️", count: 5, color: "#FAA61A" },
    { id: "automod", name: "Kiểm Duyệt AutoMod", icon: "🚨", count: 9, color: "#ED4245" },
    { id: "economy", name: "Kinh Tế & Minigame", icon: "💰", count: 10, color: "#F1C40F" },
    { id: "music", name: "Âm Nhạc Voice", icon: "🎵", count: 10, color: "#1DB954" },
    { id: "giveaway", name: "Giveaway & Phát Quà", icon: "🎉", count: 5, color: "#EB459E" },
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
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BOT_CONFIG, COMMANDS_DATA };
}
