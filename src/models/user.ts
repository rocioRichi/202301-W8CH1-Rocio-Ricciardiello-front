export type UserStructure = {
  id: string;
  email: string;
  passwd: string;
  firstName: string;
  lastName: string;
  snapUrl: string;
  friends: string[];
  numOfFriends: number;
  foes: string[];
  numOfFoes: number;
};

export type UserResponse = {
  results: {
    results: UserStructure[];
    // id: string;
    // email: string;
    // passwd: string;
    // firstName: string;
    // lastName: string;
    // snapUrl: string;
    // relations: [{ person: UserStructure; ref: string }];
  };
};
