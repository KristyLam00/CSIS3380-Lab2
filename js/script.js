const pagination = document.querySelector(".pagination");
const page = document.querySelector(".page");
const allItemList = Array.from(page.querySelectorAll(".contact-item"));
let currentPage;
let tempPage;

const totleItemNum = allItemList.length;
const paginationLimit = 10;
const numberOfPage = Math.ceil(totleItemNum / paginationLimit);

//place pre btn
pagination.innerHTML = "<li><a href='#'>&laquo;</a></li>";

function addpageNum() {
    for (let i = 1; i <= numberOfPage; i++) {
        const pageNum = document.createElement('li');
        pageNum.innerHTML = `<a href='#'>${i}</a>`;
        pagination.appendChild(pageNum);
    }
}
addpageNum();


//place next btn
const nextButton = document.createElement('li');
nextButton.innerHTML = "<a href='#'>&raquo;</a>";
pagination.appendChild(nextButton);

//send all li into array
const allpageNumList = Array.from(pagination.querySelectorAll("li"));


//once load, shwo 1 - 10 items and add active class to page 1 
currentPage = 1;
let pageOne = allpageNumList[currentPage].firstElementChild;
pageOne.classList.add("active");
changePage(currentPage);

//show corresponding items when clich the li
for (let btn of allpageNumList) {
    btn.addEventListener("click", setCurrentPage)
}

function setCurrentPage(event) {
    currentPage = event.target.innerHTML;

    if (currentPage == allpageNumList[0].innerText) // previous button and next button
    {

        currentPage = tempPage - 1;

        changePage(currentPage)


    } else if (currentPage == allpageNumList[(allpageNumList.length - 1)].innerText) {
        currentPage = tempPage + 1;
        changePage(currentPage)

    } else {
        changePage(currentPage);
    }

}

function changePage(currentPage) {

    for (let pageNum of allpageNumList) {
        pageNum.firstElementChild.classList.remove("active");
    }
    for (let itemIndex in allItemList) {
        allItemList[itemIndex].style.display = "";
    }
    allpageNumList[currentPage].firstElementChild.classList.add("active");
    //console.log(currentPage)
    let firstItem = (currentPage - 1) * paginationLimit;
    let lastItem = currentPage * paginationLimit;

    for (let itemIndex in allItemList) {
        if (itemIndex < firstItem || itemIndex >= lastItem) {
            allItemList[itemIndex].style.display = "none";
        }
    }
    if (currentPage == 1) {
        allpageNumList[0].style.display = "none";
    } else {
        allpageNumList[0].style.display = "";
    }

    if (currentPage == numberOfPage) {
        allpageNumList[allpageNumList.length - 1].style.display = "none";
    } else {
        allpageNumList[allpageNumList.length - 1].style.display = "";
    }


    tempPage = currentPage;
}











