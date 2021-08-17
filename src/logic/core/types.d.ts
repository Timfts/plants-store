interface IBuilderFunctionArgs {
  root: Element;
  on: ControllerEventHandler;
}
export type BuilderFuncion = (args: IBuilderFunctionArgs) => void;

export type ControllerEventHandler = (
  eventName: string,
  eventHandler: EventListenerOrEventListenerObject
) => void;
