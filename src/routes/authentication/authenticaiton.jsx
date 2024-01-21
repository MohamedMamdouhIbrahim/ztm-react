import { useEffect } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup,signInWithGoogleRedirect,auth } from "../../utilities/firebase/firebase.utility";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form.component";
import "./authentications.styles.scss"



const Authentication = ()=>{

    // const signInWithredirect = async ()=>{
    //     const {user} = await signInWithGoogleRedirect();
    //     const userDocRef = await createUserDocumentFromAuth(user)
    // }
    useEffect(() => {
        async function fetchData() {
          const response = await getRedirectResult(auth);//response  contain user
          console.log(response);
          if(response)
          {
            const userDocRef = await createUserDocumentFromAuth(response.user)
          }
          // Perform other actions with the response as needed
        }
      
        fetchData();
        
      }, []);



    return(
        <div className="authentication-container">
        <SignIn />
        <SignUp />
        </div>

    );
}

export default Authentication;