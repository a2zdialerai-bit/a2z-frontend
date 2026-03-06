"use client";

export function TopBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0b1020]/70 px-6 py-5 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="mt-1 text-sm text-white/50">{subtitle}</p>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Backend Connected
          </div>
        </div>
      </div>
    </header>
  );
}
