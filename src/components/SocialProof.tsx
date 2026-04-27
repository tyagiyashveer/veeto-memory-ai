const avatars = [
  "linear-gradient(135deg, hsl(252 80% 60%), hsl(220 90% 56%))",
  "linear-gradient(135deg, hsl(330 80% 65%), hsl(280 70% 60%))",
  "linear-gradient(135deg, hsl(220 90% 56%), hsl(280 70% 60%))",
  "linear-gradient(135deg, hsl(252 80% 60%), hsl(330 80% 65%))",
  "linear-gradient(135deg, hsl(280 70% 60%), hsl(220 90% 56%))",
];

const SocialProof = () => {
  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <div className="flex -space-x-2">
        {avatars.map((bg, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full border-2 border-background shadow-sm"
            style={{ background: bg }}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        Join 1,000+ on the waitlist
      </p>
    </div>
  );
};

export default SocialProof;
