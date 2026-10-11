import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/students/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
      })
      .then((data) => setStudents(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>讀取失敗：{error}</p>;
  }

  return (
    <main>
      <h1>學生資料</h1>

      {students.length === 0 ? (
        <p>目前沒有學生資料</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>編號</th>
              <th>姓名</th>
              <th>性別</th>
              <th>生日</th>
              <th>Email</th>
              <th>電話</th>
              <th>地址</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.cName}</td>
                <td>{student.cSex}</td>
                <td>{student.cBirthday}</td>
                <td>{student.cEmail}</td>
                <td>{student.cPhone}</td>
                <td>{student.cAddr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default App;