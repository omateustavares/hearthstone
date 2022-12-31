import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  body {
    height: auto;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.grey700};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }


  body, input, button {
    font: 1.6rem 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }

  @keyframes blurEffect {
  from {
    opacity: 0;
    backdrop-filter: blur(0);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-overlay {
  animation: blurEffect ease-in-out 0.4s forwards;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  /* width: 100%; */
  z-index: 5;
  background: #ffffff;
  padding: 60px 40px;
}

.modal-container {
  animation: slideInUp ease-in-out 0.5s forwards;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 30px 10px rgba(0, 0, 0, 0.2);
  height: 100%;
  overflow: hidden;
}

.modal-container ::-webkit-scrollbar {
  width: 0.4rem;
}

.modal-container ::-webkit-scrollbar-track {
  background: #fafafa;
}

.modal-container ::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 6px;
  border-bottom: 2rem solid #ffffff;
  border-top: 2rem solid #ffffff;
}

.modal-container .header-modal {
  position: relative;
  display: block;
  width: 100%;
}

.modal-container picture {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 150px;
  height: 150px;
  border-radius: 90px;
  overflow: hidden;
  margin: 30px;
}

@media (max-width: 768px) {
  .modal-container picture {
    align-items: flex-start;
    height: auto;
    width: 100%;
    height: 200px;
    border-radius: 0;
    margin: 0;
  }
}

.modal-container picture img {
  display: block;
  height: auto;
  width: 200px;
  height: auto;
}

@media (max-width: 768px) {
  .modal-container picture img {
    height: auto;
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
}

.modal-container button {
  animation: fadeIn ease-in-out 0.8s forwards;
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  cursor: pointer;
  margin: 20px;
}

.modal-container button svg {
  display: block;
  height: 34px;
  width: 34px;
}

@media (max-width: 768px) {
  .modal-container button {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 90px;
    padding: 6px;
  }

  .modal-container button svg {
    height: 28px;
    width: 28px;
  }
}

.content-modal__info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 769px) {
  .content-modal__info {
    flex-direction: column;
  }
}

.content-modal__info .bio {
  padding: 20px 90px 20px 20px;
  width: 700px;
}

@media (max-width: 768px) {
  .content-modal__info .bio {
    padding: 20px 20px 20px 20px;
    width: 100%;
    height: 40vh;
    overflow-y: scroll;
  }
}

.content-modal__info .bio .bio__inner:nth-child(1) {
  margin-bottom: 20px;
}
.content-modal__info .bio .bio__inner:nth-child(2) {
  display: block;
  position: relative;
}

@media (min-width: 769px) {
  .content-modal__info .bio .bio__inner:nth-child(2) {
    height: 80vh;
    overflow-y: scroll;
    padding-bottom: 200px;
  }
}

.content-modal__info::after {
  content: "";
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

@media (max-width: 768px) {
  .content-modal__info::after {
    background: transparent;
  }
}

.content-modal__info .bio .bio__inner h1,
.content-modal__info .bio .bio__inner h2 {
  display: block;
  font-size: 24px;
  margin-bottom: 10px;
  color: #e5691a;
  width: 100%;
  position: relative;
  text-transform: uppercase;
}

.content-modal__info .bio .bio__inner h2 {
  border-bottom: 2px dashed #f4f4f4;
  padding-bottom: 4px;
  width: 95%;
  text-transform: none;
}

.content-modal__info .bio .bio__inner h2 {
  font-size: 16px;
}

.content-modal__info .bio .bio__inner__media {
  margin-bottom: 20px;
}

.content-modal__info div ul {
  font-size: 13px;
}

.content-modal__info div p {
  display: block;
  font-size: 14px;
  line-height: 23px;
}

@media (min-width: 769px) {
  .modal-container {
    width: 920px;
  }}
`;
