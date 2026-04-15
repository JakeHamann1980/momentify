import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const solution = searchParams.get("solution")

  if (!solution || typeof solution !== "string") {
    return NextResponse.json({ error: "Missing solution" }, { status: 400 })
  }

  try {
    // Check if file exists in public directory
    const publicPath = path.join(process.cwd(), `public/gtm/${solution}-infographic.html`)

    if (!fs.existsSync(publicPath)) {
      return NextResponse.json({ error: "Infographic not found" }, { status: 404 })
    }

    const content = fs.readFileSync(publicPath, "utf-8")
    return new NextResponse(content, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    })
  } catch (error) {
    console.error("Error serving infographic:", error)
    return NextResponse.json({ error: "Failed to load infographic" }, { status: 500 })
  }
}
