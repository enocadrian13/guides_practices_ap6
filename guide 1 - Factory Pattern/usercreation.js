
const userFactory = (type, name) => {
  if (type === "admin") {
    return { role: "admin", name, permissions: ["read", "write", "delete"] };
  } else if (type === "editor") {
    return { role: "editor", name, permissions: ["read", "write"] };
  } else {
    return { role: "viewer", name, permissions: ["read"] };
  }
}

// Using the factory
const user1 = userFactory("admin", "Alice");
const user2 = userFactory("viewer", "Bob");

console.log(user1); 
console.log(user2); 
