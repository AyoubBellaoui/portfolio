export function BrowserFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-hover px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted">{label}</span>
      </div>
      <div className="relative aspect-[2/1] w-full overflow-hidden">{children}</div>
    </div>
  );
}
