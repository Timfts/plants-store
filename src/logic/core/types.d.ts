interface IBuilderFunctionArgs {
  root: HTMLElement;
  on: ControllerEventHandler;
  query: Queryfunction;
  queryAll: QueryAllFunction;
  emit: (eventName: string, payload?: Object) => void;
}
export type BuilderFuncion = (args: IBuilderFunctionArgs) => void;

export type ControllerEventHandler = (
  eventName: string,
  eventHandler: (...any) => any
) => void;

export type Queryfunction = (queryStrirng: string) => HTMLElement | null;

export type QueryAllFunction = (
  queryStrirng: string
) => NodeListOf<HTMLElement>;
