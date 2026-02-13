import React, { useState } from "react";

const ApiDemo = () => {
    const [getData, setGetData] = useState(null);
    const [getLoading, setGetLoading] = useState(false);
    const [getError, setGetError] = useState("");
    const [postData, setPostData] = useState(null);
    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState("");

    // ✅ GET API Call
    const handleGetApi = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setGetData(data);
        } catch (err) {
            setGetError("GET API failed!");
        } finally {
            setGetLoading(false);
        }
    };

    // ✅ POST API Call
    const handlePostApi = async () => {
        let newUser = {
            title: "Hello sir",
            body: "This is a dummy post request",
            userId: 11,
        }
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST", body: JSON.stringify(newUser)
            });

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
            <h2>API Demo Page (GET + POST)</h2>

            <div style={{ marginTop: "20px" }}>
                <h3>1) Dummy GET API</h3>

                <button onClick={handleGetApi}>
                    {getLoading ? "Loading..." : "Call GET API"}
                </button>

                {getError && <p style={{ color: "red" }}>{getError}</p>}

                {getData && (
                    <pre style={{ background: "#f4f4f4", padding: "10px" }}>
                        {/* {JSON.stringify(getData, null, 2)} */}
                        {/* <ul>{getData.map((item) => <li>{item.id + ": " + item.title}</li>)}</ul> */}
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            {getData.map((item) => <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td></tr>)}
                        </table>
                    </pre>
                )}
            </div>

            {/* ✅ POST SECTION */}
            <div style={{ marginTop: "40px" }}>
                <h3>2) Dummy POST API</h3>

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
};

export default ApiDemo;