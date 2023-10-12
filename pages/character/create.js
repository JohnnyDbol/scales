// pages/character/create.js
import { useState } from "react";

export default function CreateCharacter() {
  const [character, setCharacter] = useState({
    name: "",
    class: "",
    race: "",
    // other attributes like strength, intelligence, etc.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call to save the new character
    // Redirect to the character dashboard or profile page
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={character.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="class"
          className="block text-sm font-medium text-gray-700"
        >
          Class
        </label>
        <select
          name="class"
          id="class"
          required
          value={character.class}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select a class</option>
          <option value="warrior">Warrior</option>
          <option value="mage">Mage</option>
          <option value="rogue">Rogue</option>
          {/* other classes */}
        </select>
      </div>

      <div>
        <label
          htmlFor="race"
          className="block text-sm font-medium text-gray-700"
        >
          Race
        </label>
        <select
          name="race"
          id="race"
          required
          value={character.race}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select a race</option>
          <option value="human">Human</option>
          <option value="elf">Elf</option>
          <option value="dwarf">Dwarf</option>
          {/* other races */}
        </select>
      </div>

      {/* Additional character attributes go here */}

      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Create Character
        </button>
      </div>
    </form>
  );
}
