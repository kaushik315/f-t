const person = {
  firstName: "F & T Media",
  lastName: "",
  get name() {
    return this.firstName;
  },
  role: "Building Digital Presence That Stands Out",
  avatar: "/images/LOGO.png",

  // 🔴 IMPORTANT: keep these separate
  location: "Global",        // Display only
  timeZone: "UTC",           // Used in Header.tsx (fixes your error)

  languages: [],
};
export {
  person,
};