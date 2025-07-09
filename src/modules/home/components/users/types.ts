import type { User } from "../../types";

export interface UsersProps {
  data: User[];
  username: string;
  loading: boolean;
}

export interface RepositoriesProps {
  username: User["login"];
  isExpanded?: boolean;
}


