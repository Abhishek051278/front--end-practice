 import {useState} from "react";
 
 
 
 
 
 
 function App() {


  const [getData, setGetData] = useState(null);
  const [getLoading, setGetLoading] = useState(false);
  const [getError, setGetError] = useState("");

  const handleGetApi = async () => {
    setGetLoading(true);
    setGetError("");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setGetData(data);
    } catch (err) {
      setGetError("GET API failed!");
    } finally {
      setGetLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>API Demo Page</h2>

      <button onClick={handleGetApi}>
        {getLoading ? "Loading..." : "Call GET API"}
      </button>

      {getError && <p style={{ color: "red" }}>{getError}</p>}

      {getData && (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


export default App;