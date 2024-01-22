import {useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUser
} from "../../utilities/firebase/firebase.utility";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form-styles.scss"
import Button from "../button/Button.component";





const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };
  const signInWithGoogle = async ()=> { 
    console.log("sign in with google");
    await signInWithGooglePopup();


}

  const [formField, setFormField] = useState(defaultFormField);
  const {email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
    console.log(formField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

      try {
        const {user} = await signInAuthUser(email,password);


      } catch (err) {
        switch(err.code){
          case "auth/invalid-credential": alert("invalid credentails")
          break
          default: alert(err)
        }
       
      }

  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

<div className="buttons-container">
  
        <Button buttonType={"inverted"} type="submit">sign in</Button>
        <Button type="button" buttonType={"google"} onClick={signInWithGoogle}>Google</Button>
</div>

      </form>
    </div>
  );
};
export default SignIn;
