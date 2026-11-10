# messenger-pwa-bypass

Keep using the installed **Messenger desktop app (PWA)** after Meta ended support for it.

> 🇻🇳 [Tiếng Việt bên dưới](#tiếng-việt)

## The problem

On **15/12/2025** Meta stopped supporting the Messenger PWA (including the Microsoft Store build). When the installed app is opened, it launches a URL like:

```
https://www.messenger.com/?ref=homescreenpwa&__pwa=1
```

The `__pwa` / `ref` parameters are internal routing flags. Messenger sees them and shows the "app is no longer supported" page instead of your chats.

## How it works

A tiny script runs at `document_start` on `messenger.com`. If the URL contains `__pwa`, it removes the `__pwa` and `ref` parameters and reloads the page with `location.replace()`:

```
https://www.messenger.com/?ref=homescreenpwa&__pwa=1  →  https://www.messenger.com/
```

Messenger then serves the normal web version, so the app window works like before. Nothing else is touched: no network requests, no data collected, and it only runs on `https://www.messenger.com/*`.

## Installation

### Option 1: Browser extension (Chrome / Edge / Brave / any Chromium browser)

1. Download this repo (**Code → Download ZIP**) and extract it, or `git clone` it.
2. Open `chrome://extensions` (or `edge://extensions`).
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select the folder containing `manifest.json`.
5. Open the Messenger app again.

> The extension must be installed in the **same browser profile** that the Messenger app was installed from, because the PWA runs inside that browser.

### Option 2: Tampermonkey / Violentmonkey userscript

[`bypass.js`](bypass.js) already includes a userscript header, so the same file works as-is:

1. Open the Tampermonkey dashboard → **Create a new script** (`+` tab).
2. Delete the template, paste the **entire** contents of [`bypass.js`](bypass.js), and save (`Ctrl+S`).
3. Open the Messenger app again.

> Install it in the same browser profile as the Messenger app. The header only applies to userscript managers; when loaded as an extension it is just a comment and is ignored.

## Files

| File | Purpose |
| --- | --- |
| [`bypass.js`](bypass.js) | The script that strips `__pwa` / `ref` and reloads (also a valid userscript) |
| [`manifest.json`](manifest.json) | Manifest V3 for loading it as an unpacked extension |

## Notes

- This only changes the URL the app opens with. If Meta later blocks the PWA another way, the script may stop working.
- Unofficial project, not affiliated with Meta.

---

## Tiếng Việt

Tiếp tục dùng **ứng dụng Messenger trên máy tính (PWA)** đã cài sau khi Meta ngừng hỗ trợ.

### Vấn đề

Từ ngày **15/12/2025**, Meta ngừng hỗ trợ Messenger PWA (kể cả bản trên Microsoft Store). Khi mở app đã cài, nó sẽ mở một địa chỉ dạng:

```
https://www.messenger.com/?ref=homescreenpwa&__pwa=1
```

Hai tham số `__pwa` / `ref` là cờ định tuyến nội bộ. Messenger nhận ra chúng và hiện trang thông báo "ứng dụng không còn được hỗ trợ" thay vì hiện các cuộc trò chuyện của bạn.

### Cách hoạt động

Một script nhỏ chạy ngay khi trang `messenger.com` bắt đầu tải (`document_start`). Nếu URL có `__pwa`, script xoá hai tham số `__pwa` và `ref` rồi tải lại trang bằng `location.replace()`:

```
https://www.messenger.com/?ref=homescreenpwa&__pwa=1  →  https://www.messenger.com/
```

Khi đó Messenger trả về bản web bình thường, nên cửa sổ app hoạt động như trước. Script không đụng tới gì khác: không gửi request mạng nào, không thu thập dữ liệu, và chỉ chạy trên `https://www.messenger.com/*`.

### Cài đặt

#### Cách 1: Tiện ích trình duyệt (Chrome / Edge / Brave / mọi trình duyệt nhân Chromium)

1. Tải repo này về (**Code → Download ZIP**) rồi giải nén, hoặc `git clone`.
2. Mở `chrome://extensions` (hoặc `edge://extensions`).
3. Bật **Developer mode** (Chế độ dành cho nhà phát triển).
4. Bấm **Load unpacked** (Tải tiện ích đã giải nén) và chọn thư mục chứa `manifest.json`.
5. Mở lại app Messenger.

> Tiện ích phải được cài vào **đúng hồ sơ (profile) trình duyệt** đã dùng để cài app Messenger, vì app PWA chạy bên trong trình duyệt đó.

#### Cách 2: Userscript cho Tampermonkey / Violentmonkey

[`bypass.js`](bypass.js) đã có sẵn header userscript, nên dùng nguyên file đó được luôn:

1. Mở bảng điều khiển (Dashboard) của Tampermonkey → **Tạo script mới** (tab `+`).
2. Xoá đoạn mẫu có sẵn, dán **toàn bộ** nội dung [`bypass.js`](bypass.js), rồi lưu (`Ctrl+S`).
3. Mở lại app Messenger.

> Cài vào đúng profile trình duyệt có app Messenger. Phần header chỉ có tác dụng với các trình quản lý userscript; khi nạp dưới dạng tiện ích, nó chỉ là comment và bị bỏ qua.

### Các file

| File | Chức năng |
| --- | --- |
| [`bypass.js`](bypass.js) | Script xoá `__pwa` / `ref` rồi tải lại trang (đồng thời là một userscript hợp lệ) |
| [`manifest.json`](manifest.json) | Manifest V3 để nạp script dưới dạng tiện ích đã giải nén |

### Lưu ý

- Script chỉ thay đổi URL mà app mở lúc khởi động. Nếu sau này Meta chặn PWA theo cách khác, script có thể không còn tác dụng.
- Đây là dự án không chính thức, không liên quan tới Meta.
