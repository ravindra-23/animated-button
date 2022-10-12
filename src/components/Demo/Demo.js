import React from 'react'

const Demo = () => {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
      });
    
      const [toggleClass, setToggleClass] = React.useState(false);
      const [showToast, setShowToast] = React.useState(false);
    
      const [Email, setEmail] = React.useState(null);
      const [Password, setPassword] = React.useState(null);
      
      const handleEmail = (e) => {
        setEmail(e.target.value);
        setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
      };
    
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
      };
    
      const annoyingSubmitButton = () => {
        setShowToast(false);
    
        if (form.password.length <= 6 || !validateEmail(form.email)) {
          setToggleClass((prevState) => !prevState);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 1000);
        }
      };

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase().trim() //Trim to ignore spaces after user email input
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

  return (
    <section className={`form-section`}>

        <form
          autoComplete="false"
          action="https://formspree.io/f/xqkjbjzw"
          method="POST"
        >
          <div className="input-block">
            <label className={`label`}>
              Email <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${!Email ? "empty" : ""} ${
                !validateEmail(form.email) ? "wrong-input" : "correct-input"
              }`}
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => handleEmail(e)}
              placeholder="example@email.com"
              tabIndex={-1}
              required
            />
          </div>
          <div>

            {!validateEmail(form.email) && <p className="warning-message">Enter a valid email ID</p> }

          </div>
          <div className="input-block">
            <label className={`label`}>
              Password <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.password.length <= 6 ? "wrong-input" : "correct-input"
              } ${!Password ? "empty" : ""}`}
              type="password"
              name="password"
              value={form.password}
              onChange={(e) => handlePassword(e)}
              minLength="6"
              tabIndex={-1}
              required
            />
          </div>
          <div>

            {form.password.length <= 6 ? (
              <p className={`${Password ? "warning-message" : "none"}`}>

                Password should be at least 6 characters long
              </p>):''
            }
          </div>
          <div
            style={{
              transform: `translateX(${
                toggleClass &&
                !(form.password.length >= 6 && validateEmail(form.email))
                  ? "25vh"
                  : "0"
              }`,
              transition: "transform 190ms ease-in-out",
            }}
          >
            <button
              tabIndex={-1}
              className={`submit-button ${
                form.password.length >= 6 && validateEmail(form.email)
                  ? "button-success"
                  : ""
              }`}
              onMouseEnter={annoyingSubmitButton}
            >
              Submit
            </button>
          </div>
          <div
            className={`toast ${
              showToast ? "fadeIn" : "fadeOut"
            }`}
          >
            You cannot submit until you fix all the validation errors...
          </div>
        </form>
      </section>
  )
}

export default Demo