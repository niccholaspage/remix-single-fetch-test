import type { AppLoadContext } from "@remix-run/node";

declare module "@remix-run/node" {
  interface AppLoadContext {
    dataCache?: Record<string, Promise<any>>;
  }
}

export async function getUser() {
  console.log(new Date().toLocaleTimeString() + ": getUser() called");

  // Wait for 500ms to simulate a slow database query
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    id: 1,
    name: "Ryan Florence",
  };
}

// export function cacheOnContext<T>(
//   context: AppLoadContext,
//   key: string,
//   fn: () => Promise<T>
// ) {
//   context.dataCache = context.dataCache || {};

//   if (!context.dataCache[key]) {
//     context.dataCache[key] = fn();
//   }

//   return context.dataCache[key];
// }

// export function getCachedUser(context: AppLoadContext) {
//   return cacheOnContext(context, "user", getUser);
// }
