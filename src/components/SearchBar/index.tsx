"use client";

import { useState } from "react";
import { Command as CommandPrimitive } from "cmdk";

const Command = CommandPrimitive as any;

export const SearchBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded shadow">⌘K</button>
      <Command>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Item>Option 1</Command.Item>
          <Command.Item>Option 2</Command.Item>
          <Command.Item>Option 3</Command.Item>
        </Command.List>
      </Command>
    </>
  );
};
