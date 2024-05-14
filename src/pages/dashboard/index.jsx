import userServices from "@/services/factories/userServices";
import { useEffect, useState } from "react";
export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const userTypes = {
    superadmin: "Super Admin",
    admin: "Administrador",
    teacher: "Maestro",
    student: "Estudiante",
  };

  function getUsers() {
    if (typeof window !== "undefined") {
      userServices.getUsers().then((res) => {
        setUsers(res.data);
      });
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h5>Lista de usuarios</h5>
      <table className="table patientsHeadClass table-striped">
        <thead>
          <tr>
            <th scope="col">CURP</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">User Type</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.curp ? user.curp : "N/A"}</td>
              <td>{user.name}</td>
              <td>{user.last_name}</td>
              <td>{userTypes[user.user_type]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
