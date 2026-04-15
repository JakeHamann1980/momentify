import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const solution = searchParams.get("solution")

  if (!solution) {
    return NextResponse.json({ exists: false })
  }

  try {
    const publicPath = path.join(process.cwd(), `public/gtm/${solution}-infographic.html`)
    const exists = fs.existsSync(publicPath)
    return NextResponse.json({ exists })
  } catch {
    return NextResponse.json({ exists: false })
  }
}
