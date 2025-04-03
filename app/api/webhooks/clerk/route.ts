import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Ensure you have a Prisma client instance

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Extract relevant fields from the payload
    const { data } = body;
    const { id, first_name, last_name, email_addresses, profile_image_url } = data;

    // Validate email_addresses and extract the first email
    const email = Array.isArray(email_addresses) && email_addresses.length > 0
      ? email_addresses[0]?.email_address
      : null;

    if (!email) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Save user in your database
    await prisma.user.create({
      data: {
        email,
        firstName: first_name || null,
        lastName: last_name || null,
        imageUrl: profile_image_url || null,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Typecast error to Error to access its message property
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error saving user:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}