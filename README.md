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

Create a new userscript and paste:

```js
// ==UserScript==
// @name         Messenger PWA Bypass
// @namespace    https://github.com/daongochuy2516/messenger-pwa-bypass
// @version      1.0
// @description  Strip PWA flags so the Messenger app loads the normal web version
// @match        https://www.messenger.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
```

Then paste the contents of [`bypass.js`](bypass.js) below the header and save.

## Files

| File | Purpose |
| --- | --- |
| [`bypass.js`](bypass.js) | The script that strips `__pwa` / `ref` and reloads |
| [`manifest.json`](manifest.json) | Manifest V3 for loading it as an unpacked extension |

## Notes

- This only changes the URL the app opens with. If Meta later blocks the PWA another way, the script may stop working.
- Unofficial project, not affiliated with Meta.

---

## Tiếng Việt

Dùng tiếp **ứng dụng Messenger trên máy tính (PWA)** sau khi Meta ngừng hỗ trợ.

### Vấn đề

Từ **15/12/2025**, Meta ngừng hỗ trợ Messenger PWA (kể cả bản trên Microsoft Store). Khi mở app, nó truy cập địa chỉ dạng `https://www.messenger.com/?ref=homescreenpwa&__pwa=1`; Messenger nhận ra cờ `__pwa` và hiện thông báo app không còn được hỗ trợ thay vì hiện tin nhắn.

### Cách hoạt động

Script chạy ngay khi trang bắt đầu tải (`document_start`). Nếu URL có `__pwa`, nó xoá tham số `__pwa` và `ref` rồi tải lại trang. Messenger sẽ trả về bản web bình thường nên cửa sổ app dùng được như cũ. Script không gửi request nào, không thu thập dữ liệu, và chỉ chạy trên `https://www.messenger.com/*`.

### Cài đặt

**Cách 1: Tiện ích trình duyệt (Chrome / Edge / Brave / Chromium)**

1. Tải repo về (**Code → Download ZIP** rồi giải nén) hoặc `git clone`.
2. Mở `chrome://extensions` (hoặc `edge://extensions`).
3. Bật **Developer mode** (Chế độ nhà phát triển).
4. Bấm **Load unpacked** (Tải tiện ích đã giải nén) và chọn thư mục chứa `manifest.json`.
5. Mở lại app Messenger.

> Phải cài tiện ích vào **đúng hồ sơ (profile) trình duyệt** đã dùng để cài app Messenger, vì app PWA chạy bên trong trình duyệt đó.

**Cách 2: Tampermonkey / Violentmonkey**

Tạo userscript mới, dán phần header ở [mục Option 2](#option-2-tampermonkey--violentmonkey-userscript) phía trên, rồi dán nội dung [`bypass.js`](bypass.js) bên dưới header và lưu lại.

### Lưu ý

- Script chỉ đổi URL lúc app mở. Nếu sau này Meta chặn PWA theo cách khác thì script có thể không còn tác dụng.
- Dự án không chính thức, không liên quan tới Meta.
