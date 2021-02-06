import { useMediaQuery, useTheme } from "@material-ui/core";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
type size = typeof sizes[number];

export default function useResolution() {
  const theme = useTheme();

  return {
    down: hasSize((x) => theme.breakpoints.down(x)),
    up: hasSize((x) => theme.breakpoints.up(x)),

    get isMobile() {
      return this.down.sm;
    },
  };
}

export function hasSize(
  calculator: (size: size) => string
): { [s in size]: boolean } {
  return sizes.reduce((p, c) => {
    p[c] = useMediaQuery(calculator(c), { noSsr: true });
    return p;
  }, {} as any);
}
