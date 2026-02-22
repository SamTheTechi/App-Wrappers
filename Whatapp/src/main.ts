import { getCurrentWebview } from "@tauri-apps/api/webview";

const MIN_ZOOM = 0.2;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.1;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

let zoom = 1;
const webview = getCurrentWebview();

const applyZoom = async (value: number) => {
  zoom = clamp(Math.round(value * 100) / 100, MIN_ZOOM, MAX_ZOOM);
  await webview.setZoom(zoom);
};

window.addEventListener("keydown", (event) => {
  if (!event.ctrlKey && !event.metaKey) return;

  const key = event.key;
  const isZoomIn = key === "+" || key === "=";
  const isZoomOut = key === "-";
  const isReset = key === "0";

  if (!isZoomIn && !isZoomOut && !isReset) return;

  event.preventDefault();

  if (isReset) {
    void applyZoom(1);
    return;
  }

  const next = isZoomIn ? zoom + ZOOM_STEP : zoom - ZOOM_STEP;
  void applyZoom(next);
});
