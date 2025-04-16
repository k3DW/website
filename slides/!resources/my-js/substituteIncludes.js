export async function substituteIncludes() {
    const includes = [...document.getElementsByTagName("include")];
    for (const include of includes) {
        const filePath = include.getAttribute("src");
        const file = await fetch(filePath);
        const content = await file.text();
        include.insertAdjacentHTML("afterend", content);
        include.remove();
    }
}
