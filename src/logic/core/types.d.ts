interface IBuilderFunctionArgs {
  root: HTMLElement;
  on: ControllerEventHandler;
  query: Queryfunction
}
export type BuilderFuncion = (args: IBuilderFunctionArgs) => void;

export type ControllerEventHandler = (
  eventName: string,
  eventHandler: (...any) => any
) => void;

export type Queryfunction = (
  queryStrirng: string,
  all?: boolean
) => HTMLElement | null | NodeListOf<HTMLElement>;
