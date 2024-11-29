import React, { useEffect } from "react";

const Child = React.memo(({ onClick }) => {
  useEffect(() => {
    console.log("Child component rendered.");
  }, [onClick]);
  //here we can see the difference with and without React.memo
  //see when the state variable otherState in the parent changes then
  //handleClick function reference will remain same
  //but the whole parent component will rerender and this will lead to childrent to also rerender
  //but when React.memo is there then it will check if the props is same or not
  //if found same then it will not rerender the child component
  //now since handleClick is the props and is not changed therefore it wont render
  //else it would rerender
  console.log("Checking without memo");
  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={onClick}
      >
        Log Count from Child
      </button>
    </div>
  );
});

export default Child;
