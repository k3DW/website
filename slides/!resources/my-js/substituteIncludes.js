export async function substituteIncludes() {
    for (const include of document.getElementsByTagName("include")) {
        const filePath = include.getAttribute("src");
        const file = await fetch(filePath);
        const content = await file.text();
        include.insertAdjacentHTML("afterend", content);
        include.remove();
    }
}
