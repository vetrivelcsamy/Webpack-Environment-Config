/*
* 
*
*/
const makeButton = buttonName => {
    const buttonLabel = `button: ${buttonName}`;
    
     const button = document.createElement("button");
        
        button.innerText = buttonLabel;

   return button
   
};

module.exports = makeButton;