import React from "react";
import styles from "../Signup.module.scss";
import FormControl from "../components/FormControl";
function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [full_name, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [terms, setTerms] = React.useState(false);
  const [error, setError] = React.useState({
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
    full_name: false,
    terms: false,
  });
  const mobile_re = /^[7-9][0-9]{9}$/;

  // handle form

  const handleForm = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword || !full_name || !phone) {
      setError({
        email: !email,
        password: !password,
        confirmPassword: !confirmPassword,
        phone: !phone,
        full_name: !full_name,
      });
    } else if (password !== confirmPassword) {
      setError({
        ...error,
        confirmPassword: true,
      });
    } else if (!mobile_re.test(phone)) {
      setError({
        ...error,
        phone: true,
      });
    } else if (!terms) {
      setError({
        ...error,
        terms: true,
      });
    } else {
      setError({
        email: false,
        password: false,
        confirmPassword: false,
        phone: false,
        full_name: false,
      });

      localStorage.setItem("user", JSON.stringify({ email }));
      window.location.href = "/";
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.signup__illsutartion}>
        <img src="/image1.png" alt="" />
        <div className={styles.signup__illsuration__textual}>
          <h3>Choose a date range</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eius
            recusandae.
          </p>
        </div>
      </div>
      <div className={styles.signup_form_container}>
        <div className={styles.signup_form_wrapper}>
          <h2>Create an account</h2>
          <form onSubmit={handleForm}>
            <FormControl
              type="text"
              id="email"
              placeholder="email address"
              label="Your email address"
              value={email}
              setValue={setEmail}
              name="email"
              error={error.email}
              errorText="Please enter a valid email address"
            />
            <FormControl
              type="password"
              id="password"
              placeholder="password"
              label="Your password"
              value={password}
              setValue={setPassword}
              name="password"
              error={error.password}
              errorText="Please enter a valid password"
            />
            <FormControl
              type="password"
              id="cpassword"
              placeholder="Confirm password"
              label="Confirm your password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              name="cpassword"
              errorText="Two Password do not match"
              error={error.confirmPassword}
            />
            <FormControl
              type="text"
              id="full_name"
              placeholder="Full name"
              label="Your full name"
              value={full_name}
              setValue={setFullName}
              name="full_name"
              error={error.full_name}
              errorText="Please enter a valid full name"
            />
            <FormControl
              type="text"
              id="phone"
              placeholder="Phone"
              label="Your phone number"
              value={phone}
              setValue={setPhone}
              name="phone"
              error={error.phone}
              errorText="Please enter a valid phone number"
            />
            <div className={styles.terms_check}>
              <div className={styles.terms_check__checkbox}>
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={() => {
                    setTerms(!terms);
                  }}
                />
                <label htmlFor="terms"></label>
              </div>
              <p>
                {error.terms ? "Please" : "I read and"} agree Terms &amp;
                Conditions
              </p>
            </div>
            <input type="submit" value="Create account" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
