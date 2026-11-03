import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-semibold">Página não encontrada</h1>
      <a href="/" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">Conhecer o projetor</a>
    </main>
  ),
});

function RootLayout() {
  return <Outlet />;
}
