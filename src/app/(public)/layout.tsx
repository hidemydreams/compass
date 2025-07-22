// export const metadata: Metadata = {
//   title: `${appName} – Connect Everything in One Link`,
//   description:
//     'Create your personal bio page with links, social profiles, and more.',
//   keywords: [
//     'linktree alternative',
//     'bio link',
//     'profile page',
//     'personal branding',
//   ],
//   metadataBase: new URL(appUrl),
// };

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default PublicLayout;
