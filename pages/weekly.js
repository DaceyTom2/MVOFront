import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { WeeklyForm } from "../components/molecules/WeeklyForm";
export default function Weekly() {
  return (
    <Layout
      bannerTitle="Motor Vehicle Operator Hours of Work Regulations"
      bannerText="Weekly overtime calculator"
      bannerBecomeTesterText="Become a Tester"
      bannerStartTestingText="Start testing"
    >
      <Head>
        <title>MVOHWR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container">
        <WeeklyForm></WeeklyForm>
      </section>
    </Layout>
  );
}
