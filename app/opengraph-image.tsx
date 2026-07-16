import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ayoub Bellaoui — Backend Web Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0b0a08",
          padding: 80,
          color: "#f6f1e7",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#ff7a1a", marginBottom: 24 }}>
          {"<AB/>"}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          Ayoub Bellaoui
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 20, color: "#ff7a1a" }}>
          Backend Web Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
