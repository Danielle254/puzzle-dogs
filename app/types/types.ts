export type DogDetailsType = {
  registeredName: string;
  kennelName: string;
  profile: string;
  status: Status;
  titles: string;
  gender: Gender;
  owners: string;
  parents: string;
  dob: string;
  breed: string;
  physicalDesc: string;
  about: string;
  links: LinksType[];
  gallery?: string;
};

export type LinksType = {
  name: string;
  path: string;
};

export type Gender = "male" | "female";

export type Status = "Active" | "Upcoming" | "Other";
