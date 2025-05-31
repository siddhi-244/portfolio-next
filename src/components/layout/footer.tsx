export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Siddhi Bhanushali. All rights reserved.</p>
      </div>
    </footer>
  );
}
