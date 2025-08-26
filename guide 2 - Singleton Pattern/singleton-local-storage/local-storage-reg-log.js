
// Singleton for LocalStorage Manager
class LocalStorageManager {
    constructor() {
        if (LocalStorageManager.instance) {
            return LocalStorageManager.instance;
        }
        LocalStorageManager.instance = this;
        return this;
    }

    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}

const storage = new LocalStorageManager();

function register() {
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    if (username && password) {
        storage.save("credentials", { username, password });
        document.getElementById("message").textContent = "✅ Registered successfully!";
    } else {
        document.getElementById("message").textContent = "⚠️ Please enter username and password.";
    }
}

function login() {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const credentials = storage.load("credentials");

    if (credentials && username === credentials.username && password === credentials.password) {
        document.getElementById("message").textContent = "🎉 Login successful!";
    } else {
        document.getElementById("message").textContent = "❌ Invalid username or password.";
    }
}
