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
