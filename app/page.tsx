import { Misskey } from "@/app/_components/misskey";
import {
  Cake,
  GenderAmbiguous,
  Github,
  Joystick,
  Laptop,
  PinMap,
  Twitter,
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <h1>ねんねこ</h1>
              <p className="subtitle"> / nennneko5787</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.5em",
              }}
            >
              <a href="https://github.com/nennneko5787">
                <Github />
              </a>
              <a href="https://x.com/Fng1Popn">
                <Twitter />
              </a>
              <a href="https://misskey.nukumori-sky.net/@nennneko5787">
                <Misskey />
              </a>
            </div>
          </div>

          <hr />

          <div className="columns is-multiline">
            <div className="column is-one-third">
              <h2>About me</h2>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <PinMap /> Iwate, Japan
                </li>
                <li>
                  <Cake /> 2010-05-25
                </li>
                <li>
                  <GenderAmbiguous /> Male
                </li>
                <li>
                  <Joystick /> Coding, Drawing, play rhythm games and chorus
                </li>
              </ul>
            </div>
            <div className="column is-one-third">
              <h2>Skills</h2>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Laptop /> Coding by Python, TypeScript and{" "}
                  <a href="https://hsp.tv">HSP3</a>
                </li>
                <li>
                  <small>... wait. Do I have only one skill?</small>
                </li>
              </ul>
            </div>
            <div className="column is-one-third">
              <h2>Projects / Contribute</h2>
              <ul>
                <li>
                  <a href="https://14chan.jp">14chan.jp</a>
                </li>
                <li>
                  <a href="https://discord.com/oauth2/authorize?client_id=1315990542366281728">
                    neko's Music Bot
                  </a>
                </li>
                <li>
                  <a href="https://dislounge.net">DisLounge</a>
                </li>
                <li>
                  <a href="https://github.com/d60/twikit">twikit</a>
                </li>
                <li>... and more little apps and tools</li>
              </ul>
            </div>
            <div className="column is-half">
              <h2>Links</h2>
              <p>
                <small>
                  If you want to publish your website here, please{" "}
                  <a href="https://github.com/nennneko5787/nennneko5787.net/issues/new">
                    open issue at the repository
                  </a>
                  .
                </small>
              </p>
            </div>
            <div className="column is-half">
              <h2>Contact me</h2>
              <p>
                If you want to contact me, please send a message to my discord (
                <code>pjcd</code>).
                <br />
                That's probably the quickest way to do it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
