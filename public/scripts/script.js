// Toggle Password Visibility Function
let isUserPasswordVisible = false;
function togglePasswordVisibility() {
    const passwordCharecterField = document.querySelector('.user__password-character');
    const passwordTextField = document.querySelector('.user__password-text')

    isUserPasswordVisible = !isUserPasswordVisible;

    if (isUserPasswordVisible) {
        passwordCharecterField.classList.add('hidden');
        passwordTextField.classList.remove('hidden');
    } else {
        passwordCharecterField.classList.remove('hidden')
        passwordTextField.classList.add('hidden')
    }
}



// Toggle Active Tab
function toggleActiveTab(allOtherTabs, activeTabIndex) {
    const allTabsWhichIsExist = document.getElementsByClassName(allOtherTabs);
    const allTabsBtn = document.querySelectorAll('.table__btn');

    for (let index = 0; index < allTabsWhichIsExist.length; index++) {
        allTabsWhichIsExist[index].classList.add('hidden')
        allTabsBtn[index].classList.remove('table-btn__active')
    }

    allTabsWhichIsExist[activeTabIndex].classList.remove('hidden')
    allTabsBtn[activeTabIndex].classList.add('table-btn__active')
}