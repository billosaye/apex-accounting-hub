import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SERVICES = [
  "Bookkeeping",
  "Tax Preparation",
  "Payroll",
  "Financial Reporting",
  "Audit Support",
  "Advisory / Consulting",
  "Other (describe below)",
];

const whatsappNumber = "254140926450";

export default function ClientIntake() {
  const [open, setOpen] = useState(false);
  const [org, setOrg] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!org || !service) {
      alert("Please enter your organisation name and select a service.");
      return;
    }

    const finalService = service === "Other (describe below)" ? customService : service;
    if (!finalService) {
      alert("Please describe the service you need.");
      return;
    }

    const message = `New client intake%0AOrganisation: ${encodeURIComponent(
      org,
    )}%0AContact: ${encodeURIComponent(contact)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(
      phone,
    )}%0AService: ${encodeURIComponent(finalService)}%0ANotes: ${encodeURIComponent(notes)}%0A--%0APlease review for billing and follow up.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="whatsapp" size="lg">
          <MessageCircle className="w-4 h-4" />
          Chat on WhatsApp
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Client Intake</DialogTitle>
          <DialogDescription>Provide organisation details and pick a service.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="text-sm">Organisation name *</label>
          <Input value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Organisation name" />

          <label className="text-sm">Contact person</label>
          <Input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact person" />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm">Email</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" type="email" />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+2547..." />
            </div>
          </div>

          <label className="text-sm">Service *</label>
          <Select value={service} onValueChange={(v) => setService(v)}>
            <SelectTrigger>
              <SelectValue>{service || "Select a service"}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {service === "Other (describe below)" && (
            <>
              <label className="text-sm">Describe your service *</label>
              <Textarea
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                placeholder="Please describe the service you need..."
              />
            </>
          )}

          <label className="text-sm">Notes</label>
          <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any additional context..." />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send via WhatsApp</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
