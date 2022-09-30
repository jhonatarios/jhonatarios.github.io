// Hidden effect

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Anti spam (form)

document.querySelector("#formu").addEventListener("submit", function(e){
    if(document.getElementById('spam').value.length !== 0){
        e.preventDefault();
    }
});