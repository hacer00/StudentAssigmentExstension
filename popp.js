const translations = {
    tr: {
        title:"Öğrenci Atama Sistemi",
        langSwitch: "🌐 EN",
        contactBtn: "İletişim 📩",
        studentUpload: "Öğrenci Verilerini Yapıştırınız",
        quotaUpload: "Kontenjan Verilerini Yapıştırınız",
        addColumn: "Tercih Sütunu Ekle",
        removeColumn: "Tercih Sütunu Sil",
        assign: "Atama Yap",
        assignResult: "Atama Sonuçları",
        download: "Sonuçları İndir",
        reset: "Sıfırla",
        student: "Öğrenci",
        studentNumber: "Öğrenci No",
        score: "Puan",
        preferences: "Tercihler",
        place: "Yer",
        quota: "Kontenjan",
        assignedPlace: "Atanan Yer",
        col_1: "Tercih 1",
        col_2: "Tercih 2",
        col_3: "Tercih 3",
        col_4: "Tercih 4",
        col_5: "Tercih 5",
        col_6: "Tercih 6",
        col_7: "Tercih 7",
        col_8: "Tercih 8",
        col_9: "Tercih 9",
        col_10: "Tercih 10"

    },
    en: {
        title: "Student Assigment System",
        langSwitch: "🌐 TR",
        contactBtn: "Contact 📩",
        studentUpload: "Paste Student Data",
        quotaUpload: "Paste Quota Data",
        addColumn: "Add Preference Column",
        removeColumn: "Delete Preference Column",
        assign: "Assign",
        assignResult: "Assignment Results",
        download: "Download Results",
        reset: "Reset",
        student: "Student",
        studentNumber: "Student ID",
        score: "Score",
        preferences: "Preferences",
        place: "Place",
        quota: "Quota",
        assignedPlace: "Assigned Place",
        col_1: "Preference 1",
        col_2: "Preference 2",
        col_3: "Preference 3",
        col_4: "Preference 4",
        col_5: "Preference 5",
        col_6: "Preference 6",
        col_7: "Preference 7",
        col_8: "Preference 8",
        col_9: "Preference 9",
        col_10: "Preference 10"
    }
};

let students = [];
let quotas = {};

function updateI18nTexts() {
    const lang = localStorage.getItem("lang") || "tr";
    const dict = translations[lang];

    document.querySelectorAll(".i18n").forEach(el => {
        const key = el.getAttribute("data-msg");
        if (dict[key]) {
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.setAttribute("placeholder", dict[key]);
            } else {
                el.textContent = dict[key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem("lang") || "tr";
    const theme = localStorage.getItem("theme") || "light";

    document.body.classList.add(lang, theme);
    updateI18nTexts();

    document.getElementById("langSwitch").addEventListener("click", () => {
        const currentLang = localStorage.getItem("lang") || "tr";
        const newLang = currentLang === "tr" ? "en" : "tr";
        localStorage.setItem("lang", newLang);
        document.body.classList.replace(currentLang, newLang);
        updateI18nTexts();
        updatePreferenceHeaders();
    });

    document.getElementById("themeToggle").addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.body.classList.replace(currentTheme, newTheme);
        localStorage.setItem("theme", newTheme);
        document.getElementById("themeToggle").textContent = newTheme === "dark" ? "🌞" : "🌙";
    });

});


/*

.......

*/

document.getElementById("contactBtn").addEventListener("click", () => {
    const info = document.getElementById("contactInfo");
    info.style.display = info.style.display === "none" ? "inline" : "none";
});

document.getElementById("removeColumn").addEventListener("click", () => {
    const table = document.getElementById("dataTable"); 
    const headerRow = table.querySelector("thead tr"); 

    const headerCells = headerRow.querySelectorAll("th");
    if (headerCells.length > 1) {  
        headerCells[headerCells.length - 1].remove(); 
    }

    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length > 1) { 
            cells[cells.length - 1].remove(); 
        }
    });
});