import { createAction } from "@reduxjs/toolkit";
import { UserResponse, UserStructure } from "../models/user";
import { usersActions } from "./users.actions";

export const readAllCreator = createAction<UserResponse[]>(
  usersActions.readAll
);
export const readOneCreator = createAction<UserResponse[]>(
  usersActions.readOne
);
export const updateCreator = createAction<Partial<UserStructure>>(
  usersActions.update
);
export const createCreator = createAction<UserStructure>(usersActions.create);
export const deleteCreator = createAction<UserStructure["id"]>(
  usersActions.delete
);
export const logUserCreator = createAction<UserStructure>(usersActions.logUser);
