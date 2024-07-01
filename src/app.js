export function show(){
    let element = document.getElementById("header");
    if(element.classList.contains("hidden")){
      element.classList.remove("hidden");
    }
    else{
      element.classList.add("hidden");
    }
  }
  export default show;