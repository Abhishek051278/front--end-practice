import { useState } from "react";






function App() {


  const [getData, setGetData] = useState(null);
  const [getLoading, setGetLoading] = useState(false);
  const [getError, setGetError] = useState("");



  const [postData, setPostData] = useState(null);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState("");



  //  GET                    
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


     const handlePostApi = async () => {
  setPostLoading(true);
  setPostError("");

  const newPost = {
    title: "Hello sir",
    body: "This is a dummy post request",
    userId: 11,
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!res.ok) throw new Error("Failed");

    const data = await res.json();
    setPostData(data);
  } catch (err) {
    setPostError("POST API failed!");
  } finally {
    setPostLoading(false);
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

      <div style={{ marginTop: "40px" }}>
        <h3>Dummy POST API</h3>

        <button onClick={handlePostApi}>
          {postLoading ? "Posting..." : "Call POST API"}
        </button>

        {postError && <p style={{ color: "red" }}>{postError}</p>}

        {postData && (
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {JSON.stringify(postData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}


export default App;