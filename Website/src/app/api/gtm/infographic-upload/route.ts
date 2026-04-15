import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: Request) {
  try {
    const { solution, htmlContent } = await request.json()

    if (!solution || !htmlContent) {
      return NextResponse.json(
        { error: "Missing solution or htmlContent" },
        { status: 400 }
      )
    }

    // Validate HTML content
    if (!htmlContent.includes("<!DOCTYPE") && !htmlContent.includes("<html")) {
      return NextResponse.json(
        { error: "Invalid HTML content" },
        { status: 400 }
      )
    }

    const dir = path.join(process.cwd(), "public/gtm")
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const filePath = path.join(dir, `${solution}-infographic.html`)
    fs.writeFileSync(filePath, htmlContent, "utf-8")

    return NextResponse.json({
      success: true,
      previewUrl: `/api/gtm/infographic-preview?solution=${solution}`,
      message: "Infographic uploaded successfully",
    })
  } catch (error) {
    console.error("Error uploading infographic:", error)
    return NextResponse.json(
      { error: "Failed to upload infographic" },
      { status: 500 }
    )
  }
}
