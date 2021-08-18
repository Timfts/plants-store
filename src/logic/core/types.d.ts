interface IBuilderFunctionArgs {
  root: HTMLElement;
  on: ControllerEventHandler;
}
export type BuilderFuncion = (args: IBuilderFunctionArgs) => void;

export type ControllerEventHandler = (
  eventName: string,
  eventHandler: (...any) => any
) => void;
