const displayLink = () => {
    alert("This is the link to share the recipe ->" + window.location.href);
};

document.getElementById("share-button").addEventListener("click", displayLink);