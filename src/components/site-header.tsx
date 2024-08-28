export async function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 center">
        <div className="title">Customer Data Catalog</div>
      </div>
    </header>
  );
}
