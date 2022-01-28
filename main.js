const sampleForm = document.getElementById(`sampleForm`);
const textCounter = document.getElementById(`textCounter`)
const resetBtn = document.getElementById("resetBtn")
const iniDel = document.getElementById(`iniDel`)
const endDel = document.getElementById(`endDel`)

sampleForm.addEventListener(`keyup`, function () {
    const count = 400 - sampleForm.value.length;
    textCounter.innerHTML = `あと${count}文字です`;
})

resetBtn.addEventListener(`click`, function () {
    sampleForm.value = ``
    const count = 400 - sampleForm.value.length;
    textCounter.innerHTML = `あと${count}文字です`;
})

// チャレンジ問題

iniDel.addEventListener(`click`, function () {
    sampleForm.value = sampleForm.value.slice(1);
    const count = 400 - sampleForm.value.length;
    textCounter.innerHTML = `あと${count}文字です`;
});

endDel.addEventListener(`click`, function () {
    sampleForm.value = sampleForm.value.slice(0, -1);
    const count = 400 - sampleForm.value.length;
    textCounter.innerHTML = `あと${count}文字です`;
});