// /src/components/Drawing/Drawing.js
import Canvas from "@/components/Experimental/Drawing/Canvas";
import React, { useEffect, useRef } from "react";

export default function Drawing() {
  //Declare mouse position
  const xPos = useRef(0);
  const yPos = useRef(0);
  const mouseState = useRef(false);

  function handleMouseDown(e) {
    console.log("mouse clicked");
    mouseState.current = true;
  }

  function handleMouseUp(e) {
    console.log("Mouse Up");
    mouseState.current = false;
  }

  function handleMouseMove(e) {
    if (mouseState.current == true) {
      xPos.current = e.screenX;
      yPos.current = e.screenY;
      //console.log(xPos.current, ",", yPos.current);
    }
  }

  //Mouse down use effect
  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  //Mouse down use effect
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  //Handle mouse state true
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const draw = (ctx, frameCount) => {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log(ctx);
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    console.log(xPos.current, ",", yPos.current);
    console.log(ctx.canvas.offsetLeft, ",", ctx.canvas.offsetTop);
    if (mouseState.current == true) {
      ctx.arc(
        xPos.current - ctx.canvas.offsetLeft / 2 - ctx.canvas.offsetWidth,
        yPos.current - ctx.canvas.offsetTop - ctx.canvas.height / 2,
        20,
        0,
        2 * Math.PI
      );
    }
    ctx.fill();
  };

  return (
    <>
      <div className="grid justify-items-center mt-8 gap-4">
        <Canvas draw={draw} />
      </div>
    </>
  );
}
