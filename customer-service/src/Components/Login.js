import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toSignup() {
    navigate("/signup");
  }

  function login() {
    if (email && password) {
      axios
        .post("http://localhost:8000/user/login", {
          email,
          password,
        })
        .then(({ data }) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/userinput");
          } else {
            alert(data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Enter email and password");
    }
  }

  return (
    <div className="App">
      <h1>Customer Hub</h1>

      <div className="input-container-one">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="input-container-one">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>

      <p>
        Don't have an account? {""}
        <a
          href="/signup"
          onClick={(e) => {
            e.preventDefault();
            toSignup();
          }}
        >
          Signup
        </a>{" "}
        {""}
      </p>
    </div>
  );
}

export default Login;


// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function toSignup() {
//     navigate("/signup");
//   }

//   function login() {
//     if (email && password) {
//       axios
//         .post("http://localhost:8000/user/login", {
//           email,
//           password,
//         })
//         .then(({ data }) => {
//           console.log(data);
//           if (data.token) {
//             localStorage.setItem("token", data.token);
//             navigate("/userinput");
//           } else {
//             alert(data.msg);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       alert("Enter email and password");
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Welcome to the Customer Hub!</h1>

//       <div className="input-container-one">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//       </div>
//       <br />
//       <div className="input-container-one">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//       </div>
//       <br />
//       <button
//         onClick={() => {
//           login();
//         }}
//       >
//         Login
//       </button>

//       <p>
//         Don't have an account? {""}
//         <a
//           href="/signup"
//           onClick={(e) => {
//             e.preventDefault();
//             toSignup();
//           }}
//         >
//           Signup
//         </a>{" "}
//         {""}
//       </p>
//     </div>
//   );
// }

// export default Login;








// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function toSignup() {
//     navigate("/signup");
//   }

//   function login() {
//     if (email && password) {
//       axios
//         .post("http://localhost:8000/user/login", {
//           email,
//           password,
//         })
//         .then(({ data }) => {
//           console.log(data);
//           if (data.token) {
//             localStorage.setItem("token", data.token);
//             navigate("/userinput");
//           } else {
//             alert(data.msg);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       alert("Enter email and password");
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Customer Hub</h1>

//       <div className="input-container-one">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//       </div>
//       <br />
//       <div className="input-container-one">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//       </div>
//       <br />
//       <button
//         onClick={() => {
//           login();
//         }}
//       >
//         Login
//       </button>

//       <p>
//         Don't have an account? {""}
//         <a
//           href="/signup"
//           onClick={(e) => {
//             e.preventDefault();
//             toSignup();
//           }}
//         >
//           Signup
//         </a>{" "}
//         {""}
//       </p>
//     </div>
//   );
// }

// export default Login;





// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // useEffect(() => {
//   //  if (localStorage.getItem("token")) {
//   //   navigate("/user");
//   // }
//   //}, []);

//   function toSignup() {
//     navigate("/signup");
//   }

//   function login() {
//     axios
//       .post("http://localhost:8000/user/login", {
//         email,
//         password,
//       })
//       .then(({ data }) => {
//         console.log(data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           navigate("/userinput");
//         } else {
//           alert(data.msg);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // alert(" An error occurred. Please try later");
//       });
//   }

//   return (
//     <div className="App">
//       <h1>Customer Hub</h1>
//       <input
//         type="email"
//         placeholder="email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           if (email && password) {
//             console.log(email);
//             login();
//           } else {
//             alert("Enter email and password");
//           }
//         }}
//       >
//         Login
//       </button>

//       <p>
//         Don't have an account? {""}
//         <a
//           href="/signup"
//           onClick={(e) => {
//             e.preventDefault();
//             toSignup();
//           }}
//         >
//           Signup
//         </a>{" "}
//         {""}
//       </p>
//     </div>
//   );
// }

// export default Login;
