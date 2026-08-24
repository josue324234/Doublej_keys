function generateKey() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart1 = "";
    let randomPart2 = "";
    for (let i = 0; i < 4; i++) {
        randomPart1 += chars.charAt(Math.floor(Math.random() * chars.length));
        randomPart2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    const newKey = "DJ-" + randomPart1 + "-" + randomPart2;
    document.getElementById("generatedKey").value = newKey;

    const listDiv = document.getElementById("keyList");
    const emptyMsg = listDiv.querySelector(".empty-msg");
    if (emptyMsg) {
        emptyMsg.remove();
    }

    const item = document.createElement("div");
    item.className = "key-item";
    item.innerHTML = `<span>${newKey}</span> <span class="badge">NUEVA</span>`;
    listDiv.prepend(item);
}

function copyKey() {
    const copyText = document.getElementById("generatedKey");
    if(copyText.value === "") return;
    navigator.clipboard.writeText(copyText.value).then(() => {
        alert("¡Llave copiada al portapapeles!");
    });
}
