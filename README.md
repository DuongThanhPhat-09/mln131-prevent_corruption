# Giặc Nội Xâm — Web thuyết trình MLN131

Website một trang phục vụ thuyết trình môn **MLN131 — Chủ nghĩa xã hội khoa học**, chủ đề: *Đấu tranh phòng, chống tham nhũng và vấn đề xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam*.

Thiết kế theo phong cách **brutalism** với bảng màu Đỏ – Đen – Kem (thẩm mỹ áp phích cổ động Việt Nam). Xây dựng bằng Vite + React, CSS thuần, không dependency ngoài.

## Chạy project

```bash
npm install
npm run dev      # dev server
npm run build    # build production vào dist/
npm run lint     # kiểm tra eslint
```

## Sửa nội dung thuyết trình

Toàn bộ text (lời dẫn, luận điểm, dẫn chứng, nguồn...) nằm trong **`src/data/content.js`** — sửa file này là đủ, không cần đụng vào component.

## Cấu trúc

```
src/
  data/content.js      # toàn bộ nội dung thuyết trình
  hooks/useReveal.js   # hiệu ứng hiện dần khi cuộn
  components/          # Nav, Hero, Part1–4, Conclusion, AiUsage, Footer...
  index.css            # design tokens (màu, font, viền, bóng)
  App.css              # style theo từng section
```

## Nguồn tham khảo nội dung

1. Giáo trình Chủ nghĩa xã hội khoa học — Chương 4 (Nxb CTQG Sự thật)
2. Tài liệu giảng dạy Phòng, chống tham nhũng trong nhà trường — Bộ GD&ĐT
3. *"Kiên quyết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực..."* — Nguyễn Phú Trọng (Nxb CTQG Sự thật, 2023)
