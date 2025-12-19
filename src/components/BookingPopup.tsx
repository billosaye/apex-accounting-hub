import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const BookingPopup = ({ isOpen, onClose }: BookingPopupProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const serviceOptions = [
    "Bookkeeping & Accounting",
    "Tax Planning & Compliance",
    "Financial Advisory",
    "Business Registration",
    "Payroll Services",
    "Audit & Assurance",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Booking Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">Book a Consultation</h3>
            <p className="text-muted-foreground text-sm mt-1">Fill in your details and we'll contact you</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                Booking Received!
              </h4>
              <p className="text-muted-foreground">
                Thank you for reaching out. We'll contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  required
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 7XX XXX XXX"
                    required
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Required *</Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your business and requirements..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </Button>

              <p className="text-center text-muted-foreground text-xs">
                By submitting, you agree to be contacted regarding our services.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
