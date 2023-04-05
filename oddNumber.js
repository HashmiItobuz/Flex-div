const a = 100;



for (let i = 1; i <= a; i++) {
    if (i % 2 != 0) {
        console.log(i);

        let divElement = document.createElement("div");
        let childSpanElement = document.createElement("span");
        // let text = document.createTextNode(i);
        childSpanElement.innerText = i;
        divElement.append(childSpanElement);
        // divElement.append(text);

        divElement.classList.add('box');
        // divElement.classList.add(`box${i}`)
        
        document.body.appendChild(divElement);


    }
}

