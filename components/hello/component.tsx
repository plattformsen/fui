/**
 * This is just an example component that was used to test
 * the workflow of the monorepo setup. It will eventuelly be
 * archived or replaced with something more useful.
 *
 * ```tsx
 * import Hello from "@fui/hello";
 *
 * return (
 *   <Hello name="John D." />
 * );
 * ```
 *
 * @module
 */

import type { JSX } from "preact/jsx-runtime";
import { DEFAULT_NAME_EXAMPLE } from "@fui/shared";

/** Props for the {@link Hello} component. */
export interface HelloProps {
  /**
   * The name to say hello to.
   *
   * Defaults to {@link DEFAULT_NAME_EXAMPLE}.
   */
  name?: string;
}

/** A simple component that greets a user by name. */
export default function Hello({
  name = DEFAULT_NAME_EXAMPLE,
}: HelloProps = {}): JSX.Element {
  return <p>Hello, {name}!</p>;
}
