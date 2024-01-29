import { NextRequest, ImageResponse } from "next/server";
import { renderSVG } from "../../../utils/hqr";

export const config = {
  runtime: "edge",
};

export default async function (req: NextRequest) {
  const url = new URL(req.url);
  const text = url.searchParams.get("text") || '';

  const { svg, width, height } = await renderSVG(`${decodeURIComponent(text)}`);

  const img = <img src={svg} />

  return new ImageResponse(img, {
    width: width,
    height: height,
  });
}
