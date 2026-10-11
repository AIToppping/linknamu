import LinkCard from "@/components/LinkCard";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard key={link.id} title={link.title} url={link.url} />
      ))}
    </div>
  );
}
