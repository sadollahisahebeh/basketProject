tailwind.config = {
    theme: {
        extend: {
            colors: {
                orange: '#FF6500',
                white: '#ffff',
                black: '#090909',
                blue: '#045AB2',
                gray: '#AFAFAF',
                lightBlack: '#292929',
                blackBack: '#121212',
                darkBlack : '0c0c0c'
            },
            container: {
                center: true,
                padding:'3rem',
            },
        },

    }
}
    
function toggleSearch() {  
    var showbox = document.getElementById('searchBox');   
    if (showbox.style.display === 'none' || showbox.style.display === '') {  
        showbox.style.display = 'block';
    } else {  
        showbox.style.display = 'none';  
    }  
}  
function toggleSearchResponse() {  
    var showbox = document.getElementById('searchBoxResponse');   
    if (showbox.style.display === 'none' || showbox.style.display === '') {  
        showbox.style.display = 'block';
    } else {  
        showbox.style.display = 'none';  
    }  
}  
function closeSearchBox(){
    var showbox = document.getElementById('searchBox');   
        showbox.style.display = 'none';
   
}
function closeSearchBoxResponse(){
    var showbox = document.getElementById('searchBoxResponse');   
        showbox.style.display = 'none';
   
}
    
function toggleMenu() {  
    var showbox = document.getElementById('responseMenu');   
    showbox.classList.toggle('show') 
}  

const button = document.getElementById('more-button');
const menu = document.getElementById('moredetail');
const wrapper = document.getElementById('more-wrapper');

button.addEventListener('click', (e) => {
  e.stopPropagation();
  const isHidden = menu.classList.contains('opacity-0');

  if (isHidden) {
    menu.classList.remove('opacity-0', 'scale-y-95', 'pointer-events-none');
    menu.classList.add('opacity-100', 'scale-y-100');
  } else {
    menu.classList.add('opacity-0', 'scale-y-95', 'pointer-events-none');
    menu.classList.remove('opacity-100', 'scale-y-100');
  }
});

document.addEventListener('click', (e) => {
  if (!wrapper.contains(e.target)) {
    menu.classList.add('opacity-0', 'scale-y-95', 'pointer-events-none');
    menu.classList.remove('opacity-100', 'scale-y-100');
  }
});
 function loadData() {  
    const loader = document.getElementById('loader');  
    const content = document.getElementById('content');  
    loader.style.display = 'block';  
    content.style.display = 'none';  
    setTimeout(() => {   
        loader.style.display = 'none';  
        content.style.display = 'block';   
        AOS.init({
            duration:2000,
        });
        AOS.refresh();
    }, 1000); 
}   
loadData();  
function linkAlert() {  
    Swal.fire({  
        title: 'https://basketbal.ir',  
        text: 'آیا لینک کپی شود؟',  
        icon: 'success',  
        showCancelButton: true, 
        confirmButtonText: 'بله',  
        cancelButtonText: 'نه'  
    }).then((result) => {  
        if (result.isConfirmed) {  
            copyLink('https://basketbal.ir'); 
        }  
    });  
}  

function copyLink(link) {  
    navigator.clipboard.writeText(link).then(() => {  
        Swal.fire({  
            icon: 'success',  
            title: 'لینک کپی شد!',  
            text: link + ' به کلیپ بورد کپی شد.',  
        });  
    }).catch(err => {  
        Swal.fire({  
            icon: 'error',  
            title: 'خطا!',  
            text: 'نشد که لینک کپی شود.',  
        });  
    });  
}  

document.addEventListener("DOMContentLoaded", function () {
    const social = document.getElementById("social");

    window.addEventListener("scroll", function () {
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= screenHeight) {
        social.classList.remove("absolute-social");
        social.classList.add("social");
      } else {
        social.classList.remove("social");
        social.classList.add("absolute-social");
      }
    });
    social.classList.add("absolute-social");
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); 
    const links = document.querySelectorAll("#menu .menu-item");

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("font-bold"); 
      } else {
        link.classList.remove("font-bold");
      }
    });
  });