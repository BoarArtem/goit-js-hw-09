let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form")
const input = document.querySelector('input[name="email"]')
const textArea = document.querySelector('textarea[name="message"]')

input.addEventListener("input", (event) => {
    formData.email = event.target.value.trim();
})

textArea.addEventListener("input", (event) => {
    formData.message = event.target.value.trim();
})
 
form.addEventListener("submit", (s) => {
    s.preventDefault();
    const { email, message } = formData;

    if (email && message) {
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
        
        form.reset();
        formData.email = "";
        formData.message = "";
        
    } else {
        alert("Fill please all fields")
        localStorage.removeItem("feedback-form-state")
    }
})