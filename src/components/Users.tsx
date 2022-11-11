import { IuserResponse } from "interfaces/user";
import { useEffect, useState } from "react";
import WebService from "services/WebService";

export default function Users() {
  const [users, setUsers] = useState<IuserResponse[]>([]);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [error, defineError] = useState(null);

  useEffect(() => {
    WebService.showUser()
      .then((listUsers) => setUsers(listUsers))
      .catch((messageError) => defineError(messageError));
  }, []);

  function sendUser() {}

  return (
    <>
      <article>
        <h2>Usuários</h2>
        <section>
          <ul>
            {users.map((user) => (
              <Item key={user.id} item={user} />
            ))}
          </ul>
        </section>

        <section>
          <h2>cadastrar usuário</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendUser();
            }}
          >
            <div>
              <label htmlFor="Nome">Nome</label>
              <input
                type="text"
                name="nome"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <textarea
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
                      </div>
                      
                      <div>
              <label htmlFor="senha">Senha</label>
              <textarea
                name="senha"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
        </section>
      </article>
    </>
  );
}
