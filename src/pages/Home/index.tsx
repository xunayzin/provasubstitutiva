import { useState } from "react";
import { Form, Table } from "./style";

const Home = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  function saveUser(e: any) {
    e.preventDefault();
    const dto = {
      name,
      email,
      password,
    };
    console.log(dto);
  }
  return (
    <div>
      <div>
        <Form>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={(e) => saveUser(e)}>Salvar</button>
        </Form>
      </div>
      <div>
        <Table>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>ações</th>
          </tr>
          <tr>
            <td>xunayzin</td>
            <td>emailzin@email.com</td>
            <td>
              <button>editar</button>
              <button>excluir</button>
            </td>
          </tr>
          <tr>
            <td>xunayzin</td>
            <td>emailzin@email.com</td>
            <td>
              <button>editar</button>
              <button>excluir</button>
            </td>
          </tr>
          <tr>
            <td>xunayzin</td>
            <td>emailzin@email.com</td>
            <td>
              <button>editar</button>
              <button>excluir</button>
            </td>
          </tr>
        </Table>
      </div>
    </div>
  );
};

export default Home;
