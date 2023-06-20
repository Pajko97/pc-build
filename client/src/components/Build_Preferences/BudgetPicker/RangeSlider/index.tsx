import React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";

const RangeSlider = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      className="horizontal-slider"
      renderMark={(props: any) => {
        return (
          <div
            {...props}
            style={{ height: '1rem'}}
          ></div>
        );
      }}
    />
  );
};
export default RangeSlider;