import { z } from "zod";

export const nameSchema = z.string().min(1, "Name is required");

export const messageSchema = z.string().min(5, "Message is too short");
