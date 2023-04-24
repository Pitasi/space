import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "~/env.mjs";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export type UploadResponse = {
  path: string;
};

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${env.CF_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.CF_ACCESS_KEY_ID,
    secretAccessKey: env.CF_SECRET_ACCESS_KEY,
  },
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user.admin) {
    return new Response("Unauthorized", { status: 401 });
  }

  const formData = await request.formData();
  const f = formData.get("file") as File;
  if (!f) {
    return new Response("Expected file", { status: 400 });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const fileID: string = uuidv4();
  const extension = f.name.split(".").at(-1);
  const filename = extension ? `${fileID}.${extension}` : fileID;

  await S3.send(
    new PutObjectCommand({
      Bucket: env.CF_BUCKET,
      Key: "uploads/" + filename,
      /** @ts-expect-error ArrayBuffer works fine but ts reports it */
      Body: await f.arrayBuffer(),
      ContentType: f.type,
    })
  );

  return NextResponse.json({
    path: `https://assets.anto.pt/uploads/${filename}`,
  } as UploadResponse);
}
