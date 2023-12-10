"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const customerRegistrationSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
});

export default function Page() {
  const [isPasswordShowed, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof customerRegistrationSchema>>({
    resolver: zodResolver(customerRegistrationSchema),
    defaultValues: {
      name: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof customerRegistrationSchema>
  ) => {
    const res = await fetch("/api", {
      body: JSON.stringify(values),
      method: "POST",
    });
    const json = await res.json();
    console.log({ json });
  };

  return (
    <main className="flex flex-col items-center">
      <Card className="max-w-md w-full flex flex-col mt-28 px-4">
        <CardHeader>
          <CardTitle className="text-center">Daftar</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 self-center w-full">
          <Form {...form}>
            <form
              id="customer-registration-form"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input id="name" className="mt-1" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <Input className="mt-1" id="username" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="mt-1 pr-12"
                          type={isPasswordShowed ? "text" : "password"}
                          id="password"
                          {...field}
                        />
                      </FormControl>
                      <Button
                        onClick={() => setShowPassword((curent) => !curent)}
                        className="absolute top-1 right-1 p-1 h-min text-gray-700"
                        variant="ghost"
                      >
                        {isPasswordShowed ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </FormItem>
                )}
              ></FormField>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            form="customer-registration-form"
            className="w-full"
          >
            Daftar
          </Button>

          <p>Sudah punya akun</p>
        </CardFooter>
      </Card>
    </main>
  );
}
