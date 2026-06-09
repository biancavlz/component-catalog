import { useState } from "react";

function UserProfileForm() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  function handleProfile(e) {
    const { value, name } = e.target;

    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  }

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={profile.name}
        onChange={handleProfile}
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        value={profile.age}
        onChange={handleProfile}
      />

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
}

export default UserProfileForm;
