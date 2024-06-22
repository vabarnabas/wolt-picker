export interface Modal {
  modal: string;
  id?: string;
  action?: () => void;
}

export enum ModalTypes {
  ADDRESS = "address",
  NEW_ADDRESS = "new-address",
}
