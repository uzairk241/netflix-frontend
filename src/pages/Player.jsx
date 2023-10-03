import React, { useEffect } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
export default function Player() {
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
  },[])
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4' autoPlay loop controls muted />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
