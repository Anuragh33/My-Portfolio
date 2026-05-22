import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070b0a",
          borderRadius: 8,
          color: "#5ed29c",
          fontSize: 20,
          fontWeight: 700
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
