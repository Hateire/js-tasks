const path = "/users/download/1337.html"

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    return pathExt == requiredExt
}

console.log(isHtml(path));