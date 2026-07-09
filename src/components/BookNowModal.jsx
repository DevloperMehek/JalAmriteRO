import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";

import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  // SelectTrigger,
  // SelectValue,
} from "../components/ui/select";

import { Label } from "../components/ui/label";

import { Droplet } from "lucide-react";
import { toast } from "sonner";

import { useLang } from "../contexts/LangContext";
import { CONTACT } from "../lib/translations";

const SERVICE_OPTIONS = [
  "New RO Purchase – Domestic",
  "New RO Purchase – Commercial",
  "RO Service @ ₹99",
  "Filter Change",
  "RO Repair",
  "Water Testing",
  "Rental RO",
  "AMC Plan",
  "General Enquiry",
];

const BookNowModal = ({ open, onOpenChange, presetService }) => {
  const { t } = useLang();

  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    contact: "",
    email: "",
    service_interest: "General Enquiry",
    message: "",
  });

  useEffect(() => {
    if (open && presetService) {
      setForm((f) => ({
        ...f,
        service_interest: presetService,
      }));
    }
  }, [open, presetService]);

  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e?.target ? e.target.value : e,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.contact.trim() ||
      !form.location.trim()
    ) {
      toast.error("Please fill Name, Mobile Number and Location.");
      return;
    }

    setSubmitting(true);

    const waMessage = [
      "*🩵 New Enquiry - Jal Amrit RO*",
      "",
      `👤 Name: ${form.name}`,
      `📞 Mobile: ${form.contact}`,
      `📍 Location: ${form.location}`,
      form.email ? `📧 Email: ${form.email}` : null,
      `🛠 Service: ${form.service_interest}`,
      form.message ? `💬 Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${
      CONTACT.whatsappIntl
    }?text=${encodeURIComponent(waMessage)}`;

    window.open(waUrl, "_blank");

    toast.success("Redirecting to WhatsApp...");

    onOpenChange(false);

    setForm({
      name: "",
      location: "",
      contact: "",
      email: "",
      service_interest: "General Enquiry",
      message: "",
    });

    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-lg p-0 overflow-hidden rounded-3xl"
        data-testid="book-now-modal"
      >
        <div className="bg-gradient-to-br from-[#0B3B60] via-[#0B3B60] to-[#00A3E0] px-6 py-6 text-white">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center">
              <Droplet size={22} />
            </div>

            <DialogHeader className="space-y-0 text-left">
              <DialogTitle className="text-xl font-display font-bold text-white">
                {t("bn_title")}
              </DialogTitle>

              <DialogDescription className="text-blue-100/90 text-sm">
                {t("bn_subtitle")}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-6 py-6 space-y-4 max-h-[70vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>{t("bn_name")} *</Label>

              <Input
                value={form.name}
                onChange={update("name")}
                placeholder="Full Name"
              />
            </div>

            <div>
              <Label>{t("bn_contact")} *</Label>

              <Input
                value={form.contact}
                onChange={update("contact")}
                placeholder=""
              />
            </div>
          </div>

          <div>
            <Label>{t("bn_location")} *</Label>

            <Input
              value={form.location}
              onChange={update("location")}
              placeholder="Location Please..."
            />
          </div>

          <div>
            <Label>{t("bn_email")}</Label>

            <Input
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="Email Please..."
            />
          </div>

          <div>
            <Label>{t("bn_service")}</Label>

            <Select
              value={form.service_interest}
              onValueChange={update("service_interest")}
            >
              {/* <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger> */}

              <SelectContent>
                {SERVICE_OPTIONS.map((service) => (
                  <SelectItem
                    key={service}
                    value={service}
                  >
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>{t("bn_message")}</Label>

            <Textarea
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us about your requirement..."
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#0B3B60]"
          >
            {submitting
              ? "Opening WhatsApp..."
              : "Send & Open WhatsApp"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookNowModal;
