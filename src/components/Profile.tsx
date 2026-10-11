import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-gray-200">
        <Image src={imageUrl} alt={name} fill sizes="144px" className="object-cover" />
      </div>
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="text-sm text-gray-500">{bio}</p>
    </div>
  );
}
