import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

import BookNowModal from "../components/BookNowModal";

const BookingContext = createContext({
  openBooking: () => {},
  closeBooking: () => {},
});

export const BookingProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  const openBooking = useCallback((service = "") => {
    setPresetService(service);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    setPresetService("");
  }, []);

  const value = useMemo(
    () => ({ openBooking, closeBooking }),
    [openBooking, closeBooking]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}

      <BookNowModal
        open={open}
        onOpenChange={setOpen}
        presetService={presetService}
      />
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
