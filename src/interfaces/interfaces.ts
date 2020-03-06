export interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
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
