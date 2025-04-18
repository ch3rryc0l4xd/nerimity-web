import { JSXElement, Match, Show, Switch } from "solid-js";

export function FoxEarsBorder(props: {
  children?: JSXElement;
  hovered?: boolean;
  size: number;
  offset?: number;
  color: "gold" | "brown";
}) {
  return (
    <img
      class="cat-ears"
      style={{
        position: "absolute",
        width: "100%",
        "margin-top": (props.offset || 0) * props.size + "px",
        "z-index": "1111",
      }}
      src={`/borders/fox-ears-${props.color}.png`}
    />
  );
}
