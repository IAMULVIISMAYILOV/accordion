// Accordion

document.querySelectorAll(".accordion").forEach((element) => {
    element.addEventListener("click", () => {

        let content = element.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll(".content").forEach((element) => element.style.maxHeight = null) 
        } else {
            document.querySelectorAll(".content").forEach((element) => element.style.maxHeight = null) 
            content.style.maxHeight=content.scrollHeight + 'px'
        }

    })
})