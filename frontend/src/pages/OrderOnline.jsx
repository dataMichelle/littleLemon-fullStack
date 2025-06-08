export default function OrderOnline() {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-4">
      <h1 className="text-4xl font-serif font-medium mb-6 text-[var(--color-primary)]">
        Order Online
      </h1>
      <p className="text-lg text-dark mb-12">
        Browse our menu and place your order for pickup or delivery.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* TODO: Replace with mapped menu items from Django API */}
        <div className="border rounded-2xl p-4 shadow hover:shadow-md transition">
          <img
            src="/images/greek-salad.jpg"
            alt="Greek Salad"
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Greek Salad</h3>
          <p className="text-muted mb-2">
            Fresh salad with feta, olives, and lemon vinaigrette.
          </p>
          <span className="block text-[var(--color-primary)] font-medium">
            $12.99
          </span>
        </div>
        {/* ... more cards */}
      </div>
    </section>
  );
}
