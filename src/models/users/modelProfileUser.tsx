export interface ModelProfileUser {
  id: string;
  first_name: string;
  last_name: string;
}

export interface ModelProfileFormProps {
  loading: boolean;
  data: any;
  callback: (data: ModelProfileUser) => void;
  currentUser: any;
}

export interface ModelProfileForm {
  id: string;
  first_name: string;
  last_name: string;
  companyName: string;
  email: string;
}
