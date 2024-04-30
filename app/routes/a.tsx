import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getUser } from "~/db.server";

export async function loader({}: LoaderFunctionArgs) {
  return {
    user: await getUser(),
  };
}

export default function Component() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Hi {data.user.name}! From A</h1>
      <p>Navigation:</p>
      <ul>
        <li>
          <Link to=".">Index</Link>
        </li>
        <li>
          <Link to="a">A</Link>
        </li>
      </ul>
      <p>Outlet:</p>
      <Outlet />
    </div>
  );
}
