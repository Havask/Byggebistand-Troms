export default function Priser() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Tjenester</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Her er våre priser...</p>

        {/* Tilstandsrapport Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">TILSTANDSRAPPORT IHT FORSKRIFT EKSKL VERDI</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eks mva</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inkl mva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Enebolig", "19 000", "23 750"],
                  ["Tomannsbolig", "17 000", "21 250"],
                  ["Rekkehus", "16 000", "20 000"],
                  ["Leiligheter under 60 m²", "12 000", "15 000"],
                  ["Leiligheter over 60 m²", "13 000", "16 250"],
                  ["Fritidseiendom", "14 000", "17 500"],
                  ["Verdi i tillegg til takster over", "4 000", "5 000"],
                ].map(([type, eks, inkl]) => (
                  <tr key={type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{eks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{inkl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pantedokumenter Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">PANTEDOKUMENTER I BANK MED VERDI</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eks mva</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inkl mva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Enebolig", "8 400", "10 500"],
                  ["Tomannsbolig", "7 920", "9 900"],
                  ["Rekkehus", "7 920", "9 900"],
                  ["Leiligheter under 60 m²", "6 560", "8 200"],
                  ["Leiligheter over 60 m²", "7 200", "9 000"],
                  ["Fritidseiendom", "6 800", "8 500"],
                ].map(([type, eks, inkl]) => (
                  <tr key={type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{eks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{inkl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tilleggstjenester Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">TILLEGGSTJENESTER UNDER VERDITAKSERING</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eks mva</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inkl mva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Separat utleiedel i egen bolig", "2 880", "3 600"],
                  ["Garasje/anneks eller uthus", "2 880", "3 600"],
                ].map(([type, eks, inkl]) => (
                  <tr key={type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{eks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{inkl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Forhåndstakster Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">FORHÅNDSTAKSTER</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eks mva</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inkl mva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Enebolig", "7 920", "9 900"],
                  ["Tomannsbolig", "7 920", "9 900"],
                  ["Rekkehus", "8 640", "10 800"],
                  ["Leiligheter under 60 m²", "6 192", "7 740"],
                  ["Leiligheter over 60 m²", "7 200", "9 000"],
                  ["Fritidseiendom", "6 912", "8 640"],
                  ["Tomtetakster bolig", "8 640", "10 800"],
                  ["Næringstakster i hht avtale", "Tilbud", "Tilbud"],
                  ["Byggelånsoppfølging", "Tilbud", "Tilbud"],
                  ["Finansiell byggelånsoppfølging", "Tilbud", "Tilbud"],
                ].map(([type, eks, inkl]) => (
                  <tr key={type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{eks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{inkl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ordinære Timepriser Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">ORDINÆRE TIMEPRISER I PROSJEKTER SOM:</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eks mva</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inkl mva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Ansvarlig søker og byggesøknader", "1 560", "1 950"],
                  ["Prosjektledelse med utarbeiding av tilbudsdokumenter", "1 560", "1 950"],
                  ["Vedlikeholdsplaner for borettslag og boligsameier", "Tilbud", "Tilbud"],
                  ["Byggekontrolloppdrag", "Tilbud", "Tilbud"],
                ].map(([type, eks, inkl]) => (
                  <tr key={type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{eks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{inkl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reise / Kjøring Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">REISE / KJØRING</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eks mva</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inkl mva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Reisekostnader/bykjøring kr 300 eks mva", "Medgått", "Medgått"],
                  ["Ferger/tunell/bomstasjoner etc kr 6 pr km eks mva", "Medgåtte km", "Medgåtte km"],
                ].map(([type, eks, inkl]) => (
                  <tr key={type} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{eks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{inkl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}