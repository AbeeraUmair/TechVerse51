function toggleIframe() {
    const iframe = document.getElementById('botFrame');
    
    if (iframe.classList.contains('show')) {
        iframe.classList.remove('show');
        setTimeout(function() {
            iframe.style.display = 'none';
        }, 200); // Match this with the CSS transition duration
    } else {
        iframe.style.display = 'block';
        setTimeout(function() {
            iframe.classList.add('show');
        }, 10); // Slight delay to trigger transition
    }
}

function submit() {
    const name = document.getElementById('name').value.toUpperCase();

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    const email = document.getElementById('email').value;

    if (!email.includes('@') ||!email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert("Dear " + name + ",you will be contacted by our team shortly. Thank you.");

}

// // badge 
// var loadFile = (event) => {
// 	let image = document.getElementById('photo');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };

// var loadName = (event) => {
//     let name = document.getElementById("name");
//     name.innerHTML = event.target.value;
// }

// const downloadImg = () =>{
//     var card = document.getElementById("card");
//     var val = document.getElementById("name").innerHTML;
    
//     html2canvas(card,{
//         scale:1.1,
//       backgroundColor:"rgba(0,0,0,0)" 
      
//     }).then(function(canvas) {
		
//         var imgLink = document.createElement("a");
//         document.body.appendChild(imgLink);
//         imgLink.download = `${val}.png`;
//         imgLink.href = canvas.toDataURL("image/png");
//         imgLink.target = '_blank';
//         imgLink.click();
//     });
// }


// confetti code
const confettiContainer = document.getElementById('confetti-container');

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = '🌟';
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

var loadFile = (event) => {
    let image = document.getElementById('photo');
    image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('certificate-title').style.display = "block"
    setInterval(createConfetti, 400);

};

var loadName = (event) => {
    let name = document.getElementById("name");
    name.innerHTML = event.target.value;
}

const downloadImg = () => {
    var card = document.getElementById("card");
    var val = document.getElementById("name").innerHTML;
    document.getElementById('certificate-title').style.display = "block"
    setInterval(createConfetti, 400);


    html2canvas(card, {
        scale: 1.1,
        backgroundColor: "rgba(0,0,0,0)"

    }).then(function (canvas) {

        var imgLink = document.createElement("a");
        document.body.appendChild(imgLink);
        imgLink.download = `${val}.png`;
        imgLink.href = canvas.toDataURL("image/png");
        imgLink.target = '_blank';
        imgLink.click();
    });
}

function onNavButtonClick() {
    let navBar = document.getElementById("navbarSupportedContent");
    let button = document.getElementById('navbar-custom-button');
    let arial = button.getAttribute("aria-expanded");
    navBar.classList.replace('collapse', 'collapsing');
    if (navBar.classList.contains('show')) {
        button.classList.add('collapsed')
        arial = false;
        navBar.classList.remove('show');
    } else {
        button.classList.remove('collapsed')
        arial = true;
        navBar.classList.add('show');
    }
    button.setAttribute("aria-expanded", arial);
    setTimeout(() => {
        navBar.classList.replace('collapsing', 'collapse');
    }, 95);
}

function onDropDownActivate() {
    let dropdown = document.getElementById("navbarLightDropdownMenuLink");
    let ul = document.getElementById('ulLightDropDown');
    if (dropdown.classList.contains('show')) {
        ul.classList.remove('show');
        dropdown.classList.remove('show');
    } else {
        ul.classList.add('show');
        dropdown.classList.add('show');
}
}