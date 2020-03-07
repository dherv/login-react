export interface IValues {
  username: string;
  password: string;
  email?: string;
}

export interface IEntryData {
  initialValues: IValues;
  components: IInputData[];
}

interface IInputData {
  name: string;
  label: string;
  type: string;
}
