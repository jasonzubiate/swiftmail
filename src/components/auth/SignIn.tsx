import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="px-4 py-3 rounded-md bg-zinc-50 text-zinc-950 font-medium"
      >
        Signin with Google
      </button>
    </form>
  );
}
