import React from 'react'
import {Container} from "react-bootstrap"

const Auth_URL = "https://accounts.spotify.com/authorize?client_id=d1b3f8f0985e48d6bcc4862ab1a99c59&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"



export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center"
        style={{minHeight: "100vh"}}
    >
        <a className="btn btn-success btn-lg" href={Auth_URL}>Login With spotify</a>
    </Container>
  )
}
