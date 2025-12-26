import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPopup = ({ isOpen, onClose }: BookingPopupProps) => {
  useEffect(() => {
    if (isOpen) {
      // Redirect to WhatsApp immediately
      const whatsappNumber = "254704203644";
      const whatsappMessage = encodeURIComponent("Hello, I would like to book a consultation for your accounting services.");
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
      );
      // Close the popup after redirecting
      onClose();
    }
  }, [isOpen, onClose]);

  return null;
};

export default BookingPopup;
