export interface iGenericModalContent {
  title: string;
  submitDisplayText: string;
  cancelDisplayText: string;
  onSubmit: () => void;
  onCancel: () => void;
}
