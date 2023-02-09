import { useReducer } from "react";
import { reduce } from "./helpers/reduce";

function App() {
  const { firstName, lastName, email, handleChangeFuction, handleEmailChange } = reduce()

  return (
    <>
      <h1>Formulario de Validacion</h1>
      <hr />
      <div className="container">
        <form>
          <div className="form-container">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={firstName.value} onChange={handleChangeFuction} />
            {firstName.error !== null && (
              <p className="error">{firstName.error}</p>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={lastName.value} onChange={handleChangeFuction} />
            {lastName.error !== null && (
              <p className="error">{lastName.error}</p>
            )}
          </div>

          <div className="form-container">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={email.value} onChange={handleEmailChange} />
            {email.error !== null && (
              <p className="error">{email.error}</p>
            )}
          </div>

        </form>
      </div>
    </>
  )
}

export default App
