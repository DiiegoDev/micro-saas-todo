import { PropsWithChildren } from "react";
import { MainSidebar } from "./_components/main-sidebar";
import { auth } from "@/services/auth";

export default async function layout({ children }: PropsWithChildren) {
  const session = await auth();
  return (
    <div className="grid grid-cols-[1fr_4fr]">
      <MainSidebar user={session?.user} />

      {children}
    </div>
  );
}
