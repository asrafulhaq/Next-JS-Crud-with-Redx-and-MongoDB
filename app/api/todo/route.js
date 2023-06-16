import mongoDBConnect from "@/config/db";
import { NextResponse } from "next/server";
import Todo from "@/models/Todo";

/**
 * Get All users
 */
export const GET = async () => {
  try {
    await mongoDBConnect();

    const todos = await Todo.find();

    return NextResponse.json({ todos });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

/**
 * Get All users
 */
export const POST = async (request) => {
  try {
    await mongoDBConnect();

    const data = await request.json();

    const todo = await Todo.create({
      ...data,
    });

    return NextResponse.json({ todo });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

/**
 * Get All users
 */
export const DELETE = async (request) => {
  try {
    await mongoDBConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const todo = await Todo.findByIdAndDelete(id);

    return NextResponse.json({ todo });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
