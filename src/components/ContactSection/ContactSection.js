import React from "react";
import "./ContactSection.css";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function ContactSection() {
  let [vorname, setVorname] = React.useState("");
  let [nachname, setNachname] = React.useState("");
  let [nummer, setNummer] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [nachricht, setNachricht] = React.useState("");
  let [error, setError] = React.useState(false);
  let [openConfirmation, setOpenConfirmation] = React.useState(false);

  let sendMessage = () => {
    console.log(vorname, nachname, nummer, email, nachricht);
    if (errors()) {
      setError(true);
    } else {
      // sendMessage
      sendConfirmation();
      resetState();
    }
  };

  let errors = () => {
    if (
      vorname == "" ||
      nachname == "" ||
      nummer == "" ||
      email == "" ||
      nachricht == ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  let sendConfirmation = () => {
    setOpenConfirmation(true);
  };

  let resetState = () => {
    setVorname("");
    setNachname("");
    setNummer("");
    setEmail("");
    setNachricht("");
    setError(false);
  };

  return (
    <div className="formContainer">
      <p className="white left mb-24 ">
        Schreibt uns eine Nachricht über das Kontaktfeld oder per Email an
        info@sg-hochwald.de
      </p>

      <div className="formFields">
        <div className="white left mb-12">Vorname</div>
        <input
          type="text"
          name="spind"
          className="mb-12 textfeld"
          value={vorname}
          onChange={(e) => setVorname(e.target.value)}
        />
        <div className="white left mb-12">Nachname</div>
        <input
          type="text"
          name="spind"
          className="mb-12 textfeld"
          value={nachname}
          onChange={(e) => setNachname(e.target.value)}
        />
        <div className="white left mb-12">Telefonnummer</div>
        <input
          type="text"
          name="spind"
          className="mb-12 textfeld"
          value={nummer}
          onChange={(e) => setNummer(e.target.value)}
        />
        <div className="white left mb-12">Email Adresse</div>
        <input
          type="text"
          name="spind"
          className="mb-12 textfeld"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="white left mb-12">Message</div>
        <textarea
          name="text"
          id="text"
          className="mb-12 textarea"
          rows={4}
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
        ></textarea>
        {error ? (
          <div className="errorMeldung">Bitte vollständig ausfüllen</div>
        ) : (
          ""
        )}

        <div className="sendBtn" onClick={() => sendMessage()}>
          {" "}
          Send Message
        </div>
        <Box
          sx={{
            width: "90%",
            position: "fixed",
            top: "24px",
            left: "5%",
            right: "5%",
          }}
        >
          <Collapse in={openConfirmation}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenConfirmation(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Erfolgreich versendet. Danke für deine Nachricht
            </Alert>
          </Collapse>
        </Box>
      </div>
    </div>
  );
}
