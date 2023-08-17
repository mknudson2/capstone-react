import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function LaxTextKp1() {
  const handleWordClick = (word: string) => {
    console.log("Clicked word: ${word}");
  };

  const popoverContent = (word: string, header: string, body: string) => (
    <Popover id={`popover-${word}`}>
      <Popover.Header as="h2">{header}</Popover.Header>
      <Popover.Body>{body}</Popover.Body>
    </Popover>
  );

  const handleLocationClick = (locationName: string) => {
    setSelectedLocation(locationName);
  };

  return (
    <div className="saga-textbox-format">
      <h2>Chapter 1</h2>
      <hr />
      <p className="saga-text-format">
        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={popoverContent(
            "Ketill",
            "Proper Noun (Masc. Nom)",
            "(Ketill / Ketil / Ketli / Ketils) \nMore information on Ketill and his family can be found in Eyrbyggja saga [chapter 1] and Landnámabók."
          )}
        >
          <span className="noun" id="">
            Ketill{" "}
          </span>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={popoverContent("flatnefr", "flatnose", "byname (Masc. Nom.")}
        >
          <span className="byname" id="">
            flatnefr{" "}
          </span>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={popoverContent(
            "hét",
            "was called / was named",
            "at heita; pres: heit, heitir, Pret: hét, hétu, 2nd hézt (+acc) "
          )}
        >
          <span className="verb" id="">
            hét{" "}
          </span>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={popoverContent(
            "maðr",
            "(a) man",
            "Masc. Nom. Strong Noun: maðr / mann / manni / manns"
          )}
        >
          <span className="noun" id="">
            maðr
          </span>
        </OverlayTrigger>

        <span>, </span>

        <OverlayTrigger
          trigger="click"
          placement="top"
          overlay={popoverContent(
            "sonr",
            "son",
            "Masc. Nom. Strong Noun: sonr / son / syni / sons"
          )}
        >
          <span className="noun" id="">
            sonr{" "}
          </span>
        </OverlayTrigger>

        <span className="noun" id="">
          Bjarnar{" "}
        </span>
        <span className="byname" id="">
          bunu
        </span>
        <span>; </span>
        <span className="pronoun" id="">
          hann{" "}
        </span>
        <span className="verb" id="">
          var{" "}
        </span>
        <span className="noun" id="">
          hersir{" "}
        </span>
        <span className="adjective" id="">
          ríkr{" "}
        </span>
        <span className="preposition" id="">
          í{" "}
        </span>
        <span
          className="noun"
          id=""
          onClick={() => handleLocationClick("Norway")}
        >
          Nóregi{" "}
        </span>
        <span className="conjunction" id="">
          ok{" "}
        </span>
        <span className="adjective" id="">
          kynstórr
        </span>
        <span>. </span>
        <span className="pronoun" id="">
          Hann{" "}
        </span>
        <span className="verb" id="">
          bjó{" "}
        </span>
        <span className="preposition" id="">
          í{" "}
        </span>
        <span
          className="noun"
          id=""
          onClick={() => handleLocationClick("Raumsdal")}
        >
          Raumsdal{" "}
        </span>
        <span className="preposition" id="">
          í{" "}
        </span>
        <span
          className="noun"
          id=""
          onClick={() => handleLocationClick("Raumsdal")}
        >
          Raumsdœlafylki
        </span>
        <span>; </span>
        <span className="pronoun" id="">
          þat{" "}
        </span>
        <span className="verb" id="">
          er{" "}
        </span>
        <span className="preposition" id="">
          milli{" "}
        </span>
        <span
          className="noun"
          id=""
          onClick={() => handleLocationClick("Sunnmœrr")}
        >
          Sunnmœrar{" "}
        </span>
        <span className="conjunction" id="">
          ok{" "}
        </span>
        <span
          className="noun"
          id=""
          onClick={() => handleLocationClick("Norðmœrr")}
        >
          Norðmœrar
        </span>
        <span>. </span>
        <span className="noun" id="">
          Ketill{" "}
        </span>
        <span className="byname" id="">
          flatnefr{" "}
        </span>
        <span className="verb" id="">
          átti{" "}
        </span>
        <span className="noun" id="">
          Yngvildi
        </span>
        <span>, </span>
        <span className="noun" id="">
          dóttur{" "}
        </span>
        <span className="noun" id="">
          Ketils{" "}
        </span>
        <span className="byname" id="">
          veðrs
        </span>
        <span>, </span>
        <span className="adjective" id="">
          ágæts{" "}
        </span>
        <span className="noun" id="">
          manns
        </span>
        <span>. </span>
        <span className="pronoun" id="">
          Þeira{" "}
        </span>
        <span className="noun" id="">
          bǫrn{" "}
        </span>
        <span className="verb" id="">
          váru{" "}
        </span>
        <span className="numeral" id="">
          fimm
        </span>
        <span>; </span>
        <span className="verb" id="">
          hét{" "}
        </span>
        <span className="numeral" id="">
          einn{" "}
        </span>
        <span className="noun" id="">
          Bjǫrn{" "}
        </span>
        <span className="byname" id="">
          inn austrœni
        </span>
        <span>, </span>
        <span className="pronoun" id="">
          annarr{" "}
        </span>
        <span className="noun" id="">
          Helgi{" "}
        </span>
        <span className="byname" id="">
          bjólan
        </span>
        <span>. </span>
        <span className="noun" id="">
          Þórunn{" "}
        </span>
        <span className="byname" id="">
          hyrna{" "}
        </span>
        <span className="verb" id="">
          hét{" "}
        </span>
        <span className="noun" id="">
          dóttir{" "}
        </span>
        <span className="noun" id="">
          Ketils
        </span>
        <span>, </span>
        <span className="pronoun" id="">
          er{" "}
        </span>
        <span className="verb" id="">
          átti{" "}
        </span>
        <span className="noun" id="">
          Helgi{" "}
        </span>
        <span className="byname" id="">
          inn magri
        </span>
        <span>, </span>
        <span className="noun" id="">
          sonr{" "}
        </span>
        <span className="noun" id="">
          Eyvindar{" "}
        </span>
        <span className="byname" id="">
          austmanns{" "}
        </span>
        <span className="conjunction" id="">
          ok{" "}
        </span>
        <span className="noun" id="">
          Rafǫrtu
        </span>
        <span>, </span>
        <span className="noun" id="">
          dóttur{" "}
        </span>
        <span className="noun" id="">
          Kjarvals{" "}
        </span>
        <span className="noun" id="">
          Írakonungs
        </span>
        <span>. </span>
        <span className="noun" id="">
          Unnr{" "}
        </span>
        <span className="byname" id="">
          in djúpúðga{" "}
        </span>
        <span className="verb" id="">
          var{" "}
        </span>
        <span className="conjunction" id="">
          enn{" "}
        </span>
        <span className="noun" id="">
          dóttir{" "}
        </span>
        <span className="noun" id="">
          Ketils
        </span>
        <span>, </span>
        <span>er </span>
        <span className="verb" id="">
          átti{" "}
        </span>
        <span className="noun" id="">
          Óláfr{" "}
        </span>
        <span className="byname" id="">
          hvíti{" "}
        </span>
        <span className="noun" id="">
          Ingjaldsson
        </span>
        <span>, </span>
        <span className="noun" id="">
          Fróðasonar{" "}
        </span>
        <span className="byname" id="">
          ins frœkna
        </span>
        <span>, </span>
        <span className="pronoun" id="">
          er{" "}
        </span>
        <span className="noun" id="">
          Svertlingar{" "}
        </span>
        <span className="verb" id="">
          drápu
        </span>
        <span>. </span>
        <span className="noun" id="">
          Jórunn{" "}
        </span>
        <span className="byname" id="">
          manvitsbrekka{" "}
        </span>
        <span className="verb" id="">
          hét{" "}
        </span>
        <span className="conjunction" id="">
          enn{" "}
        </span>
        <span className="noun" id="">
          dóttir{" "}
        </span>
        <span className="noun" id="">
          Ketils
        </span>
        <span>; </span>
        <span className="pronoun" id="">
          hon{" "}
        </span>
        <span className="verb" id="">
          var{" "}
        </span>
        <span className="noun" id="">
          móðir{" "}
        </span>
        <span className="noun" id="">
          Ketils{" "}
        </span>
        <span className="byname" id="">
          ins fiskna
        </span>
        <span>, </span>
        <span className="pronoun" id="">
          er{" "}
        </span>
        <span className="verb" id="">
          nam{" "}
        </span>
        <span className="noun" id="">
          land{" "}
        </span>
        <span className="preposition" id="">
          í{" "}
        </span>

          <span
            className="noun"
            id=""
            onClick={() => handleLocationClick("Kirkjubœr")}
          >
            Kirkjubœ
          </span>
        <span>; </span>
        <span className="pronoun" id="">
          {" "}
          hans{" "}
        </span>
        <span className="noun" id="">
          sonr
        </span>
        <span className="verb" id="">
          var{" "}
        </span>
        <span className="noun" id="">
          Ásbjǫrn
        </span>
        <span>, </span>
        <span className="noun" id="">
          faðir{" "}
        </span>
        <span className="noun" id="">
          Þorsteins
        </span>
        <span>, </span>
        <span className="noun" id="">
          fǫður{" "}
        </span>
        <span className="noun" id="">
          Surts
        </span>
        <span>, </span>
        <span className="noun" id="">
          fǫður{" "}
        </span>
        <span className="noun" id="">
          Sighvats{" "}
        </span>
        <span className="noun" id="">
          lǫgsǫgumanns
        </span>
        <span>.</span>
      </p>
    </div>
  );
}
function setSelectedLocation(locationName: any) {
  throw new Error("Function not implemented.");
}
