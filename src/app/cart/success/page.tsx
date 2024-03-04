import { env } from "@/env";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Success() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-10 p-24">
      Success payment return url
      <form
        action={async () => {
          "use server";
          redirect("/");
        }}
      >
        <button type="submit">wróć do sklepu</button>
      </form>
    </main>
  );
}
