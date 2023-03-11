function getdate(){
    if (typeof window !== "undefined") {
    var today = new Date();
    document.getElementById(date).innerHTML = today;
}
}

export const datecom = getdate();