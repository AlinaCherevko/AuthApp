export type AuthProps = {
  name: string;
  email: string;
  password: string;
};

export type GoogleProps = {
  handleClick: () => void;
};

export type RegFormProps = {
  handleClick: (prop: AuthProps) => void;
};

export type LoginFormProps = {
  handleClick: (prop: Omit<AuthProps, "name">) => void;
};

export type InputProps = {
  placeholder: string;
};

export type Route = {
  children: React.ReactNode;
  redirectTo?: string;
};
