//functional example and adding Events
function clickButton() {
  alert("Clicked!!!!!!");
}

const myElement = (
  <button onClick={clickButton}>Click the button!</button>
);  
  
  ReactDOM.render(myelement, document.getElementById('root'));