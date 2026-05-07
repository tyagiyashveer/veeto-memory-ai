ALTER TABLE public.waitlist_signups
  ADD COLUMN IF NOT EXISTS full_name text,
  ADD COLUMN IF NOT EXISTS linkedin_url text,
  ADD COLUMN IF NOT EXISTS role text,
  ADD COLUMN IF NOT EXISTS people_per_month text,
  ADD COLUMN IF NOT EXISTS biggest_challenge text,
  ADD COLUMN IF NOT EXISTS current_tool text,
  ADD COLUMN IF NOT EXISTS wants_beta boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS referral_source text;

DROP POLICY IF EXISTS "Anyone can sign up to waitlist" ON public.waitlist_signups;

CREATE POLICY "Anyone can sign up to waitlist"
ON public.waitlist_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(coalesce(source, '')) <= 50
  AND (struggle IS NULL OR char_length(struggle) <= 100)
  AND (full_name IS NULL OR char_length(full_name) <= 120)
  AND (linkedin_url IS NULL OR char_length(linkedin_url) <= 300)
  AND (role IS NULL OR char_length(role) <= 60)
  AND (people_per_month IS NULL OR char_length(people_per_month) <= 30)
  AND (biggest_challenge IS NULL OR char_length(biggest_challenge) <= 120)
  AND (current_tool IS NULL OR char_length(current_tool) <= 60)
  AND (phone IS NULL OR char_length(phone) <= 30)
  AND (referral_source IS NULL OR char_length(referral_source) <= 200)
);