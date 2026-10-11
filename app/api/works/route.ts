import { connectDB } from "@/lib/mongodb";
import Work from "@/models/Work";

export async function GET() {
  try {
    await connectDB();

    const works = await Work.find()
      .sort({ createdAt: -1 })
      .lean();

    return Response.json({
      success: true,
      data: works,
    });
  } catch (error) {
    console.error("GET /api/works ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch works",
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}
