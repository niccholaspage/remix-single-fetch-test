import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCachedUser } from "~/db.server";

export async function loader({ context }: LoaderFunctionArgs) {
  return {
    user: await getCachedUser(context),
  };
}

export default function Component() {
  const { user } = useLoaderData<typeof loader>();
  return <p>This is just the A, {user.name}</p>;
}
