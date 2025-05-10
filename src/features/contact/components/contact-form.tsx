"use client";

import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { ContactFormValues } from "../form/contact";

const ContactForm = ({
  onSubmit,
  isLoading,
}: {
  onSubmit: (values: ContactFormValues) => void;
  isLoading?: boolean;
}) => {
  const form = useFormContext<ContactFormValues>();
  const { handleSubmit, control } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-[#F5E1DA] p-8 max-w-screen-sm rounded-md flex-1 "
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan nama"
                  className="bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="bg-white"
                  placeholder="Masukkan email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No HP</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  className="bg-white"
                  placeholder="Masukkan No Handphone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  className="bg-white"
                  placeholder="Mari beri tahu kami tentang pesan Anda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size={"lg"}
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Kirim Pesan"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
