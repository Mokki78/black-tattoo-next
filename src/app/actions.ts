"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional(), // honeypot
});

export async function sendEmail(formData: FormData) {
  const data = Object.fromEntries(formData);

  const parsed = ContactSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  // 🛡 Honeypot spam protection
  if (parsed.data.company) {
    return { success: true }; // silently ignore bots
  }

  const { name, email, message } = parsed.data;

  await resend.emails.send({
    from: "Contact <onboarding@resend.dev>",
    to: "@fenindol.resend.app",
    subject: `New message from ${name}`,
    replyTo: email,
    text: message,
  });

  return { success: true };
}
