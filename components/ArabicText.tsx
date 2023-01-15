import { Text, TextProps } from "./Themed";

export function ArabicText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "uthman-taha-naskh" }]}
    />
  );
}
