import prisma from '@/db/prisma';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const client = await createClient();
  const session = await client.auth.getUser();

  const user = await prisma.user.findFirst({
    where: { oauthUserId: session?.data.user?.id },
    include: { profile: { include: { settings: true } }, subscriptions: true },
  });

  return new Response(JSON.stringify(user), { status: 200 });
}
