import * as React from "react";
import { Platform, TextInput, type TextInputProps } from "react-native";
import { cn } from "@/lib/utils";

function Input({
  className,
  placeholderClassName,
  ...props
}: TextInputProps & {
  ref?: React.RefObject<TextInput>;
}) {
  return (
    <TextInput
      className={cn(
        "rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground web:ring-offset-background file:bg-transparent web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
        props.editable === false && "opacity-50 web:cursor-not-allowed",
        className
      )}
      style={{
        height: Platform.select({ web: 40, default: 48 }), // h-10 native:h-12
        width: Platform.select({ web: "100%" }), // web:w-full
        paddingHorizontal: 12, // px-3
        paddingVertical: Platform.select({ web: 8 }), // web:py-2
        fontSize: Platform.select({
          web: 16, // text-base
          ios: 17, // native:text-lg
          android: 16,
        }),
        lineHeight: Platform.select({
          native: 21, // native:leading-[1.25]
        }),
      }}
      placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
      {...props}
    />
  );
}

export { Input };
