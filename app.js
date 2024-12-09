//API
const newAdvice = () => {
fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const slip = data.slip;
    document.getElementById("quote").textContent = `"${slip.advice}"`;
    document.getElementById("advice-num").textContent = `# ${slip.id}`;


  })
  .catch((error) => {
    console.log("Error al cargar JSON", error);
  });
}

document.getElementById("btn-random").addEventListener('click', newAdvice);
newAdvice();