import Head from "next/head";

export default function Weekly() {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Head>
        <title>MVOHWR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-4xl uppercase text-bold py-3">
          Motor Vehicle Operator Hours of Work Regulations
        </h1>

        <p className="text-center text-4xl uppercase text-bold py-3">
          weekly
        </p>
        <section>
          <ul>
            <li>date</li>
            <li>weekly_work_schedule__total_hours_highway_operator</li>
            <li>weekly_work_schedule__total_hours_bus_operator</li>
            <li>weekly_work_schedule__total_hours_city_operator</li>
            <li>weekly_work_schedule__total_hours_other</li>
            <li>weekly_work_schedule__total_holiday_days_in_period</li>
          </ul>
        </section>
      </main>
      <footer className="text-center text-4xl uppercase text-bold py-3">
        Link to <a href="https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._990/index.html">legislation</a>
      </footer>
    </div>
  );
}
