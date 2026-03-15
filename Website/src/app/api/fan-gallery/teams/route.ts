import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import type { TeamConfig } from "@/lib/fan-gallery/types";

const DATA_PATH = path.join(process.cwd(), "src/data/fan-gallery-teams.json");

function readTeams(): TeamConfig[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as TeamConfig[];
}

function writeTeams(teams: TeamConfig[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(teams, null, 2), "utf-8");
}

export async function GET() {
  try {
    const teams = readTeams();
    return NextResponse.json(teams);
  } catch (err) {
    console.error("Failed to read team configs:", err);
    return NextResponse.json(
      { error: "Failed to read team configs." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newTeam: TeamConfig = await request.json();

    if (!newTeam.slug) {
      return NextResponse.json(
        { error: "Missing required field: slug" },
        { status: 400 }
      );
    }

    const teams = readTeams();

    if (teams.some((t) => t.slug === newTeam.slug)) {
      return NextResponse.json(
        { error: `Team with slug "${newTeam.slug}" already exists.` },
        { status: 409 }
      );
    }

    teams.push(newTeam);
    writeTeams(teams);

    return NextResponse.json({ success: true, slug: newTeam.slug }, { status: 201 });
  } catch (err) {
    console.error("Failed to create team config:", err);
    return NextResponse.json(
      { error: "Failed to create team config." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const updatedTeam: TeamConfig = await request.json();

    if (!updatedTeam.slug) {
      return NextResponse.json(
        { error: "Missing required field: slug" },
        { status: 400 }
      );
    }

    const teams = readTeams();
    const index = teams.findIndex((t) => t.slug === updatedTeam.slug);

    if (index === -1) {
      return NextResponse.json(
        { error: `Team with slug "${updatedTeam.slug}" not found.` },
        { status: 404 }
      );
    }

    teams[index] = updatedTeam;
    writeTeams(teams);

    return NextResponse.json({ success: true, slug: updatedTeam.slug });
  } catch (err) {
    console.error("Failed to update team config:", err);
    return NextResponse.json(
      { error: "Failed to update team config." },
      { status: 500 }
    );
  }
}
