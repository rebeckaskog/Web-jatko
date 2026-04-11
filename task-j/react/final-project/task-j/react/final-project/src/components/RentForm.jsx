export default function RentForm({
  instrument, setInstrument,
  name, setName,
  email, setEmail,
  accept, setAccept,
  errors,
  handleSubmit,
  clearForm
}) {
  return (
    <section id="form" className="bg-orange-50 py-16">
      <h2 className="text-center text-3xl mb-10 font-semibold text-orange-900">Fill in the form</h2>
      <div className="bg-orange-50 p-9 rounded-lg max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-orange-900 mb-1 text-lg">Choose instrument</label>
            <select
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              className="appearance-none w-full border border-orange-300 rounded px-3 py-2 text-gray-500">
              <option value="">-- Select Instrument --</option>
              <option value="guitar">Guitar</option>
              <option value="electric guitar">Electric Guitar</option>
              <option value="violin">Violin</option>
              <option value="cello">Cello</option>
              <option value="tuba">Tuba</option>
              <option value="trumpet">Trumpet</option>
              <option value="clarinet">Clarinet</option>
              <option value="keyboard">Piano Keyboard</option>
            </select>
            {errors.instrument && (
              <p className="text-red-500 text-sm">{errors.instrument}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-orange-900 mb-1 text-lg">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Jane Doe"
              className="w-full border border-orange-300 rounded px-3 py-2"/>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-orange-900 mb-1 text-lg">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., Jane.Doe@mail.com"
              className="w-full border border-orange-300 rounded px-3 py-2"/>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-orange-900 mb-1 text-lg">I accept the terms and conditions</label>

            <div className="flex justify-center gap-8">
              <label>
                <input
                  type="checkbox"
                  checked={accept === "Yes"}
                  onChange={() => setAccept("Yes")}
                  className="w-5 h-5 accent-orange-600 rounded"/>
                <span className="ml-2 text-orange-900 text-lg">Yes</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={accept === "No"}
                  onChange={() => setAccept("No")}
                  className="w-5 h-5 accent-orange-600 rounded"/>
                <span className="ml-2 text-orange-900 text-lg">No</span>
              </label>
            </div>

            {errors.accept && (
              <p className="text-red-500 text-sm">{errors.accept}</p>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <button type="submit" className="bg-orange-800 text-white px-6 py-3 rounded hover:bg-orange-600">Submit</button>

            <button
              type="button"
              onClick={clearForm}
              className="bg-orange-300 text-gray-800 px-6 py-3 rounded hover:bg-orange-400">Clear</button>
          </div>
        </form>
      </div>
    </section>
  );
}
