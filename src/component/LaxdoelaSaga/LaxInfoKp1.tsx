import { Tabs, Tab } from "react-bootstrap";

export default function LaxInfoKp1() {
  return (
    <section className="info-box">
      <div className="lax-info">
        <h4>Key</h4>
        <hr/>
        <p className="noun-key">Noun</p>
        <p className="byname-key">Byname</p>
        <p className="pronoun-key">Pronoun</p>
        <p className="text-verb-key">Verb</p>
        <p className="adjective-key">Adjective</p>
        <p className="preposition-key">Preposition</p>
        <p className="conjunction-key">Conjunction</p>
        <p className="numeral-key">Numeral</p>
        <p></p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 tabs"
        justify
      >
        <Tab eventKey="About" title="About the Saga">
          <p className="tab-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit quisquam aut dicta, magnam natus. Deserunt consequuntur reiciendis nostrum magni, fugit ducimus unde quaerat delectus eveniet laudantium ex. Ipsam aspernatur corrupti ratione neque quibusdam necessitatibus molestiae numquam eius temporibus dolorem ullam error sequi optio minima rem voluptas sapiente, maiores quae?</p>
        </Tab>
        <Tab eventKey="Irish" title="The Irish Connection">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit quisquam aut dicta, magnam natus. Deserunt consequuntur reiciendis nostrum magni, fugit ducimus unde quaerat delectus eveniet laudantium ex. Ipsam aspernatur corrupti ratione neque quibusdam necessitatibus molestiae numquam eius temporibus dolorem ullam error sequi optio minima rem voluptas sapiente, maiores quae?</p>
        </Tab>
        <Tab eventKey="Women" title="Women in the Sagas">
          <p className="tab-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit quisquam aut dicta, magnam natus. Deserunt consequuntur reiciendis nostrum magni, fugit ducimus unde quaerat delectus eveniet laudantium ex. Ipsam aspernatur corrupti ratione neque quibusdam necessitatibus molestiae numquam eius temporibus dolorem ullam error sequi optio minima rem voluptas sapiente, maiores quae?</p>
        </Tab>
        <Tab eventKey="Religion" title="Christianity and Myth">
          <p className="tab-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit quisquam aut dicta, magnam natus. Deserunt consequuntur reiciendis nostrum magni, fugit ducimus unde quaerat delectus eveniet laudantium ex. Ipsam aspernatur corrupti ratione neque quibusdam necessitatibus molestiae numquam eius temporibus dolorem ullam error sequi optio minima rem voluptas sapiente, maiores quae?</p>
        </Tab>
        <Tab eventKey="Ideal" title="The Noble Heathen">
          <p className="tab-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit quisquam aut dicta, magnam natus. Deserunt consequuntur reiciendis nostrum magni, fugit ducimus unde quaerat delectus eveniet laudantium ex. Ipsam aspernatur corrupti ratione neque quibusdam necessitatibus molestiae numquam eius temporibus dolorem ullam error sequi optio minima rem voluptas sapiente, maiores quae?</p>
        </Tab>
      </Tabs>
    </section>
  );
}
