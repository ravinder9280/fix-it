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
         // Use the string ID as it matches your schema
        email,
        firstName: first_name || null,
        lastName: last_name || null,
        imageUrl: profile_image_url || null,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}