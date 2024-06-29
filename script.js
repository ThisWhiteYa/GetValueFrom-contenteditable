  const input = document.querySelector("[contenteditable]");
  let timer;

  const logContent = () => {
    alert("Save Success")
    console.log(input.textContent);
  };

  const startTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(logContent, 2000);
  };

  input.addEventListener("input", startTimer);

