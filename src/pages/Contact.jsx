export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        We'd love to hear from you! Please reach out with any questions.
      </p>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
          </div>
          <div className="mb-6">
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-brand-green-dark">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};