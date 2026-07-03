// ============================================================
// TOÀN BỘ NỘI DUNG THUYẾT TRÌNH NẰM Ở FILE NÀY.
// Muốn sửa lời, sửa số liệu, sửa nguồn — chỉ cần sửa ở đây,
// không cần đụng vào các file component.
//
// Ảnh tư liệu tải từ Wikimedia Commons, giấy phép ghi ở credit.
// ============================================================

import imgHoChiMinh from '../assets/ho-chi-minh-1946.jpg'
import imgQuocHoi from '../assets/nha-quoc-hoi.jpg'
import imgNguyenPhuTrong from '../assets/nguyen-phu-trong.jpg'
import imgHcmcSkyline from '../assets/hcmc-skyline.jpg'
import imgCovidTest from '../assets/covid-test-danang.jpg'
import imgSinhVien from '../assets/sinh-vien-tinh-nguyen.jpg'

export const site = {
  course: 'MLN131 · CHỦ NGHĨA XÃ HỘI KHOA HỌC',
  badge: 'THUYẾT TRÌNH NHÓM',
  title: ['GIẶC', 'NỘI XÂM'],
  subtitle:
    'Đấu tranh phòng, chống tham nhũng và vấn đề xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam',
}

export const navItems = [
  { id: 'mo-dau', num: '00', label: 'Mở đầu' },
  { id: 'ly-luan', num: '01', label: 'Lý luận' },
  { id: 'bien-chung', num: '02', label: 'Biện chứng' },
  { id: 'thuc-tien', num: '03', label: 'Thực tiễn' },
  { id: 'giai-phap', num: '04', label: 'Giải pháp' },
  { id: 'ket-luan', num: '05', label: 'Kết luận' },
]

export const hero = {
  image: {
    src: imgHoChiMinh,
    alt: 'Chân dung Chủ tịch Hồ Chí Minh năm 1946',
  },
  quote:
    'Sinh thời, Chủ tịch Hồ Chí Minh từng gọi tham nhũng là "giặc nội xâm" — một thứ giặc nguy hiểm không kém giặc ngoại xâm, bởi nó không tấn công bằng súng đạn mà bằng cách bào mòn lòng tin của nhân dân từ bên trong bộ máy nhà nước.',
  quoteCite: '',
  questions: [
    'Tham nhũng thực sự là gì?',
    'Vì sao tham nhũng là kẻ thù không đội trời chung của Nhà nước pháp quyền XHCN?',
    'Thực tiễn đấu tranh phòng, chống tham nhũng ở Việt Nam đang diễn ra như thế nào?',
  ],
}

export const part1 = {
  num: '01',
  kicker: '',
  title: 'Cơ sở lý luận',
  s1: {
    heading: '1.1 — Nhà nước pháp quyền XHCN ở Việt Nam là gì?',
    intro:
      'Theo Giáo trình Chủ nghĩa xã hội khoa học (Chương 4), Nhà nước pháp quyền XHCN Việt Nam có các đặc trưng cốt lõi sau:',
    features: [
      {
        title: 'Bản chất giai cấp & nhân dân',
        text: 'Là nhà nước của dân, do dân, vì dân; tất cả quyền lực nhà nước thuộc về nhân dân.',
      },
      {
        title: 'Thượng tôn pháp luật',
        text: 'Pháp luật được đặt ở vị trí tối thượng để điều chỉnh mọi quan hệ xã hội; mọi cơ quan, cán bộ, công dân đều phải chấp hành Hiến pháp và pháp luật.',
      },
      {
        title: 'Kiểm soát quyền lực',
        text: 'Quyền lực nhà nước là thống nhất nhưng có phân công rõ ràng, phối hợp và kiểm soát chặt chẽ giữa lập pháp — hành pháp — tư pháp, nhằm tránh lạm quyền.',
      },
      {
        title: 'Đảng Cộng sản Việt Nam lãnh đạo',
        text: 'Nhà nước đặt dưới sự lãnh đạo của Đảng (Điều 4 Hiến pháp 2013), hoạt động theo phương châm "Dân biết, dân bàn, dân làm, dân kiểm tra".',
      },
    ],
    image: {
      src: imgQuocHoi,
      alt: 'Tòa nhà Quốc hội Việt Nam tại Hà Nội',
      caption:
        'Nhà Quốc hội (Hà Nội) — nơi làm việc của cơ quan quyền lực nhà nước cao nhất do nhân dân bầu ra.',
    },
    transition:
      'Đó là bản chất tốt đẹp mà Nhà nước ta hướng tới. Nhưng có một hiện tượng đang đe dọa trực tiếp đến bản chất đó — tham nhũng.',
  },
  s2: {
    heading: '1.2 — Tham nhũng là gì?',
    defLabel: 'THAM NHŨNG',
    defSource: 'Tài liệu giảng dạy PCTN — Bộ GD&ĐT',
    definition:
      'Là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó làm trái pháp luật để mưu cầu lợi ích riêng.',
    traitsHeading: 'BA ĐẶC ĐIỂM NHẬN DIỆN',
    traits: [
      {
        label: 'CHỦ THỂ',
        text: 'Người có chức vụ, quyền hạn — do bầu, bổ nhiệm hoặc được giao phó.',
      },
      {
        label: 'HÀNH VI',
        text: 'Lạm dụng chức vụ, làm trái công vụ, vi phạm pháp luật.',
      },
      {
        label: 'ĐỘNG CƠ',
        text: 'Vụ lợi — kinh tế, chính trị, cho cá nhân hoặc lợi ích nhóm.',
      },
    ],
    transition:
      'Hai khái niệm trên tưởng như tách biệt, nhưng thực chất có quan hệ đối kháng sâu sắc. Vì sao vậy?',
  },
}

export const marquees = {
  one: ['KHÔNG CÓ VÙNG CẤM', 'KHÔNG CÓ NGOẠI LỆ', 'BẤT KỂ NGƯỜI ĐÓ LÀ AI'],
  two: ['KHÔNG THỂ', 'KHÔNG DÁM', 'KHÔNG MUỐN', 'KHÔNG CẦN THAM NHŨNG'],
}

export const part2 = {
  num: '02',
  kicker: '',
  title: 'Tham nhũng là "kẻ thù" của Nhà nước pháp quyền',
  subtitle:
    'Ba luận điểm cho thấy quan hệ đối kháng giữa tham nhũng với Nhà nước pháp quyền và dân chủ XHCN.',
  args: [
    {
      letter: 'A',
      title: 'Phá vỡ nguyên tắc thượng tôn pháp luật',
      steps: [
        {
          label: 'DẪN',
          text: 'Nhà nước pháp quyền đòi hỏi mọi công dân, cán bộ đều bình đẳng trước pháp luật.',
        },
        {
          label: 'GIẢI THÍCH',
          text: 'Ngược lại, kẻ tham nhũng lợi dụng chính quyền lực được giao để đứng trên pháp luật, chà đạp kỷ cương để trục lợi.',
        },
        {
          label: 'HỆ QUẢ',
          text: 'Nguyên tắc tối thượng của pháp luật bị vô hiệu hóa ngay từ bên trong bộ máy nhà nước.',
        },
      ],
    },
    {
      letter: 'B',
      title: 'Tước đoạt quyền làm chủ của nhân dân',
      highlight: true,
      badge: 'BẢN CHẤT NGUY HIỂM NHẤT',
      steps: [
        {
          label: 'DẪN',
          text: 'Trong nền dân chủ XHCN, nhân dân ủy quyền cho nhà nước quản lý xã hội.',
        },
        {
          label: 'GIẢI THÍCH',
          text: 'Tham nhũng chính là hành vi tha hóa quyền lực — biến quyền lực công (của nhân dân) thành công cụ tư lợi của một cá nhân, một nhóm nhỏ.',
        },
        {
          label: 'HỆ QUẢ',
          text: 'Tham nhũng không chỉ là vi phạm pháp luật thông thường, mà là sự phản bội lại chính chủ thể đã trao quyền cho mình.',
        },
      ],
    },
    {
      letter: 'C',
      title: 'Đe dọa sự tồn vong của chế độ',
      steps: [
        {
          label: 'VỀ KINH TẾ',
          text: 'Gây thất thoát tài sản khổng lồ, cản trở sự phát triển của đất nước.',
        },
        {
          label: 'VỀ CHÍNH TRỊ — XÃ HỘI',
          text: 'Làm suy giảm nghiêm trọng lòng tin của nhân dân vào Đảng và Nhà nước, băng hoại đạo đức xã hội.',
        },
      ],
    },
  ],
  quote:
    'Phòng, chống tham nhũng, lãng phí và thực hành tiết kiệm là nhiệm vụ cấp bách, lâu dài của quá trình xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.',
  quoteSource: 'Giáo trình Chủ nghĩa xã hội khoa học — Chương 4',
  transition:
    '"Từ lý luận, chúng ta cùng nhìn vào thực tiễn: Đảng và Nhà nước đã và đang đấu tranh với giặc nội xâm này như thế nào?"',
}

export const part3 = {
  num: '03',
  kicker: '',
  title: 'Công cuộc đấu tranh phòng, chống tham nhũng',
  s1: {
    heading: '3.1 — Chủ trương, hành động của Đảng và Nhà nước',
    principleLabel: 'NGUYÊN TẮC CHỈ ĐẠO XUYÊN SUỐT',
    principle: 'Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai.',
    image: {
      src: imgNguyenPhuTrong,
      alt: 'Cố Tổng Bí thư Nguyễn Phú Trọng',
      caption:
        'Cố Tổng Bí thư Nguyễn Phú Trọng — người trực tiếp lãnh đạo công cuộc đấu tranh phòng, chống tham nhũng, tiêu cực.',
    },
    goal: {
      intro:
        'Mục tiêu chống tham nhũng — theo cuốn sách của cố Tổng Bí thư Nguyễn Phú Trọng:',
      wrongLabel: 'KHÔNG PHẢI ĐỂ',
      wrong: '"Làm nhụt chí cán bộ"',
      rightLabel: 'MÀ LÀ',
      right: '"Trị bệnh cứu người" — làm trong sạch bộ máy',
      source: 'Nxb Chính trị quốc gia Sự thật, 2023 — tài liệu tham khảo chính thức của môn học',
    },
    stat: {
      value: 34,
      suffix: '/34',
      label:
        'đơn vị hành chính cấp tỉnh hiện nay của Việt Nam (28 tỉnh, 6 thành phố) — cơ sở để tổ chức đồng bộ công tác PCTN, tiêu cực ở địa phương.',
    },
    actions: [
      'Đẩy mạnh cải cách hành chính, thu hẹp kẽ hở "xin — cho".',
      'Công khai, minh bạch tài sản của cán bộ, đảng viên.',
    ],
  },
  s2: {
    heading: '3.2 — Dẫn chứng từ các đại án',
    cases: [
      {
        tag: 'THAM NHŨNG KINH TẾ',
        name: 'Vạn Thịnh Phát — Ngân hàng SCB',
        image: {
          src: imgHcmcSkyline,
          alt: 'Trung tâm tài chính TP. Hồ Chí Minh về đêm',
        },
        text: 'Lợi dụng kẽ hở pháp luật và sự tha hóa của một bộ phận cán bộ quản lý (kể cả cán bộ thanh tra) để "rút ruột" cả một hệ thống ngân hàng.',
        damageLabel: 'THIỆT HẠI',
        damage: 'Ước tính hàng trăm nghìn tỷ đồng — tàn phá nguồn lực quốc gia.',
        source: 'Thông cáo báo chí Bộ Công an · Báo cáo Ban Chỉ đạo Trung ương về PCTN, tiêu cực',
      },
      {
        tag: 'THAM NHŨNG Y TẾ · TRỤC LỢI CHÍNH SÁCH',
        name: 'Công ty Việt Á',
        image: {
          src: imgCovidTest,
          alt: 'Nhân viên y tế CDC Đà Nẵng lấy mẫu xét nghiệm COVID-19',
        },
        text: 'Lợi dụng bối cảnh đại dịch COVID-19, một loạt cán bộ từ trung ương đến địa phương (kể cả cựu Bộ trưởng) cấu kết nâng khống giá kit xét nghiệm.',
        damageLabel: 'THIỆT HẠI',
        damage: 'Chà đạp lên đạo đức, sức khỏe và tính mạng nhân dân giữa đại dịch.',
        source: 'Cổng TTĐT Chính phủ · Kết luận điều tra của Cơ quan CSĐT Bộ Công an',
      },
    ],
    meaningLabel: 'Ý NGHĨA LIÊN HỆ',
    meaning:
      'Hai vụ án cho thấy tham nhũng không dừng ở thiệt hại tiền bạc: nó chà đạp đạo đức, sức khỏe, tính mạng nhân dân (Việt Á) và tàn phá nguồn lực quốc gia (Vạn Thịnh Phát) — minh chứng sống động cho lý luận đã trình bày ở Phần 2.',
  },
  transition:
    '"Xử lý được các đại án là xử lý phần ngọn. Vậy đâu là giải pháp cho phần gốc?"',
}

export const part4 = {
  num: '04',
  kicker: '',
  title: 'Giải pháp thể chế & trách nhiệm sinh viên',
  s1: {
    heading: '4.1 — Giải pháp hoàn thiện thể chế',
    source: 'Giáo trình CNXHKH — Chương 4',
    solutions: [
      {
        title: 'Minh bạch thể chế kinh tế',
        text: 'Hoàn thiện thể chế kinh tế, minh bạch môi trường kinh doanh, xóa bỏ cơ chế "xin — cho".',
      },
      {
        title: 'Đội ngũ cán bộ trong sạch',
        text: 'Xây dựng đội ngũ cán bộ trong sạch, có năng lực; có cơ chế loại bỏ, miễn nhiệm người vi phạm.',
      },
      {
        title: 'Bảo vệ người tố cáo',
        text: 'Khuyến khích, bảo vệ người đấu tranh chống tham nhũng; xây dựng chế tài xử lý nghiêm.',
      },
    ],
  },
  s2: {
    heading: '4.2 — Trách nhiệm công dân, sinh viên',
    source: 'Luật Phòng, chống tham nhũng',
    image: {
      src: imgSinhVien,
      alt: 'Sinh viên tình nguyện tặng sách cho trẻ em nghèo hiếu học tại Quảng Nam',
      caption:
        'Sinh viên tình nguyện tặng sách cho trẻ em nghèo hiếu học (Kà Dăng, Quảng Nam) — trách nhiệm công dân bắt đầu từ những hành động cụ thể.',
    },
    duties: [
      {
        title: 'Thượng tôn pháp luật',
        text: 'Tự giác chấp hành pháp luật PCTN; bài trừ tiêu cực ngay từ trong học đường — gian lận thi cử, "văn hóa phong bì".',
      },
      {
        title: 'Thực thi quyền dân chủ',
        text: 'Công dân có quyền và nghĩa vụ tố giác, giám sát — theo phương châm Đại hội XIII:',
      },
    ],
    sixDan: ['DÂN BIẾT', 'DÂN BÀN', 'DÂN LÀM', 'DÂN KIỂM TRA', 'DÂN GIÁM SÁT', 'DÂN THỤ HƯỞNG'],
    cage: {
      lead: 'Khi mỗi sinh viên nâng cao nhận thức và tham gia giám sát xã hội, sẽ tạo ra một "chiếc lồng cơ chế" khiến người có chức quyền:',
      items: ['KHÔNG THỂ', 'KHÔNG DÁM', 'KHÔNG MUỐN', 'KHÔNG CẦN'],
      tail: 'THAM NHŨNG',
    },
  },
}

export const conclusion = {
  kicker: '05 / KẾT LUẬN',
  text: 'Đấu tranh phòng, chống tham nhũng là một hành trình gian nan, lâu dài, nhưng là yếu tố tiên quyết để thanh lọc bộ máy, khẳng định quyền làm chủ thực sự của nhân dân.',
  emphasis:
    'Sự thành công của công cuộc này sẽ quyết định tính bền vững và sự phồn vinh của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.',
  thanks: 'Nhóm em xin cảm ơn thầy và các bạn đã lắng nghe.',
  qna: 'SẴN SÀNG NHẬN CÂU HỎI PHẢN BIỆN →',
}

export const aiUsage = {
  kicker: '',
  title: 'AI Usage & Nguồn tham khảo',
  intro:
    'Website được xây dựng với sự hỗ trợ của AI. Phạm vi sử dụng AI và toàn bộ nguồn tư liệu được công khai như sau:',
  ai: {
    label: 'AI ĐÃ LÀM',
    heading: 'Công khai phạm vi sử dụng AI',
    tools: ['Claude Code — Anthropic', 'Codex — OpenAI', 'Gemini — Google', 'NotebookLM — Google'],
    items: [
      'Claude Code: dựng website, chuyển đề cương thuyết trình thành bố cục web',
      'Codex: hỗ trợ xây dựng và tinh chỉnh giao diện web',
      'Claude Code: tìm và chèn ảnh tư liệu từ Wikimedia Commons, ghi rõ tác giả & giấy phép (xem Nguồn ảnh)',
      'Gemini: hỗ trợ research, tổng hợp thông tin cho nội dung thuyết trình',
      'NotebookLM: đọc và tra cứu các tài liệu tham khảo của môn học',
    ],
  },
  refs: {
    sourcesLabel: 'NGUỒN THAM KHẢO',
    sourcesTitle: 'Tài liệu chính thức của môn học',
    sources: [
      {
        label: 'Giáo trình Chủ nghĩa xã hội khoa học — Chương 4 (Nxb Chính trị quốc gia Sự thật)',
        url: 'https://nxbctqg.org.vn/giao-trinh-chu-nghia-xa-hoi-khoa-hoc-danh-cho-bac-dai-hoc-he-khong-chuyen-ly-luan-chinh-tri-.html',
      },
      {
        label:
          'Tài liệu giảng dạy về Phòng, chống tham nhũng dùng cho các trường ĐH, CĐ — Bộ GD&ĐT (QĐ 3468/QĐ-BGDĐT, 2014)',
        url: 'https://httc.edu.vn/upload/files/tai%20lieu%20giang%20day%20PCTN%20trong%20Nha%20truong.pdf',
      },
      {
        label:
          '"Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và Nhà nước ta ngày càng trong sạch, vững mạnh" — Nguyễn Phú Trọng (Nxb CTQG Sự thật, 2023)',
        url: 'https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/book/sach-chinh-tri/kien-quyet-kien-tri-dau-tranh-phong-chong-tham-nhung-tieu-cuc-gop-phan-xay-dung-dang-va-nha-nuoc-ta-ngay-cang-trong-sach-436',
      },
      {
        label:
          'Thông tin 34 đơn vị hành chính cấp tỉnh từ ngày 12/6/2025 — Cổng Thông tin điện tử Chính phủ',
        url: 'https://xaydungchinhsach.chinhphu.vn/chi-tiet-34-don-vi-hanh-chinh-cap-tinh-tu-12-6-2025-119250612141845533.htm',
      },
    ],
    imagesLabel: 'NGUỒN ẢNH',
    imagesTitle: 'Ảnh tư liệu — Wikimedia Commons',
    images: [
      {
        label: 'Chân dung Chủ tịch Hồ Chí Minh (1946) — Ảnh tư liệu · Public domain',
        url: 'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_-_1946_Portrait.jpg',
      },
      {
        label: 'Nhà Quốc hội Việt Nam — Grayswoodsurrey · CC BY-SA 4.0',
        url: 'https://commons.wikimedia.org/wiki/File:National_Assembly_of_Vietnam.JPG',
      },
      {
        label: 'Cố Tổng Bí thư Nguyễn Phú Trọng — Adam Schultz · Public domain',
        url: 'https://commons.wikimedia.org/wiki/File:P20230910AS-0913_(53234691421).jpg',
      },
      {
        label: 'Trung tâm tài chính TP. Hồ Chí Minh về đêm — Tran Van Ngoc · CC0',
        url: 'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_City_Skyline_at_Night.jpg',
      },
      {
        label: 'Lấy mẫu xét nghiệm COVID-19 tại Đà Nẵng — DaNangTV · CC BY 3.0',
        url: 'https://commons.wikimedia.org/wiki/File:Da_Nang_CDC_medical_workers_performs_COVID-19_test.jpg',
      },
      {
        label: 'Sinh viên tình nguyện tặng sách (Quảng Nam) — Đại học Đông Á · CC BY-SA 4.0',
        url: 'https://commons.wikimedia.org/wiki/File:T%E1%BA%B7ng_s%C3%A1ch_cho_tr%E1%BA%BB_em_ngh%C3%A8o_hi%E1%BA%BFu_h%E1%BB%8Dc_K%C3%A0_D%C4%83ng_(Qu%E1%BA%A3ng_Nam)_-_m%E1%BB%99t_trong_s%E1%BB%91_nhi%E1%BB%81u_ho%E1%BA%A1t_%C4%91%E1%BB%99ng_tr%C3%A1ch_nhi%E1%BB%87m_c%E1%BB%99ng_%C4%91%E1%BB%93ng_c%E1%BB%A7a_sinh_vi%C3%AAn_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_%C4%90%C3%B4ng_%C3%81.jpg',
      },
    ],
  },
  note: 'Nội dung học thuật được trích từ các nguồn chính thống liệt kê ở trên. AI không tự sinh dữ kiện, số liệu học thuật.',
}

export const footer = {
  headline: 'THANK YOU',
  credit: 'MLN131 — Chủ nghĩa xã hội khoa học · Web thuyết trình nhóm · 2026',
}
