import { version } from "node:process";

export default function Home() {
  console.log(`Version: ${version}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
    </main>
  );
}
