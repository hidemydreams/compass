import { Section } from '@/types/types';
import prisma from '@/db/prisma';
import { getDBUser } from '@/shared/server';

export async function GET() {
  // req: NextRequest,
  // { params }: { params: Promise<{ id: string }> },
  // const id = (await params).id;

  // const template = await prisma.template.findFirst({
  //   where: { id },
  // });
  //
  // if (!template) {
  //   return new Response(JSON.stringify({ error: 'Template not found' }), {
  //     status: 404,
  //   });
  // }

  const user = await getDBUser();

  const sections = await prisma.userSection.findMany({
    where: { userProfileId: user?.profile?.id },
  });

  const userSections = sections.map(
    (section) => section?.data,
  ) as unknown as Section[];

  return new Response(JSON.stringify({ sections: userSections }), {
    status: 200,
  });
}
