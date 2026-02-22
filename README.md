# Web App Wrappers (Tauri)

Small, focused Tauri wrappers for popular web apps. Each wrapper loads a single site in a native window, with minimal frontend code so anyone can clone, build, and ship quickly.

## Included Apps
- `X` — wrapper for `https://x.com`
- `YouTube` — wrapper for `https://youtube.com`

## Requirements
- Rust toolchain
- Tauri prerequisites for your OS
- `bun`

## Build And Run
Dev (runs the app):
```
cd X
bun install
bun run tauri dev
```

Release build:
```
cd X
bun install
bun run tauri build
```

Swap `X` with `YouTube` to build that app.

Binary output:
```
src-tauri/target/release/<app-binary>
```

## Install For Rofi (Linux)
1) Copy the binaries into your user PATH:
```
mkdir -p ~/.local/bin
cp /home/<yourpath>/Wrappers/X/src-tauri/target/release/x-wrapper ~/.local/bin/
```

2) Copy the icons so Rofi can find them:
```
mkdir -p ~/.local/share/icons/hicolor/128x128/apps
cp /home/<yourpath>/Wrappers/X/src-tauri/icons/128x128.png ~/.local/share/icons/hicolor/128x128/apps/x-wrapper.png
```

3) Create desktop entries:
```
[Desktop Entry]
Type=Application
Name=X
Exec=/home/<user>/.local/bin/x-wrapper
Icon=x-wrapper
Terminal=false
Categories=Network;
```

4) Refresh the desktop database (optional):
```
update-desktop-database ~/.local/share/applications
```

## Notes (Linux)
If the app freezes after a few seconds and logs mention `autoaudiosink`, install GStreamer:
```
sudo pacman -S gstreamer gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gst-libav
```

## Project Layout (Per App)
- `src-tauri/tauri.conf.json`: window config (URL, size, decorations)
- `src-tauri/src/lib.rs`: Tauri bootstrap
- `src/main.ts`: minimal frontend bootstrapping
