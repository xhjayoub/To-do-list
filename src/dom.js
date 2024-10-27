export { generateProject };

function generateProject(projName) {
    const proj = document.createElement("div");
    proj.classList.add("proj");

    const name = document.createElement("div");
    name.classList.add("projName");
    name.innerHTML = projName;
    // remove button
    const rm = document.createElement("div");
    rm.classList.add("rmProj");
    rm.innerHTML = "X";
    // TODO: Add remove button action

    // Append everything to proj
    proj.appendChild(name);
    proj.appendChild(rm);

    return proj;
}
