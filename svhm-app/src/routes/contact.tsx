import { FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BiDonateHeart } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { addServiceRequest } from "@/api/queries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError(
        "Ups! Bitte überprüfe deine Eingabe und gib eine gültige E-Mail-Adresse ein."
      );
    } else {
      setError("");

      // Submit form data
      console.log("Form submitted:", email);
      addServiceRequest();
    }
  };

  return (
    <section className="min-h-space-avail container flex flex-col">
      <div className="z-10 py-8 lg:py-32">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            Kontaktiere{" "}
          </span>
          oder treffe{" "}
          <span className="bg-gradient-to-b from-primary/20 to-primary bg-clip-text text-transparent">
            uns!
          </span>
        </h2>
      </div>

      <div className=" flex flex-1 flex-col pb-8 lg:flex-row lg:pb-32">
        {/* first column */}
        <div className="z-10 flex flex-col gap-4 p-4">
          <Card className="">
            <CardHeader className="flex flex-col lg:flex-row items-start justify-start gap-4 space-y-1">
              <div className="mt-1 rounded-sm bg-muted-foreground/30 p-1">
                <LuMail className="size-8" />
              </div>
              <div>
                <CardTitle>per E-Mail</CardTitle>
                <CardDescription className="text-md mt-2">
                  <div className="flex flex-col items-start gap-4 text-sm">
                    <span>Unser Team antwortet gerne!</span>
                    <span>SchulvereinHaseldorferMarsch@gmail.com</span>
                  </div>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="">
            <CardHeader className="flex flex-col lg:flex-row items-start justify-start gap-4 space-y-1">
              <div className="mt-1 rounded-sm bg-muted-foreground/30 p-1">
                <BiDonateHeart className="size-8" />
              </div>
              <div>
                <CardTitle>per Post</CardTitle>
                <CardDescription className="text-md mt-2">
                  <div className="flex flex-col items-start text-sm">
                    <span>Schulverein Haseldorfer Marsch</span>
                    <span>Kamperrege 1</span>
                    <span>25489 Haseldorf</span>
                  </div>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="">
            <CardHeader className="flex flex-col lg:flex-row items-start justify-start gap-4 space-y-1">
              <div className="mt-1 rounded-sm bg-muted-foreground/30 p-1">
                <BiDonateHeart className="size-8" />
              </div>
              <div>
                <CardTitle>Unsere Bankverbindung</CardTitle>
                <CardDescription className="text-md mt-2">
                  <div className="flex flex-col items-start text-sm">
                    <span>Schulverein Haseldorfer Marsch</span>
                    <span>IBAN: DE69 2216 3114 0000 2117 53</span>
                    <span>BIC CODE: GENODEF1HTE</span>
                  </div>
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* second column */}
        <form
          onSubmit={handleSubmit}
          className="z-10 mx-auto p-4 flex flex-grow flex-col gap-4 rounded-2xl border-[2px] lg:border-[12px] border-primary lg:pt-8"
        >
          <h2 className="flex text-center text-3xl font-semibold md:text-4xl lg:text-start">
            Du hast ein Anliegen? Schreibe uns direkt!
          </h2>

          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Dein Name"
          />

          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail"
          />
          {error && <p className="mb-2 text-sm text-red-500">{error}</p>}

          <span className="text-lg hidden lg:visible">Erzähle uns etwas über dein Anliegen</span>

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Dein Anliegen"
            className="flex flex-1 sm:min-w-96"
          />

          <div className="items-end space-y-4 md:space-x-4 md:space-y-0">
            <Button type="submit" className="w-full">
              Absenden
            </Button>
          </div>
        </form>
      </div>

      {/* Shadow effect */}
    </section>
  );
}