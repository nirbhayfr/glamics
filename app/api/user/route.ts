import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    username: "rahul",
    email: "rahul@gmail.com",
  });
}
