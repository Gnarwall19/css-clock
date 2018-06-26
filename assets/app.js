function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);
}

// calls setDate function every 1 second
setInterval(setDate, 1000);