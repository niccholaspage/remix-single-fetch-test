import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "~/db.server";

export async function loader({ context }: LoaderFunctionArgs) {
  return {
    user: await getUser(),
  };
}

export default function Component() {
  const { user } = useLoaderData<typeof loader>();
  return <p>This is just the index, {user.name}</p>;
}
