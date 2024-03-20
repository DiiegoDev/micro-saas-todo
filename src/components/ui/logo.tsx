import { ListBulletIcon } from "@radix-ui/react-icons";

export function Logo() {
  return (
    <div className="h-5 w-5 bg-gray-900 rounded flex items-center justify-center">
      <ListBulletIcon className="h-4 w-4 text-primary-foreground" />
    </div>
  );
}
