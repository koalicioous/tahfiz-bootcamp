import { Text, TextProps } from "./Themed";

export function LPMQText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "lpmq" }]} />;
}
