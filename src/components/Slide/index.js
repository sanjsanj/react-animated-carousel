import React from "react";

function rand() {
  return Math.ceil(Math.random() * 100);
}

export default function Slide(props) {
  return (
    <div>
      <img
        src={`https://picsum.photos/200${
          props.tall ? "/300" : ""
        }/?image=${rand()}`}
        alt={"200 by 300"}
      />
    </div>
  );
}
