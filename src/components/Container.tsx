import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`w-full ${props.className ? props.className : ""}`} // Removed padding and max-width
    >
      {props.children}
    </div>
  );
}