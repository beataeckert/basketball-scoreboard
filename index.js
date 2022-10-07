let count = 0;
let h_add1_btn=document.getElementById("homes_scores");
let h_add2_btn=document.getElementById("homes_scores");
let h_add3_btn=document.getElementById("homes_scores");

let count2=0
let g_add1_btn=document.getElementById("guests_scores");
let g_add2_btn=document.getElementById("guests_scores");
let g_add3_btn=document.getElementById("guests_scores");

function home_add1() {
    count=count + 1;
    h_add1_btn.innerText = count;
}

function home_add2() {
    count=count + 2;
    h_add2_btn.innerText = count;
}

function home_add3() {
    count=count + 3;
    h_add3_btn.innerText = count;
}

//__________________________________

function guest_add1() {
    count2=count2 + 1;
    g_add1_btn.innerText = count2;
}

function guest_add2() {
    count2=count2 + 2;
    g_add2_btn.innerText = count2;
}

function guest_add3() {
    count2=count2 + 3;
    g_add3_btn.innerText = count2;
}