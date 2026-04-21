/* eslint-disable no-unused-vars */
const scrollToTopLogic = (fDiv3) => {
    fDiv3.addEventListener('click',()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
};