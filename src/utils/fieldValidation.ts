export const isValidPhone = (phone: string): boolean => {
        return /^(?:\+226|00226)?[0-9]{8}$/.test(phone);
    };

export const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };