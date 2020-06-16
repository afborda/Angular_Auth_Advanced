export interface CallService {
  _id?: string;
  status: string;
  user: {
    address: string;
    city: string;
    email: string;
    firstname: string;
    lastname: string;
    mobilephone: string;
    phone: string;
    state: string;
  };
  technical: string;
  name: String;
  surname: String;
  title: String;
  area: String;
  type: String;
  priority: String;
  nregistration: String;
  description: String;
}
