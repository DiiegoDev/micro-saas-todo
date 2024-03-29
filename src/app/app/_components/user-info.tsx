"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type props = {
  user: Session["user"];
};

export function UserInfo({ user }: props) {
  if (!user) return;

  const firstLetterEmail = user?.email ? user.email[0] : "";

  return (
    <>
      <Avatar>
        <AvatarFallback>{firstLetterEmail}</AvatarFallback>
      </Avatar>
      <p>{user.email}</p>

      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  );
}
