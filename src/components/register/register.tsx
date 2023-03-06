import { SyntheticEvent, useMemo } from "react";
import { useMembers } from "../../hooks/use.member";
import { UserStructure } from "../../models/user";
import { UsersRepo } from "../../services/repository/user.repo";
import "./register.scss";

export function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { createMember } = useMembers(repo);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formNewMember = document.querySelector("form") as HTMLFormElement;

    const newMember: Partial<UserStructure> = {
      email: (formNewMember[0] as HTMLInputElement).value,
      passwd: (formNewMember[1] as HTMLInputElement).value,
      firstName: (formNewMember[2] as HTMLInputElement).value,
      lastName: (formNewMember[3] as HTMLInputElement).value,
      snapUrl: (formNewMember[4] as HTMLInputElement).value,
    };
    createMember(newMember);
    formNewMember.reset();
  };

  return (
    <form className="register-form" data-testid="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        className="register-form__field"
        name="Email"
      />
      <input
        type="text"
        placeholder="Pasword"
        className="register-form__field"
        name="Password"
      />
      <input
        type="text"
        placeholder="First name"
        className="register-form__field"
        name="First name"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="register-form__field"
        name="Last name"
      />
      <input
        type="text"
        placeholder="Snap Url"
        className="register-form__field"
        name="Url Image"
      />
      <button>Register</button>
    </form>
  );
}
