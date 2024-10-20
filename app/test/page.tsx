"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Tests() {
  return (
    <div>
      <Button
        onClick={async () => {
          await fetch("/api/emails", { method: "POST",
            body: JSON.stringify({
                email: "support@lupleg.org",
                firstName: "Emmanuel",
                
            }),
           });
        }}
      >
        Send email
      </Button>
    </div>
  );
}
