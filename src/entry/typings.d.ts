declare module '*.scss' {
  const style: {
    [className: string]: string;
  };
  export default style;
}

declare const isLocalEnvironment: boolean;
