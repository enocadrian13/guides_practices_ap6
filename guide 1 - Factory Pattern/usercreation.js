
function UserFactory(type, name) {
  if (type === "admin") {
    return { role: "admin", name, permissions: ["read", "write", "delete"] };
  } else if (type === "editor") {
    return { role: "editor", name, permissions: ["read", "write"] };
  } else {
    return { role: "viewer", name, permissions: ["read"] };
  }
}

// Using the factory
const user1 = UserFactory("admin", "Alice");
const user2 = UserFactory("viewer", "Bob");

console.log(user1); 
console.log(user2); 
