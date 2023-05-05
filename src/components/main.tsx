export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative pb-12 lg:overflow-auto lg:pb-0">{children}</main>
  );
}
