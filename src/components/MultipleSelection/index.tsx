"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
// import {
//   Command,
//   CommandGroup,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Command as CommandPrimitive } from "cmdk";
import { Command as CommandPrimitive } from "cmdk";

const Command = CommandPrimitive as any;

function CommandPalette() {
  return (
    <Command>
      <Command.Input placeholder="Search..." />
      <Command.List>
        <Command.Item>Option 1</Command.Item>
        <Command.Item>Option 2</Command.Item>
      </Command.List>
    </Command>
  );
}

export default CommandPalette;