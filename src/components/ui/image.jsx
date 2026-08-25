import * as React from "react";
import { cn } from "@/lib/utils";

const Image = React.forwardRef(
  (
    {
      src,
      fittingType = "fill",
      focalPointX,
      focalPointY,
      className,
      style,
      alt = "",
      ...props
    },
    ref
  ) => {
    const objectFitClass = fittingType === "fit" ? "object-contain" : "object-cover";
    const objectPosition =
      typeof focalPointX === "number" && typeof focalPointY === "number"
        ? `${focalPointX * 100}% ${focalPointY * 100}%`
        : undefined;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(objectFitClass, className)}
        style={{ objectPosition, ...style }}
        loading={props.loading || "lazy"}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
