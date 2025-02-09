const get_color = () => {
  const randomNo = Math.floor(Math.random() * 16777215);
  // 16777215  this no. is used to get a no. who can give a HEX no.
  const code = "#" + randomNo.toString(16);
  // toString(16)  is used to  get the HEXAGONAL VALUES
  document.body.style.backgroundColor = code;
  document.getElementById("code").innerText = code;
  //console.log(code);
};
// const copy = () => {
//  
//   alert("Copied");
// };
const copy = () => {
 const text=   document.getElementById("code").innerText;
  
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied: " +text ))
    .catch(err => console.error("Failed to copy:", err));
};