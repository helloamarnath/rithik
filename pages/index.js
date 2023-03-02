import Head from "next/head";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Works from "../components/Works";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Rithik Amarnath ← A Student. I am studying 3rd STD in Jeevana School.
        </title>
        <meta
          name="description"
          content="
          Rithik Amarnath ← A Student. I am studying 3rd STD in Jeevana School.."
        />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Rithik Amarnath ← A Student. I am studying 3rd STD in Jeevana School."
        />
        <meta
          name="keywords"
          content="Rithik Amarnath ← A Student. I am studying 3rd STD in Jeevana School."
        />
        <meta name="og:url" content="https://Rithikamarnath.com" />
        <meta
          name="og:description"
          content="
          Rithik Amarnath ← A Student. I am studying 3rd STD in Jeevana School."
        />
        <meta name="og:image" content="/assets/images/rithik.png" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className={styles.card}>
        <Card.Body>
          <Header />
          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}
