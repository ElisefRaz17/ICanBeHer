import React, {useState} from 'react'
import styles from "../styling/signupform.module.css"
type FormProps = {
  handleRegister: (email:string,password:string) => void;
};

const Form = ({handleRegister}: FormProps) =>{
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGitHub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [education, setEducation] = useState("");
  const [job, setJob] = useState("");
  const [interests, setInterest] = useState("");
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.header}>Sign Up</h3>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className="mb-3">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="First Name"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="Last Name"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email-address">Email address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#9CB2FF" }}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleRegister(email, password)}
              >
                Create Account
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </div>
          <div className={styles.column}>
            <div className="mb-3">
              <label>Github(optional)</label>
              <input
                type="url"
                className="form-control"
                placeholder="Github Link"
                name="Github"
                value={github}
                onChange={(e)=>setGitHub(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>LinkedIn(optional)</label>
              <input
                type="url"
                className="form-control"
                placeholder="LinkedIn Link"
                name="LinkedIn"
                value={linkedin}
                onChange={(e)=>setLinkedin(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Education(optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: University of Southern California"
                name="Education"
                value={education}
                onChange={(e)=>setEducation(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Job(optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex: Software Engineer at Microsoft"
                name="Job"
                value={job}
                onChange={(e)=>setJob(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Interests</label>
              <textarea
                className="form-control"
                placeholder="Interests"
                name="Interests"
                value={interests}
                onChange={(e)=>setInterest(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form