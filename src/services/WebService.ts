import { IuserResponse, Iuser } from "interfaces/user"

export default class WebService {
  static async createUser(user: Iuser): Promise<IuserResponse> {
    const requireNewUsers = await fetch("", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const newUser: IuserResponse = await requireNewUsers.json();

    return newUser;
  }

  static async showUser(): Promise<IuserResponse[]> {
    const requireUsers = await fetch("");
    const usersList: IuserResponse[] = await requireUsers.json();

    return usersList;
  }

  static async deleteUser(idUser: number | string): Promise<Boolean> {
    const requireDeleteUsers = await fetch("/${idUser}", {
      method: "DELETE",
    });
    const statusRequire = requireDeleteUsers.status;
    return statusRequire == 200;
  }

  static async editUser(newUser: Iuser): Promise<IuserResponse> {
    const requireEditUsers = await fetch("", {
      method: "PUT",
      body: JSON.stringify(newUser),
    });
    const editedUser: IuserResponse = await requireEditUsers.json();

    return editedUser;
  }
}
