import { UserResponse, UserStructure } from "../../models/user";

export class UsersRepo {
  constructor(
    public url: string = "https://render-back-w7.onrender.com/users"
  ) {}

  async readAll(): Promise<UserResponse> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const members = await resp.json();
    return members;
  }

  async readOne(id: UserStructure["id"]): Promise<UserResponse> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const member = await resp.json();

    return member;
  }

  async update(
    info: Partial<UserStructure>,
    token: string,
    action: string
  ): Promise<UserResponse> {
    const url = this.url + "/" + action;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  // Create no tiene que recibir el ID como parámetro, puesto que lo va a asignar el server.

  async create(
    info: Partial<UserStructure>,
    action: "register" | "login"
  ): Promise<UserResponse> {
    const resp = await fetch(this.url + "/" + action, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);

    const data = await resp.json();
    return data;
  }

  async delete(id: UserStructure["id"], token: string): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error HTTP " + resp.status + ". " + resp.statusText);
  }
}
