import Profile from "@/components/Profile";
import LinkList, { LinkItem } from "@/components/LinkList";

const profile = {
  name: "김클로",
  bio: "세계 최강 바이브 클로",
  imageUrl: "https://placehold.co/200x200",
};

const links: LinkItem[] = [
  { id: "1", title: "GitHub", url: "https://github.com" },
  { id: "2", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "3", title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-6 py-12">
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      <LinkList links={links} />
    </main>
  );
}
