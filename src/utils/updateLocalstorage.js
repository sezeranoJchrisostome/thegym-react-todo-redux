const updateLocalStorage = (data) => {
    localStorage.setItem("todolist", JSON.stringify(data));
}

export default updateLocalStorage