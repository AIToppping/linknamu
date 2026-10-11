type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-center font-medium shadow-sm transition hover:bg-gray-100 active:scale-[0.99]"
    >
      {title}
    </a>
  );
}
