import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        🚀 AutoFlow AI
      </h1>

      <p>Supabase is configured successfully.</p>

      <Button>Continue</Button>
    </main>
  );
}