import React from "react";
import { Global, css } from "@emotion/react";

export default function GlobalSyles(props) {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          border: none;
          box-sizing: border-box;
          outline: 0;

          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        #root {
          width: 100%;
          height: 100vh;
        }

        button {
          cursor: pointer;
        }

        canvas {
          height: 100vh;
          background-color: #1d2b47;
        }

        canvas:hover {
          cursor: crosshair;
        }

        textarea {
          overflow: auto;
          outline: none;

          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;

          resize: none; /*remove the resize handle on the bottom right*/
        }
      `}
      {...props}
    />
  );
}
