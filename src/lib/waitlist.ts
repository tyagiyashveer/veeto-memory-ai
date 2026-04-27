import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  source: z.enum(["hero", "footer_cta"]),
  struggle: z.string().trim().max(100).optional().nullable(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export async function submitWaitlist(input: WaitlistInput) {
  const parsed = waitlistSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const { error } = await supabase.from("waitlist_signups").insert({
    email: parsed.data.email,
    source: parsed.data.source,
    struggle: parsed.data.struggle ?? null,
  });
  if (error) {
    console.error("Waitlist submit error:", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
  return { ok: true as const };
}
