"use client";

import UnauthorizePage from "../unauthorize";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  profileSchema,
  ProfileFormValues,
} from "@/features/profile/form/profile";
import ProfileForm from "@/features/profile/components/profile-form";

const ProfilePage = () => {
  const [session] = useState({
    user: {
      username: "johnnydoe",
      name: "John Doe",
      email: "johndoe@example.com",
      nohp: "081234567890",
      photo_profile: "",
    },
  });

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: session.user.username,
      name: session.user.name,
      email: session.user.email,
      nohp: session.user.nohp,
      photo_profile: null,
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form Data:", data);
  };

  if (!session) {
    return <UnauthorizePage />;
  }

  return (
    <FormProvider {...form}>
      <ProfileForm onSubmit={onSubmit} />
    </FormProvider>
  );
};

export default ProfilePage;
