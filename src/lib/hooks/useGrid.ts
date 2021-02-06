import { makeStyles } from "@material-ui/core";

const RANGE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
type GridProps =
  | "container"
  | `columnStart${typeof RANGE[number]}`
  | `columnEnd${typeof RANGE[number]}`
  | `columnSpan${typeof RANGE[number]}`
  | `rowStart${typeof RANGE[number]}`
  | `rowEnd${typeof RANGE[number]}`
  | `rowSpan${typeof RANGE[number]}`;

type UseGridProps = {
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
};
const gridStyles: any = {
  container: ({
    gap = 0,
    columnGap = gap || 0,
    rowGap = gap || 0,
  }: UseGridProps) => ({
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap,
    gridRowGap: rowGap,
  }),
};

RANGE.forEach((value) => {
  gridStyles[`columnStart${value}`] = { gridColumnStart: value };
  gridStyles[`columnEnd${value}`] = { gridColumnEnd: value };
  gridStyles[`columnSpan${value}`] = { gridColumnEnd: `span ${value}` };
  gridStyles[`rowStart${value}`] = { gridRowStart: value };
  gridStyles[`rowEnd${value}`] = { gridRowEnd: value };
  gridStyles[`rowSpan${value}`] = { gridRowEnd: `span ${value}` };
});

const useGrid = makeStyles<any, UseGridProps, GridProps>(gridStyles as any);

export default useGrid;
