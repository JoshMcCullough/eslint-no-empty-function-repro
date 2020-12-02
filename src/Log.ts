export function Log(message: string): MethodDecorator {
  return () => {
    console.log(message);
  };
}