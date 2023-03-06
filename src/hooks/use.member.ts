import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../reducer/users.actions.creator";
import { useEffect } from "react";
import { UsersRepo } from "../services/repository/user.repo";
import { UserResponse, UserStructure } from "../models/user";

export function useMembers(repo: UsersRepo) {
  const members = useSelector((state: RootState) => state.members);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const readAllMembers = async () => {
      try {
        const data = await repo.readAll();
        dispatch(ac.readAllCreator(data.results));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    readAllMembers();
  }, [dispatch, repo]);

  const readMember = async (id: string) => {
    try {
      const data = await repo.readOne(id);
      dispatch(ac.readOneCreator(data.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const createMember = async (info: Partial<UserStructure>) => {
    try {
      const data = await repo.create(info, "register");
      dispatch(ac.createCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateMember = async (
    info: Partial<UserStructure>,
    token: string,
    action: string
  ) => {
    try {
      const data = await repo.update(info, token, action);
      dispatch(ac.updateCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteMember = async (id: string, token: string) => {
    try {
      await repo.delete(id, token);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const loginMember = async (info: Partial<UserStructure>) => {
    try {
      const data = await repo.create(info, "login");
      dispatch(ac.logUserCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    members,
    readMember,
    createMember,
    updateMember,
    deleteMember,
    loginMember,
  };
}
