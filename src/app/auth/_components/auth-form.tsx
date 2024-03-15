"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => console.log(data));

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="mx-auto w-96">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold">
            Login with Magic Link
          </CardTitle>
          <CardDescription>
            Enter your email to receive a magic link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register("email")}
              />
            </div>
            <Button className="w-full">Send Magic Link</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
