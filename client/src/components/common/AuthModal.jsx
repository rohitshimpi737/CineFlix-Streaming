
// This component is used to display a modal for user authentication. It contains a logo, signin form, and signup form. The user can switch between the signin and signup forms using the switchAuthState function.

// The component uses the useSelector and useDispatch hooks from react-redux to access and dispatch actions related to the authentication modal state.

// The AuthModal component is a functional component that displays a modal for user authentication. It uses the Modal and Box components from the Material-UI library to create the modal layout. The component uses the useSelector and useDispatch hooks from react-redux to access and dispatch actions related to the authentication modal state.

// The component contains a state variable action that determines whether the user is signing in or signing up. The switchAuthState function is used to switch between the signin and signup forms.

// The component renders the logo, signin form, and signup form based on the action state. The modal is displayed when the authModalOpen state is true and closed when the user clicks outside the modal or on the close button.

// The AuthModal component is a reusable component that can be used in different parts of the application to handle user authentication.
// The AuthModal component is a functional component that displays a modal for user authentication. It uses the Modal and Box components from the Material-UI library to create the modal layout. The component uses the useSelector and useDispatch hooks from react-redux to access and dispatch actions related to the authentication modal state. 
// The component contains a state variable action that determines whether the user is signing in or signing up. The switchAuthState function is used to switch between the signin and signup forms.
// The component renders the logo, signin form, and signup form based on the action state. The modal is displayed when the authModalOpen state is true and closed when the user clicks outside the modal or on the close button.
// The AuthModal component is a reusable component that can be used in different parts of the application to handle user authentication.

import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import Logo from "./Logo";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const actionState = {
  signin: "signin",
  signup: "signup"
};

const AuthModal = () => {
  const { authModalOpen } = useSelector((state) => state.authModal);

  const dispatch = useDispatch();

  const [action, setAction] = useState(actionState.signin);

  useEffect(() => {
    if (authModalOpen) setAction(actionState.signin);
  }, [authModalOpen]);

  const handleClose = () => dispatch(setAuthModalOpen(false));

  const switchAuthState = (state) => setAction(state);

  return (
    <Modal open={authModalOpen} onClose={handleClose}>
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "600px",
        padding: 4,
        outline: "none"
      }}>
        <Box sx={{ padding: 4, boxShadow: 24, backgroundColor: "background.paper" }}>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Logo />
          </Box>

          {action === actionState.signin && <SigninForm switchAuthState={() => switchAuthState(actionState.signup)} />}

          {action === actionState.signup && <SignupForm switchAuthState={() => switchAuthState(actionState.signin)} />}
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModal;

// The AuthModal component is a functional component that displays a modal for user authentication. It uses the Modal and Box components from the Material-UI library to create the modal layout. The component uses the useSelector and useDispatch hooks from react-redux to access and dispatch actions related to the authentication modal state.
