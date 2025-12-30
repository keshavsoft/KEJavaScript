let StartFunc = ({ inResponse }) => {
   Object.entries(inResponse).forEach(([key, value]) => {
      console.log("key",key);
      
      let inputElement = document.getElementById(`HtmlId-${key}`);
      if (inputElement !== null) {
         inputElement.value = value;
      }
   });
};

export { StartFunc };
