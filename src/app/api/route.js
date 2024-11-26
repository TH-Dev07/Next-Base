import { NextResponse } from 'next/server';

export async function GET(req) {
  return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(req) {
  const data = await req.json();
  return NextResponse.json({ message: 'Data received', data }, { status: 201 });
}

export async function PUT(req) {
  const data = await req.json();
  return NextResponse.json({ message: 'Data updated', data }, { status: 200 });
}

export async function DELETE(req) {
  const data = await req.json();
  return NextResponse.json({ message: 'Data deleted', data }, { status: 200 });
}
 