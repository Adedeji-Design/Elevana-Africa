
const WhatsAppButton = () => {

  return (
    <a
          href="https://chat.whatsapp.com/KLxEQaJ99zO2WF91IIaFSJ?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all"
          title="Join our WhatsApp group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M20.52 3.48A11.76 11.76 0 0012 0a11.77 11.77 0 00-8.36 20.12L0 24l3.98-3.64A11.76 11.76 0 0012 24a11.76 11.76 0 008.52-20.52zM12 21.54a9.53 9.53 0 01-5.06-1.47l-.36-.22-2.99.72.8-2.91-.24-.38a9.54 9.54 0 119.85 4.26zm5.33-7.13c-.29-.14-1.7-.83-1.96-.92s-.45-.14-.64.14-.73.92-.9 1.11-.33.21-.62.07a7.76 7.76 0 01-2.27-1.4 8.53 8.53 0 01-1.58-1.97c-.16-.27 0-.42.12-.57.12-.12.27-.31.4-.46s.17-.25.25-.41.04-.31-.02-.45-.64-1.53-.88-2.1c-.23-.55-.47-.47-.64-.48h-.55a1.08 1.08 0 00-.78.36 3.29 3.29 0 00-1 2.43 5.64 5.64 0 001.21 2.93 12.84 12.84 0 005.06 4.4c.71.31 1.26.49 1.69.62a4 4 0 001.84.11 3 3 0 002-.94 2.48 2.48 0 00.58-1.56c0-.22 0-.39-.07-.54s-.27-.13-.55-.26z" />
          </svg>
        </a>
  );
};

export default WhatsAppButton;